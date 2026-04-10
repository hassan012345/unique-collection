"use client";

import { useState, useRef, useEffect } from "react";

interface ShowMoreProps {
  children:       React.ReactNode;
  lines?:         number;
  maxHeight?:     number;
  fadeHeight?:    number;
  label?:         string;
  collapseLabel?: string;
  buttonAlign?:   "left" | "center" | "right";
  className?:     string;
}

// ── Chevron ────────────────────────────────────────────────────────
function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="16" height="16" viewBox="0 0 16 16" fill="none"
      aria-hidden
      style={{
        transition: "transform 0.25s ease",
        transform:  open ? "rotate(180deg)" : "rotate(0deg)",
        flexShrink: 0,
      }}
    >
      <path
        d="M4 6l4 4 4-4"
        stroke="#184335"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── Component ──────────────────────────────────────────────────────
export default function ShowMore({
  children,
  lines,
  maxHeight      = 300,
  fadeHeight     = 80,
  label          = "See more",
  collapseLabel  = "See less",
  buttonAlign    = "center",
  className      = "",
}: ShowMoreProps) {
  const [expanded,    setExpanded]    = useState(false);
  const [collapsedH,  setCollapsedH]  = useState<number | null>(null);
  const [fullH,       setFullH]       = useState<number>(0);
  const [needsToggle, setNeedsToggle] = useState(false);

  const innerRef = useRef<HTMLDivElement>(null);

  // Measure on mount and whenever children change
  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;

    const fH = el.scrollHeight;
    setFullH(fH);

    let clH: number;
    if (lines) {
      // Use actual rendered line-height for accuracy
      const lh = parseFloat(getComputedStyle(el).lineHeight) || 24;
      clH = Math.round(lh * lines);
    } else {
      clH = maxHeight;
    }

    setCollapsedH(clH);
    // Only show toggle if content is taller than the collapsed height
    setNeedsToggle(fH > clH + 4);
  }, [children, lines, maxHeight]);

  const clipHeight = expanded
    ? fullH
    : (collapsedH ?? (lines ? 9999 : maxHeight));

  const showFade = !expanded && needsToggle;

  const alignClass =
    buttonAlign === "left"   ? "justify-start" :
    buttonAlign === "right"  ? "justify-end"   :
    "justify-center";

  return (
    <div className={className}>
      {/* Clipping wrapper */}
      <div
        style={{
          position:   "relative",
          overflow:   "hidden",
          maxHeight:  `${clipHeight}px`,
          transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* Inner content — measured via ref */}
        <div ref={innerRef}>
          {children}
        </div>

        {/* Fade gradient overlay */}
        {showFade && fadeHeight > 0 && (
          <div
            aria-hidden
            style={{
              position:   "absolute",
              bottom:     0,
              left:       0,
              right:      0,
              height:     `${fadeHeight}px`,
              background: "linear-gradient(to bottom, transparent 0%, white 100%)",
              pointerEvents: "none",
            }}
          />
        )}
      </div>

      {/* Toggle button — only rendered when content overflows */}
      {needsToggle && (
        <div className={`flex ${alignClass} mt-3`}>
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="flex items-center gap-1.5 text-sm font-medium text-[#184335] hover:opacity-75 transition-opacity"
            style={{ fontFamily: "var(--font-neue-montreal)", background: "none", border: "none", padding: 0, cursor: "pointer" }}
          >
            <Chevron open={expanded} />
            {expanded ? collapseLabel : label}
          </button>
        </div>
      )}
    </div>
  );
}