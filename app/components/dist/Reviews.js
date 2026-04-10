"use client";
"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var SeeMore_1 = require("@/components/SeeMore");
var NM = "var(--font-neue-montreal)";
// ─────────────────────────────────────────────────────────────────
// Star icon  (Figma: 14.648 × 13.996px — rendered as 15 × 14)
// ─────────────────────────────────────────────────────────────────
function Star(_a) {
    var filled = _a.filled;
    return (React.createElement("svg", { width: "15", height: "14", viewBox: "0 0 15 14", fill: "none", "aria-hidden": true },
        React.createElement("path", { d: "M7.5 1.08l1.72 3.49 3.85.56-2.79 2.71.66 3.84L7.5 9.74 3.56 11.68l.66-3.84L1.43 5.13l3.85-.56L7.5 1.08z", fill: filled ? "#FF8904" : "#E5E5E5" })));
}
// Renders 5 stars for a given numeric rating (whole stars only from Figma)
function StarRow(_a) {
    var rating = _a.rating, _b = _a.gap, gap = _b === void 0 ? 8 : _b;
    return (React.createElement("div", { className: "flex items-center", style: { gap: gap + "px" } }, [1, 2, 3, 4, 5].map(function (s) { return (React.createElement(Star, { key: s, filled: rating >= s })); })));
}
// ─────────────────────────────────────────────────────────────────
// RatingsBox  (Figma: bg-#FAFAFA, px-32 py-24, rounded-20, w-357+padding)
// ─────────────────────────────────────────────────────────────────
function RatingsBox(_a) {
    var average = _a.average, total = _a.total, breakdown = _a.breakdown;
    // Max count across all stars — used to calculate bar widths
    var maxCount = Math.max.apply(Math, __spreadArrays(breakdown.map(function (b) { return b.count; }), [1]));
    // Figma bar widths: 5★=171px, 4★=108px, 3★=54px, 2★=20px, 1★=0px out of ~293px total
    // We replicate this with a percentage relative to maxCount
    var BAR_MAX_PX = 171; // widest bar in Figma (5★ bar = 171px)
    return (React.createElement("div", { className: "flex flex-col gap-5 shrink-0", style: {
            backgroundColor: "#FAFAFA",
            borderRadius: "20px",
            padding: "24px 32px",
            width: "fit-content",
            minWidth: "280px"
        } },
        React.createElement("p", { className: "text-[20px] font-medium text-black leading-[1.5]", style: { fontFamily: NM } }, "OverAll Rating"),
        React.createElement("div", { className: "flex items-center gap-4" },
            React.createElement("p", { className: "text-[28px] font-bold text-[#525252] leading-[1.5] whitespace-nowrap", style: { fontFamily: NM } }, average.toFixed(1)),
            React.createElement("div", { className: "flex flex-col gap-1 flex-1" },
                React.createElement(StarRow, { rating: average, gap: 8 }),
                React.createElement("p", { className: "text-[16px] text-[#525252] leading-[1.5] whitespace-nowrap", style: { fontFamily: NM, fontWeight: 400 } },
                    "(",
                    total.toLocaleString(),
                    " reviews)"))),
        React.createElement("div", { className: "flex flex-col gap-2" }, [5, 4, 3, 2, 1].map(function (star) {
            var _a;
            var item = breakdown.find(function (b) { return b.stars === star; });
            var count = (_a = item === null || item === void 0 ? void 0 : item.count) !== null && _a !== void 0 ? _a : 0;
            // Bar fill width as % of the max-count bar
            var pct = maxCount > 0 ? (count / maxCount) * 100 : 0;
            return (React.createElement("div", { key: star, className: "flex items-center gap-3" },
                React.createElement("div", { className: "flex items-center gap-1 flex-none" },
                    React.createElement("p", { className: "text-[16px] text-black leading-[1.5]", style: { fontFamily: NM, fontWeight: 400, width: "9px" } }, star),
                    React.createElement("svg", { width: "15", height: "14", viewBox: "0 0 15 14", fill: "none", "aria-hidden": true },
                        React.createElement("path", { d: "M7.5 1.08l1.72 3.49 3.85.56-2.79 2.71.66 3.84L7.5 9.74 3.56 11.68l.66-3.84L1.43 5.13l3.85-.56L7.5 1.08z", fill: "#FF8904" }))),
                React.createElement("div", { className: "flex-1 rounded-full overflow-hidden", style: { backgroundColor: "#B7C5C0", height: "10px" } },
                    React.createElement("div", { className: "h-full rounded-full", style: {
                            width: pct + "%",
                            backgroundColor: "#184335",
                            transition: "width 0.4s ease"
                        } })),
                React.createElement("p", { className: "text-[16px] text-black leading-[1.5] text-right", style: { fontFamily: NM, fontWeight: 400, width: "28px" } }, count)));
        }))));
}
// ─────────────────────────────────────────────────────────────────
// Avatar  (Figma: 48px circle, bg-#F5F5F5, initials 14px #0A0A0A)
// ─────────────────────────────────────────────────────────────────
function Avatar(_a) {
    var name = _a.name;
    var initials = name
        .split(" ")
        .map(function (w) { var _a; return (_a = w[0]) !== null && _a !== void 0 ? _a : ""; })
        .join("")
        .slice(0, 2)
        .toUpperCase();
    return (React.createElement("div", { className: "flex items-center justify-center rounded-full shrink-0", style: {
            width: "48px",
            height: "48px",
            backgroundColor: "#F5F5F5"
        } },
        React.createElement("span", { className: "text-[14px] text-[#0A0A0A] text-center leading-[1.5]", style: { fontFamily: NM, fontWeight: 400 } }, initials)));
}
// ─────────────────────────────────────────────────────────────────
// UserReview card  (Figma: w-628, flex-col gap-24, divider at top)
// ─────────────────────────────────────────────────────────────────
function UserReviewCard(_a) {
    var review = _a.review;
    return (React.createElement("div", { className: "flex flex-col w-full", style: { gap: "24px" } },
        React.createElement("div", { className: "w-full", style: { height: "1px", backgroundColor: "#E5E5E5" } }),
        React.createElement("div", { className: "flex items-start", style: { gap: "16px" } },
            React.createElement(Avatar, { name: review.name }),
            React.createElement("div", { className: "flex flex-col flex-1 min-w-0", style: { gap: "12px" } },
                React.createElement("div", { className: "flex items-start justify-between w-full" },
                    React.createElement("div", { className: "flex flex-col", style: { gap: "0px", width: "144px" } },
                        React.createElement("p", { className: "text-[14px] text-black leading-[1.5]", style: { fontFamily: NM, fontWeight: 400 } }, review.name),
                        React.createElement("div", { className: "flex items-center", style: { gap: "8px" } },
                            React.createElement(StarRow, { rating: review.rating, gap: 8 }),
                            React.createElement("p", { className: "text-[16px] text-[#525252] leading-[1.5] whitespace-nowrap", style: { fontFamily: NM, fontWeight: 400 } }, review.rating.toFixed(1)))),
                    React.createElement("p", { className: "text-[16px] text-[#525252] leading-[1.5] whitespace-nowrap", style: {
                            fontFamily: NM,
                            fontWeight: 400,
                            width: "100px",
                            textAlign: "right"
                        } }, review.date)),
                React.createElement("p", { className: "text-[16px] text-black leading-[1.5] w-full", style: { fontFamily: NM, fontWeight: 400 } }, review.comment)))));
}
// ─────────────────────────────────────────────────────────────────
// Main ProductReviews
// ─────────────────────────────────────────────────────────────────
function ProductReviews(_a) {
    var _b = _a.heading, heading = _b === void 0 ? "Reviews" : _b, average = _a.average, total = _a.total, breakdown = _a.breakdown, items = _a.items, _c = _a.collapseHeight, collapseHeight = _c === void 0 ? 440 : _c;
    return (React.createElement("div", { className: "flex flex-col w-full", style: { gap: "31px" } },
        React.createElement("div", { className: "flex justify-end w-full" },
            React.createElement("p", { className: "text-[32px] font-medium text-black leading-[1.5]", style: { fontFamily: NM, width: "630px", maxWidth: "100%" } }, heading)),
        React.createElement("div", { className: "flex flex-col lg:flex-row items-start w-full", style: { gap: "24px" } },
            React.createElement("div", { className: "flex justify-end flex-1 min-w-0" },
                React.createElement(RatingsBox, { average: average, total: total, breakdown: breakdown })),
            React.createElement("div", { className: "flex-1 min-w-0 lg:w-[628px] lg:flex-none", style: { maxWidth: "628px" } },
                React.createElement(SeeMore_1["default"], { maxHeight: collapseHeight, fadeHeight: 158, label: "See More", collapseLabel: "See Less", buttonAlign: "center" },
                    React.createElement("div", { className: "flex flex-col w-full" }, items.map(function (review) { return (React.createElement(UserReviewCard, { key: review.id, review: review })); })))))));
}
exports["default"] = ProductReviews;
