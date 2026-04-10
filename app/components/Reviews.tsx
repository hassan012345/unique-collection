"use client";

import ShowMore from "@/components/SeeMore";

// ── Types ──────────────────────────────────────────────────────────
export interface ReviewItem {
  id: string | number;
  name: string;
  rating: number; // e.g. 3.0
  date: string; // e.g. "03 Dec, 2025"
  comment: string;
}

export interface ReviewBreakdown {
  stars: number; // 5 | 4 | 3 | 2 | 1
  count: number;
}

export interface ProductReviewsProps {
  /** Section heading. Default: "Reviews" */
  heading?: string;
  average: number;
  total: number; // total review count shown in RatingsBox
  breakdown: ReviewBreakdown[];
  items: ReviewItem[];
  /** Max height of the review list before "See More" kicks in. Default: 440 */
  collapseHeight?: number;
}

const NM = "var(--font-neue-montreal)";

// ─────────────────────────────────────────────────────────────────
// Star icon  (Figma: 14.648 × 13.996px — rendered as 15 × 14)
// ─────────────────────────────────────────────────────────────────
function Star({ filled }: { filled: boolean }) {
  return (
    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" aria-hidden>
      <path
        d="M7.5 1.08l1.72 3.49 3.85.56-2.79 2.71.66 3.84L7.5 9.74 3.56 11.68l.66-3.84L1.43 5.13l3.85-.56L7.5 1.08z"
        fill={filled ? "#FF8904" : "#E5E5E5"}
      />
    </svg>
  );
}

