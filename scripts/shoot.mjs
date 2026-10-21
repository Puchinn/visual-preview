// Captura pantallas vía Chrome DevTools Protocol, sin dependencias externas.
// Node 22+ trae WebSocket global, así que no hace falta instalar nada.
//
// Uso: node scripts/shoot.mjs <url> <salida.png> [ancho] [alto] [fullPage] [script] [waitMs]
//
// El argumento `script` es opcional: código JS que se evalúa en la página
// antes de capturar (por ejemplo, para responder el modal de bienvenida).
// Puede ser el código inline o la ruta a un archivo .js — la ruta es la vía
// recomendada desde PowerShell, donde el quoting de un string con comillas
// se escapa mal.
// `waitMs` es la espera antes de capturar, útil para la animación de entrada.

import { spawn } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const [
  ,
  ,
  url,
  out,
  w = "1440",
  h = "900",
  full = "false",
  scriptArg = "",
  waitMs = "2500",
] = process.argv;

let evalScript = scriptArg;

if (
  evalScript &&
  fs.existsSync(evalScript) &&
  fs.statSync(evalScript).isFile()
) {
  evalScript = fs.readFileSync(evalScript, "utf8");
}

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const PORT = 9333 + Math.floor(Math.random() * 300);
const profileDir = fs.mkdtempSync(path.join(os.tmpdir(), "shot-"));

const chrome = spawn(CHROME, [
  "--headless=new",
  "--disable-gpu",
  "--hide-scrollbars",
  "--no-first-run",
  "--no-default-browser-check",
  "--disable-extensions",
  "--force-device-scale-factor=1",
  `--user-data-dir=${profileDir}`,
  `--remote-debugging-port=${PORT}`,
  `--window-size=${w},${h}`,
  "about:blank",
]);

const cleanup = () => {
  try {
    chrome.kill();
  } catch {}
  // Chrome puede seguir escribiendo en el perfil un instante después del kill.
  try {
    fs.rmSync(profileDir, { recursive: true, force: true, maxRetries: 3 });
  } catch {
    // El perfil temporal lo limpia el sistema.
  }
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
const consoleErrors = [];

ws.addEventListener("message", (ev) => {
  const msg = JSON.parse(ev.data);
  if (msg.id && pending.has(msg.id)) {
    const { resolve, reject } = pending.get(msg.id);
    pending.delete(msg.id);
    if (msg.error) reject(new Error(JSON.stringify(msg.error)));
    else resolve(msg.result);
    return;
  }
  if (msg.method === "Runtime.consoleAPICalled" && msg.params.type === "error") {
    consoleErrors.push(
      msg.params.args.map((a) => a.value ?? a.description ?? "?").join(" ")
    );
  }
  if (msg.method === "Runtime.exceptionThrown") {
    consoleErrors.push(
      `PAGEERROR: ${msg.params.exceptionDetails.exception?.description ?? ""}`
    );
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
  width: Number(w),
  height: Number(h),
  deviceScaleFactor: 1,
  mobile: false,
});

await send("Page.navigate", { url });
// Esperamos a que se dispare loadEvent.
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

await new Promise((r) => setTimeout(r, 2500));

if (evalScript) {
  const r = await send("Runtime.evaluate", {
    expression: evalScript,
    awaitPromise: true,
    returnByValue: true,
  });
  if (r.exceptionDetails) {
    console.log("eval error:", r.exceptionDetails.text);
  }
  await new Promise((r) => setTimeout(r, 1500));
}

// La espera final se aplica después del script, para poder capturar
// estados que dependen de una animación larga (ej. el logo de entrada).
await new Promise((r) => setTimeout(r, Number(waitMs)));

const shot = await send("Page.captureScreenshot", {
  format: "png",
  captureBeyondViewport: full === "true",
  ...(full === "true" ? { optimizeForSpeed: true } : {}),
});

fs.writeFileSync(out, Buffer.from(shot.data, "base64"));
console.log(`saved ${out}`);

if (consoleErrors.length) {
  console.log("--- console errors ---");
  for (const e of consoleErrors) console.log(e);
} else {
  console.log("no console errors");
}

ws.close();
cleanup();
process.exit(0);
