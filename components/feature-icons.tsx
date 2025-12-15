"use client";

type IconVariant =
  | "line"
  | "dot"
  | "flow"
  | "pulse"
  | "orbit"
  | "wave"
  | "glow"
  | "spin"
  | "bounce";

interface IconProps {
  variant?: IconVariant;
  scale?: number;
}

export function QualityIcon({ variant = "line", scale = 1 }: IconProps) {
  const size = 24 * scale;

  if (variant === "dot") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-spin-slow"
      >
        <circle cx="12" cy="12" r="10" opacity="0.2" />
        <circle cx="12" cy="3" r="2" fill="currentColor" />
        <circle cx="19" cy="12" r="2" fill="currentColor" opacity="0.6" />
        <circle cx="12" cy="21" r="2" fill="currentColor" opacity="0.4" />
        <circle cx="5" cy="12" r="2" fill="currentColor" opacity="0.5" />
      </svg>
    );
  }

  if (variant === "flow") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-wave"
      >
        <path d="M12 2L16 8L8 8Z" />
        <path d="M16 10L20 16L12 16Z" opacity="0.7" />
        <path d="M8 10L12 16L4 16Z" opacity="0.5" />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="animate-float"
    >
      <circle cx="12" cy="12" r="10" opacity="0.3" />
      <path d="M12 2L15.5 9H22L16.5 13.5L19 20L12 15.5L5 20L7.5 13.5L2 9H8.5L12 2Z" />
    </svg>
  );
}

export function TimeIcon({ variant = "pulse", scale = 1 }: IconProps) {
  const size = 24 * scale;

  if (variant === "orbit") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-spin-reverse"
      >
        <circle cx="12" cy="12" r="9" opacity="0.2" />
        <circle
          cx="12"
          cy="3"
          r="1.5"
          fill="currentColor"
          className="animate-orbit"
        />
        <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.8" />
      </svg>
    );
  }

  if (variant === "wave") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-wave"
      >
        <path d="M4 12Q7 6 10 12T16 12" opacity="0.8" />
        <path d="M4 16Q7 10 10 16T16 16" opacity="0.5" />
        <circle cx="12" cy="12" r="10" opacity="0.15" />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="animate-pulse-glow"
    >
      <circle cx="12" cy="12" r="10" opacity="0.3" />
      <path d="M12 6V12L16 16" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}

export function CommitmentIcon({ variant = "glow", scale = 1 }: IconProps) {
  const size = 24 * scale;

  if (variant === "spin") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-spin-slow"
      >
        <path d="M4 14C4 10.5 6 8 9 8C10.5 8 12 9 12.5 10" opacity="0.7" />
        <path d="M20 14C20 10.5 18 8 15 8C13.5 8 12 9 11.5 10" opacity="0.7" />
        <path d="M7 12H17" strokeWidth="2" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    );
  }

  if (variant === "bounce") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-bounce-custom"
      >
        <path d="M4 14C4 10 6.5 8 9 8C10 8 11 8.5 11.5 9.5" opacity="0.8" />
        <path d="M20 14C20 10 17.5 8 15 8C14 8 13 8.5 12.5 9.5" opacity="0.8" />
        <path d="M8 12H16" strokeWidth="1.5" />
        <path
          d="M9 16C9 14.5 10 13.5 12 13.5C14 13.5 15 14.5 15 16"
          opacity="0.6"
        />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="animate-glow-pulse"
    >
      <path d="M4 14C4 10 6.5 8 9 8C10 8 11 8.5 11.5 9.5" />
      <path d="M20 14C20 10 17.5 8 15 8C14 8 13 8.5 12.5 9.5" />
      <path d="M8 12H16" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.8" />
    </svg>
  );
}

export function CheckIcon({ variant = "pulse", scale = 1 }: IconProps) {
  const size = 24 * scale;

  if (variant === "pulse") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-check-draw"
      >
        <circle cx="12" cy="12" r="10" opacity="0.2" />
        <path d="M8 12.5L11 15.5L17 8" className="stroke-current" />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="animate-pulse-glow"
    >
      <circle cx="12" cy="12" r="10" opacity="0.2" />
      <path d="M8 12.5L11 15.5L17 8" />
    </svg>
  );
}
