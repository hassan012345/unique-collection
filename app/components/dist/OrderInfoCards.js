"use client";
"use strict";
exports.__esModule = true;
/**
 * components/order-confirmation/OrderInfoCards.tsx
 *
 * Figma specs (each card):
 *   bg:             #F5F5F5
 *   border:         1px solid #B7C5C0
 *   border-radius:  24px
 *   padding:        24px
 *   gap (rows):     8px
 *
 *   Card header row:
 *     icon:   33×33px
 *     label:  Neue Montreal Medium 20px #245749
 *
 *   Name:    Neue Montreal Medium 18px black
 *   Details: Neue Montreal Regular 18px black
 *   TXN ID:  Neue Montreal Regular 18px #184335
 *
 * Desktop: side-by-side (flex-row, gap-24)
 * Mobile:  stacked (flex-col)
 */
var NM = "var(--font-neue-montreal)";
/* ── Truck SVG (Figma: 33×33) ─────────────────────────────────── */
function TruckIcon() {
    return (React.createElement("svg", { width: "33", height: "33", viewBox: "0 0 33 33", fill: "none", "aria-hidden": true },
        React.createElement("path", { d: "M1.5 8h18v15H1.5V8z", stroke: "#245749", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M19.5 12.5h5l4 5v5.5h-9V12.5z", stroke: "#245749", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("circle", { cx: "7", cy: "24.5", r: "2", stroke: "#245749", strokeWidth: "1.6" }),
        React.createElement("circle", { cx: "24", cy: "24.5", r: "2", stroke: "#245749", strokeWidth: "1.6" })));
}
/* ── Credit card SVG (Figma: 33×33) ─────────────────────────────── */
function CreditCardIcon() {
    return (React.createElement("svg", { width: "33", height: "33", viewBox: "0 0 33 33", fill: "none", "aria-hidden": true },
        React.createElement("rect", { x: "2", y: "6.5", width: "29", height: "20", rx: "3", stroke: "#245749", strokeWidth: "1.6" }),
        React.createElement("path", { d: "M2 12.5h29", stroke: "#245749", strokeWidth: "1.6" }),
        React.createElement("rect", { x: "5.5", y: "17.5", width: "8", height: "4", rx: "1", fill: "#245749" })));
}
/* ── Individual info card ─────────────────────────────────────────── */
function InfoCard(_a) {
    var icon = _a.icon, label = _a.label, children = _a.children;
    return (React.createElement("div", { className: "flex flex-col flex-1", style: {
            backgroundColor: "#F5F5F5",
            border: "1px solid #B7C5C0",
            borderRadius: "24px",
            padding: "24px",
            gap: "8px"
        } },
        React.createElement("div", { className: "flex items-center gap-4 w-full" },
            React.createElement("span", { className: "shrink-0" }, icon),
            React.createElement("p", { className: "text-[20px] font-medium text-[#245749] leading-[1.5] whitespace-nowrap", style: { fontFamily: NM } }, label)),
        children));
}
function OrderInfoCards(_a) {
    var shipping = _a.shipping, payment = _a.payment;
    return (React.createElement("div", { className: "flex flex-col sm:flex-row gap-6 w-full" },
        React.createElement(InfoCard, { icon: React.createElement(TruckIcon, null), label: "Shipping Address" },
            React.createElement("p", { className: "body-text", style: { fontFamily: NM } }, shipping.name),
            React.createElement("p", { className: "text-[18px] text-black leading-[1.5]", style: { fontFamily: NM, fontWeight: 400 } }, shipping.address),
            React.createElement("p", { className: "text-[18px] text-black leading-[1.5]", style: { fontFamily: NM, fontWeight: 400 } }, shipping.phone)),
        React.createElement(InfoCard, { icon: React.createElement(CreditCardIcon, null), label: "Payment Method" },
            React.createElement("p", { className: "text-[18px] font-medium text-black leading-[1.5]", style: { fontFamily: NM } }, payment.cardLabel),
            React.createElement("p", { className: "text-[18px] text-black leading-[1.5]", style: { fontFamily: NM, fontWeight: 400 } }, payment.billedTo),
            React.createElement("p", { className: "text-[18px] text-[#184335] leading-[1.5]", style: { fontFamily: NM, fontWeight: 400 } },
                "TRANSACTION ID: ",
                payment.transactionId))));
}
exports["default"] = OrderInfoCards;
