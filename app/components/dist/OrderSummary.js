"use client";
"use strict";
exports.__esModule = true;
var CartItem_1 = require("./CartItem");
var NM = "var(--font-neue-montreal)";
function formatPKR(n) {
    return "Rs " + n.toLocaleString("en-PK", { minimumFractionDigits: 2 });
}
/* ── Trash icon ─────────────────────────────────────────────────── */
function TrashIcon() {
    return (React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none" },
        React.createElement("path", { d: "M2 4h12M5.5 4V3a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v1M6.5 7v5M9.5 7v5M3 4l.75 9a1 1 0 001 .9h6.5a1 1 0 001-.9L13 4", stroke: "#184335", strokeWidth: "1.3", strokeLinecap: "round", strokeLinejoin: "round" })));
}
/* ── Arrow right ────────────────────────────────────────────────── */
function ArrowRight() {
    return (React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none" },
        React.createElement("path", { d: "M3 8h10M9 4l4 4-4 4", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })));
}
/* ── Single cart item ───────────────────────────────────────────── */
function CartItemRow(_a) {
    var item = _a.item, onQtyChange = _a.onQtyChange, onRemove = _a.onRemove;
    return (React.createElement("div", { className: "flex items-start gap-3 py-3 border-b border-[#E5E5E5] last:border-0" },
        React.createElement("div", { className: "flex-none rounded-lg overflow-hidden bg-[#EBEBEB]", style: { width: "64px", height: "72px" } },
            React.createElement("img", { src: item.image, alt: item.name, className: "w-full h-full object-cover" })),
        React.createElement("div", { className: "flex-1 min-w-0 flex flex-col gap-1" },
            React.createElement("div", { className: "flex items-start justify-between gap-2" },
                React.createElement("p", { className: "text-[14px] font-medium text-[#171717] leading-snug", style: { fontFamily: NM } }, item.name),
                React.createElement("button", { type: "button", onClick: onRemove, className: "flex-none hover:opacity-70 transition-opacity mt-0.5", "aria-label": "Remove item" },
                    React.createElement(TrashIcon, null))),
            React.createElement("p", { className: "text-[13px] text-[#737373]", style: { fontFamily: NM, fontWeight: 400 } }, item.variant),
            React.createElement("div", { className: "flex items-center justify-between mt-1" },
                React.createElement("div", { className: "flex items-center gap-2" },
                    React.createElement("button", { type: "button", onClick: function () { return onQtyChange(Math.max(1, item.qty - 1)); }, className: "w-6 h-6 flex items-center justify-center text-[#525252] hover:text-[#171717]\n                text-base leading-none select-none transition-colors" }, "\u2212"),
                    React.createElement("span", { className: "text-[14px] text-[#171717] min-w-[16px] text-center", style: { fontFamily: NM, fontWeight: 400 } }, item.qty),
                    React.createElement("button", { type: "button", onClick: function () { return onQtyChange(item.qty + 1); }, className: "w-6 h-6 flex items-center justify-center text-[#525252] hover:text-[#171717]\n                text-base leading-none select-none transition-colors" }, "+")),
                React.createElement("p", { className: "text-[14px] text-[#171717]", style: { fontFamily: NM, fontWeight: 400 } }, formatPKR(item.price * item.qty))))));
}
/* ── Main component ─────────────────────────────────────────────── */
function OrderSummary(_a) {
    var items = _a.items, shippingCost = _a.shippingCost, onItemQtyChange = _a.onItemQtyChange, onItemRemove = _a.onItemRemove, onPayNow = _a.onPayNow;
    var subtotal = items.reduce(function (s, i) { return s + i.price * i.qty; }, 0);
    var total = subtotal + shippingCost;
    var itemCount = items.reduce(function (s, i) { return s + i.qty; }, 0);
    return (React.createElement("div", { className: "flex flex-col gap-4 rounded-xl p-6", style: { backgroundColor: "#F5F5F5" } },
        React.createElement("h2", { className: "text-[16px] font-semibold text-[#171717]", style: { fontFamily: NM } }, "Items in Cart"),
        React.createElement(CartItem_1["default"], { id: "1", name: "Classic White Shalwar Kameez", variant: "Red / S", price: 4500, image: "/images/product1.jpg", quantity: 2, onIncrease: function (id) { return console.log("increase", id); }, onDecrease: function (id) { return console.log("decrease", id); }, onRemove: function (id) { return console.log("remove", id); } }),
        React.createElement("div", { className: "flex flex-col" }, items.map(function (item) { return (React.createElement(CartItemRow, { key: item.id, item: item, onQtyChange: function (qty) { return onItemQtyChange(item.id, qty); }, onRemove: function () { return onItemRemove(item.id); } })); })),
        React.createElement("div", { className: "flex items-center justify-between pt-1" },
            React.createElement("p", { className: "text-[14px] text-[#525252]", style: { fontFamily: NM, fontWeight: 400 } },
                "Subtotal (",
                itemCount,
                " ",
                itemCount === 1 ? "item" : "items",
                ")"),
            React.createElement("p", { className: "text-[14px] text-[#171717]", style: { fontFamily: NM, fontWeight: 400 } }, formatPKR(subtotal))),
        React.createElement("div", { className: "flex items-center justify-between" },
            React.createElement("p", { className: "text-[14px] text-[#525252]", style: { fontFamily: NM, fontWeight: 400 } }, "Shipping"),
            React.createElement("p", { className: "text-[14px] text-[#171717]", style: { fontFamily: NM, fontWeight: 400 } }, formatPKR(shippingCost))),
        React.createElement("div", { className: "h-px bg-[#E5E5E5]" }),
        React.createElement("div", { className: "flex items-center justify-between" },
            React.createElement("p", { className: "text-[16px] font-semibold text-[#171717]", style: { fontFamily: NM } }, "Total"),
            React.createElement("p", { className: "text-[16px] font-semibold text-[#171717]", style: { fontFamily: NM } }, formatPKR(total))),
        React.createElement("button", { type: "button", onClick: onPayNow, className: "w-full h-12 flex items-center justify-center gap-2 rounded-full\n          text-white text-[15px] font-medium transition-colors", style: {
                fontFamily: NM,
                backgroundColor: "#184335"
            }, onMouseEnter: function (e) {
                e.currentTarget.style.backgroundColor =
                    "#0A1C16";
            }, onMouseLeave: function (e) {
                e.currentTarget.style.backgroundColor =
                    "#184335";
            } },
            "Pay Now",
            React.createElement(ArrowRight, null))));
}
exports["default"] = OrderSummary;
