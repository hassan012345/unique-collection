"use client";
"use strict";
exports.__esModule = true;
/**
 * components/OrderConfirmationPage.tsx
 *
 * Pixel-perfect from Figma node 2130:10295
 *
 * Outer wrapper:  px-10 py-32, flex items-center justify-center
 * Inner max-w:    1039px, flex-col, gap-32, items-center
 *
 * Sections (top → bottom):
 *   1. OrderConfirmationHero   — check icon + heading + subtitle
 *   2. OrderMetaCards          — ORDER NUMBER / DATE / TOTAL
 *   3. OrderItemsList          — "Order Items" + cart items card
 *   4. OrderInfoCards          — Shipping Address + Payment Method
 *   5. Continue Shopping btn   — full-width green pill
 *
 * Accepts either static props (from server component) or dynamic
 * data from the cart store after a successful payment.
 */
var link_1 = require("next/link");
var OrderConfirmationHero_1 = require("@/components/OrderConfirmationHero");
var OrderMetaCards_1 = require("@/components/OrderMetaCards");
var OrderItemsList_1 = require("@/components/OrderItemsList");
var OrderInfoCards_1 = require("@/components/OrderInfoCards");
var NM = "var(--font-neue-montreal)";
// ── Arrow icon for button ────────────────────────────────────────
function ArrowRight() {
    return (React.createElement("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", "aria-hidden": true },
        React.createElement("path", { d: "M3.75 9h10.5M10 4.5l4.5 4.5-4.5 4.5", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })));
}
// ── Page component ───────────────────────────────────────────────
function OrderConfirmationPage(_a) {
    var heading = _a.heading, subtitle = _a.subtitle, meta = _a.meta, items = _a.items, shipping = _a.shipping, payment = _a.payment;
    return (React.createElement("div", { className: "w-full flex items-center justify-center", style: { padding: "32px 10px" } },
        React.createElement("div", { className: "flex flex-col items-center w-full", style: { maxWidth: "1039px", gap: "32px" } },
            React.createElement(OrderConfirmationHero_1["default"], { heading: heading, subtitle: subtitle }),
            React.createElement(OrderMetaCards_1["default"], { orderNumber: meta.orderNumber, orderDate: meta.orderDate, orderTotal: meta.orderTotal }),
            React.createElement(OrderItemsList_1["default"], { items: items }),
            React.createElement(OrderInfoCards_1["default"], { shipping: shipping, payment: payment }),
            React.createElement(link_1["default"], { href: "/", className: "w-full flex items-center justify-center gap-2 transition-colors", style: {
                    height: "56px",
                    backgroundColor: "#245749",
                    borderRadius: "999px"
                }, onMouseEnter: function (e) { e.currentTarget.style.backgroundColor = "#184335"; }, onMouseLeave: function (e) { e.currentTarget.style.backgroundColor = "#245749"; } },
                React.createElement("span", { className: "text-[16px] font-medium text-white leading-[1.5] whitespace-nowrap", style: { fontFamily: NM } }, "Continue Shopping")))));
}
exports["default"] = OrderConfirmationPage;
