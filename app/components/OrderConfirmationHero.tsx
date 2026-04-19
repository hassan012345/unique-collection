"use client";

/**
 * components/order-confirmation/OrderConfirmationHero.tsx
 *
 * Figma specs:
 *   Circle:    150×150px, bg-#245749, border-radius 75px
 *   Icon:      CheckCircle 90×90px white
 *   Heading:   Neue Montreal Medium 32px black, text-center
 *   Subtitle:  Neue Montreal Regular 18px #245749, text-center
 *   Gap:       24px between circle and text block, 8px between heading and subtitle
 */

const NM = "var(--font-neue-montreal)";

// Inline SVG check-circle (matches Figma CheckCircle icon)
function CheckCircleIcon() {
  return (
    <svg
      width="90" height="90" viewBox="0 0 90 90" fill="none"
      aria-hidden
    >
      <circle cx="45" cy="45" r="44" stroke="white" strokeWidth="2" />
      <path
        d="M25 45L38 58L65 32"
        stroke="white" strokeWidth="5"
        strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

interface Props {
  heading?:  string;
  subtitle?: string;
}

export default function OrderConfirmationHero({
  heading  = "Thank you for your Purchase!",
  subtitle = "A confirmation email with your receipt has been sent to the team",
}: Props) {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      {/* Green circle with check icon */}
      <div
        className="flex items-center justify-center shrink-0"
        style={{
          width:           "150px",
          height:          "150px",
          backgroundColor: "#245749",
          borderRadius:    "75px",
        }}
      >
        <CheckCircleIcon />
      </div>

      {/* Text block */}
      <div className="flex flex-col gap-2 items-center w-full text-center">
        <h1
          className="text-[32px] font-medium text-black leading-[1.5]"
          style={{ fontFamily: NM }}
        >
          {heading}
        </h1>
        <p
          className="text-[18px] leading-[1.5] text-[#245749]"
          style={{ fontFamily: NM, fontWeight: 400 }}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
}
