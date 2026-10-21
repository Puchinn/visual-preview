// Inspecciona la página: devuelve info de la consola y estilos calculados.
// Uso: node scripts/inspect.mjs <url> [expr] [ancho] [alto]
//
// Si expr es la ruta a un archivo .js, se lee de ahi. Es la via recomendada
// desde PowerShell, donde las comillas de una expresion con strings se
// escapan mal.
import { spawn } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

let expr = process.argv[3] ?? "1";
const url = process.argv[2];
const W = process.argv[4] ?? "1440";
const H = process.argv[5] ?? "900";

if (expr && expr !== "1" && fs.existsSync(expr) && fs.statSync(expr).isFile()) {
  expr = fs.readFileSync(expr, "utf8");
}

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const PORT = 9600 + Math.floor(Math.random() * 300);
const profileDir = fs.mkdtempSync(path.join(os.tmpdir(), "insp-"));

const chrome = spawn(CHROME, [
  "--headless=new",
  "--disable-gpu",
  "--hide-scrollbars",
  "--no-first-run",
  "--no-default-browser-check",
  `--user-data-dir=${profileDir}`,
  `--remote-debugging-port=${PORT}`,
  `--window-size=${W},${H}`,
  "about:blank",
]);

const cleanup = () => {
  try { chrome.kill(); } catch {}
  try { fs.rmSync(profileDir, { recursive: true, force: true, maxRetries: 3 }); } catch {}
};

function waitForTarget() {
  return new Promise((resolve, reject) => {
    const deadline = Date.now() + 30000;
    const tick = async () => {
      if (Date.now() > deadline) return reject(new Error("timeout CDP"));
      try {
        const res = await fetch(`http://127.0.0.1:${PORT}/json/list`);
        const list = await res.json();
        const page = list.find((t) => t.type === "page");
        if (page?.webSocketDebuggerUrl) return resolve(page.webSocketDebuggerUrl);
      } catch {}
      setTimeout(tick, 250);
    };
    tick();
  });
}

const wsUrl = await waitForTarget();
const ws = new WebSocket(wsUrl);
await new Promise((res, rej) => {
  ws.addEventListener("open", res, { once: true });
  ws.addEventListener("error", rej, { once: true });
});

let id = 0;
const pending = new Map();
const logs = [];

ws.addEventListener("message", (ev) => {
  const msg = JSON.parse(ev.data);
  if (msg.id && pending.has(msg.id)) {
    const { resolve, reject } = pending.get(msg.id);
    pending.delete(msg.id);
    if (msg.error) reject(new Error(JSON.stringify(msg.error)));
    else resolve(msg.result);
    return;
  }
  if (msg.method === "Runtime.consoleAPICalled") {
    logs.push({
      type: msg.params.type,
      text: msg.params.args.map((a) => a.value ?? a.description ?? "?").join(" "),
    });
  }
  if (msg.method === "Runtime.exceptionThrown") {
    logs.push({
      type: "exception",
      text: msg.params.exceptionDetails.exception?.description?.split("\n")[0] ?? "",
    });
  }
});

const send = (method, params = {}) =>
  new Promise((resolve, reject) => {
    const msgId = ++id;
    pending.set(msgId, { resolve, reject });
    ws.send(JSON.stringify({ id: msgId, method, params }));
  });

await send("Page.enable");
await send("Runtime.enable");
await send("Emulation.setDeviceMetricsOverride", {
  width: Number(W),
  height: Number(H),
  deviceScaleFactor: 1,
  mobile: false,
});
await send("Page.navigate", { url });
await new Promise((resolve) => {
  const onMsg = (ev) => {
    const m = JSON.parse(ev.data);
    if (m.method === "Page.loadEventFired") {
      ws.removeEventListener("message", onMsg);
      resolve();
    }
  };
  ws.addEventListener("message", onMsg);
  setTimeout(resolve, 25000);
});
await new Promise((r) => setTimeout(r, 3000));

const r = await send("Runtime.evaluate", {
  expression: expr,
  awaitPromise: true,
  returnByValue: true,
});

console.log("=== EVAL RESULT ===");
console.log(JSON.stringify(r.result?.value, null, 2));
if (r.exceptionDetails) console.log("EXC:", r.exceptionDetails.text);

console.log("\n=== CONSOLE ===");
for (const l of logs) console.log(`[${l.type}] ${l.text.slice(0, 400)}`);

ws.close();
cleanup();
process.exit(0);