// Renders 5 stars for a given numeric rating (whole stars only from Figma)
function StarRow({ rating, gap = 8 }: { rating: number; gap?: number }) {
  return (
    <div className="flex items-center" style={{ gap: `${gap}px` }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <Star key={s} filled={rating >= s} />
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// RatingsBox  (Figma: bg-#FAFAFA, px-32 py-24, rounded-20, w-357+padding)
// ─────────────────────────────────────────────────────────────────
function RatingsBox({
  average,
  total,
  breakdown,
}: {
  average: number;
  total: number;
  breakdown: ReviewBreakdown[];
}) {
  // Max count across all stars — used to calculate bar widths
  const maxCount = Math.max(...breakdown.map((b) => b.count), 1);

  // Figma bar widths: 5★=171px, 4★=108px, 3★=54px, 2★=20px, 1★=0px out of ~293px total
  // We replicate this with a percentage relative to maxCount
  const BAR_MAX_PX = 171; // widest bar in Figma (5★ bar = 171px)

  return (
    <div
      className="flex flex-col gap-5 shrink-0"
      style={{
        backgroundColor: "#FAFAFA",
        borderRadius: "20px",
        padding: "24px 32px",
        width: "fit-content",
        minWidth: "280px",
      }}
    >
      {/* "OverAll Rating" */}
      <p
        className="text-[20px] font-medium text-black leading-[1.5]"
        style={{ fontFamily: NM }}
      >
        OverAll Rating
      </p>

      {/* Big score + stars + count */}
      <div className="flex items-center gap-4">
        {/* Score */}
        <p
          className="text-[28px] font-bold text-[#525252] leading-[1.5] whitespace-nowrap"
          style={{ fontFamily: NM }}
        >
          {average.toFixed(1)}
        </p>

        {/* Stars + review count */}
        <div className="flex flex-col gap-1 flex-1">
          <StarRow rating={average} gap={8} />
          <p
            className="text-[16px] text-[#525252] leading-[1.5] whitespace-nowrap"
            style={{ fontFamily: NM, fontWeight: 400 }}
          >
            ({total.toLocaleString()} reviews)
          </p>
        </div>
      </div>

      {/* Breakdown bars  5 → 1 */}
      <div className="flex flex-col gap-2">
        {[5, 4, 3, 2, 1].map((star) => {
          const item = breakdown.find((b) => b.stars === star);
          const count = item?.count ?? 0;
          // Bar fill width as % of the max-count bar
          const pct = maxCount > 0 ? (count / maxCount) * 100 : 0;

          return (
            <div key={star} className="flex items-center gap-3">
              {/* Star number + star icon */}
              <div className="flex items-center gap-1 flex-none">
                <p
                  className="text-[16px] text-black leading-[1.5]"
                  style={{ fontFamily: NM, fontWeight: 400, width: "9px" }}
                >
                  {star}
                </p>
                {/* Small filled star icon (Figma: 14.648 × 13.996) */}
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M7.5 1.08l1.72 3.49 3.85.56-2.79 2.71.66 3.84L7.5 9.74 3.56 11.68l.66-3.84L1.43 5.13l3.85-.56L7.5 1.08z"
                    fill="#FF8904"
                  />
                </svg>
              </div>

              {/* Track + fill */}
              <div
                className="flex-1 rounded-full overflow-hidden"
                style={{ backgroundColor: "#B7C5C0", height: "10px" }}
              >
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${pct}%`,
                    backgroundColor: "#184335",
                    transition: "width 0.4s ease",
                  }}
                />
              </div>

              {/* Count */}
              <p
                className="text-[16px] text-black leading-[1.5] text-right"
                style={{ fontFamily: NM, fontWeight: 400, width: "28px" }}
              >
                {count}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Avatar  (Figma: 48px circle, bg-#F5F5F5, initials 14px #0A0A0A)
// ─────────────────────────────────────────────────────────────────
function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0] ?? "")
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className="flex items-center justify-center rounded-full shrink-0"
      style={{
        width: "48px",
        height: "48px",
        backgroundColor: "#F5F5F5",
      }}
    >
      <span
        className="text-[14px] text-[#0A0A0A] text-center leading-[1.5]"
        style={{ fontFamily: NM, fontWeight: 400 }}
      >
        {initials}
      </span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// UserReview card  (Figma: w-628, flex-col gap-24, divider at top)
// ─────────────────────────────────────────────────────────────────
function UserReviewCard({ review }: { review: ReviewItem }) {
  return (
    <div className="flex flex-col w-full" style={{ gap: "24px" }}>
      {/* Top divider line */}
      <div
        className="w-full"
        style={{ height: "1px", backgroundColor: "#E5E5E5" }}
      />

      {/* Avatar + content */}
      <div className="flex items-start" style={{ gap: "16px" }}>
        <Avatar name={review.name} />

        <div className="flex flex-col flex-1 min-w-0" style={{ gap: "12px" }}>
          {/* Name row + date */}
          <div className="flex items-start justify-between w-full">
            {/* Name + stars */}
            <div
              className="flex flex-col"
              style={{ gap: "0px", width: "144px" }}
            >
              <p
                className="text-[14px] text-black leading-[1.5]"
                style={{ fontFamily: NM, fontWeight: 400 }}
              >
                {review.name}
              </p>
              {/* Stars + numeric rating */}
              <div className="flex items-center" style={{ gap: "8px" }}>
                <StarRow rating={review.rating} gap={8} />
                <p
                  className="text-[16px] text-[#525252] leading-[1.5] whitespace-nowrap"
                  style={{ fontFamily: NM, fontWeight: 400 }}
                >
                  {review.rating.toFixed(1)}
                </p>
              </div>
            </div>

            {/* Date */}
            <p
              className="text-[16px] text-[#525252] leading-[1.5] whitespace-nowrap"
              style={{
                fontFamily: NM,
                fontWeight: 400,
                width: "100px",
                textAlign: "right",
              }}
            >
              {review.date}
            </p>
          </div>

          {/* Comment */}
          <p
            className="text-[16px] text-black leading-[1.5] w-full"
            style={{ fontFamily: NM, fontWeight: 400 }}
          >
            {review.comment}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Main ProductReviews
// ─────────────────────────────────────────────────────────────────
export default function ProductReviews({
  heading = "Reviews",
  average,
  total,
  breakdown,
  items,
  collapseHeight = 440,
}: ProductReviewsProps) {
  return (
    <div className="flex flex-col w-full" style={{ gap: "31px" }}>
      {/* "Reviews" heading — Figma: right-aligned over w-628 column */}
      <div className="flex justify-end w-full">
        <p
          className="text-[32px] font-medium text-black leading-[1.5]"
          style={{ fontFamily: NM, width: "630px", maxWidth: "100%" }}
        >
          {heading}
        </p>
      </div>

      {/* Two-column layout: RatingsBox left (right-aligned) | reviews right */}
      <div
        className="flex flex-col lg:flex-row items-start w-full"
        style={{ gap: "24px" }}
      >
        {/* Left: Ratings box — right-aligned in left half */}
        <div className="flex justify-end flex-1 min-w-0">
          <RatingsBox average={average} total={total} breakdown={breakdown} />
        </div>

        {/* Right: review cards with ShowMore */}
        <div
          className="flex-1 min-w-0 lg:w-[628px] lg:flex-none"
          style={{ maxWidth: "628px" }}
        >
          <ShowMore
            maxHeight={collapseHeight}
            fadeHeight={158}
            label="See More"
            collapseLabel="See Less"
            buttonAlign="center"
          >
            <div className="flex flex-col w-full">
              {items.map((review) => (
                <UserReviewCard key={review.id} review={review} />
              ))}
            </div>
          </ShowMore>
        </div>
      </div>
    </div>
  );
}
