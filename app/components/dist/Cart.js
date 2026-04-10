"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var react_1 = require("react");
function CartDrawer(_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose;
    var items = [
        {
            id: 1,
            name: "Classic White Shalwar Kameez",
            variant: "Red / S",
            price: 4500,
            qty: 2,
            image: "/p1.jpg"
        },
        {
            id: 2,
            name: "Brown Banarsi Saree",
            variant: "Brown / XL",
            price: 6500,
            qty: 1,
            image: "/p2.jpg"
        },
        {
            id: 3,
            name: "Shalwar White New",
            variant: "Purple / L",
            price: 1500,
            qty: 1,
            image: "/p3.jpg"
        },
    ];
    var subtotal = items.reduce(function (acc, i) { return acc + i.price * i.qty; }, 0);
    return (React.createElement("div", { className: "fixed inset-0 z-50 " + (isOpen ? "" : "pointer-events-none") },
        React.createElement("div", { onClick: onClose, className: "absolute inset-0 bg-black/40 transition-opacity " + (isOpen ? "opacity-100" : "opacity-0") }),
        React.createElement("div", { className: "absolute right-0 top-0 h-full w-full sm:w-[400px] bg-white shadow-xl transform transition-transform " + (isOpen ? "translate-x-0" : "translate-x-full") + " flex flex-col" },
            React.createElement("div", { className: "flex items-center justify-between px-5 py-4 border-b" },
                React.createElement("h2", { className: "text-[16px] font-medium" },
                    "Your Cart ",
                    React.createElement("span", { className: "text-gray-500" }, "(2 items)")),
                React.createElement("button", { onClick: onClose, className: "text-xl" }, "\u00D7")),
            React.createElement("div", { className: "flex-1 overflow-y-auto px-5 py-4 space-y-5" }, items.map(function (item) { return (React.createElement(CartItem, { key: item.id, item: item })); })),
            React.createElement("div", { className: "border-t px-5 py-4 space-y-4" },
                React.createElement("div", { className: "flex justify-between text-sm" },
                    React.createElement("span", { className: "text-gray-500" }, "SUBTOTAL"),
                    React.createElement("span", { className: "font-medium" },
                        "Rs ",
                        subtotal.toLocaleString())),
                React.createElement("button", { className: "w-full bg-[#1f5c4c] text-white py-3 rounded-full text-sm" }, "Proceed to Checkout \u2192"),
                React.createElement("p", { className: "text-[11px] text-gray-400 text-center" }, "Tax included & Shipping costs will be calculated on the checkout")))));
}
exports["default"] = CartDrawer;
function CartItem(_a) {
    var item = _a.item;
    var _b = react_1.useState(item.qty), qty = _b[0], setQty = _b[1];
    return (React.createElement("div", { className: "flex gap-3" },
        React.createElement("div", { className: "w-16 h-16 rounded-md overflow-hidden bg-gray-100" },
            React.createElement(image_1["default"], { src: item.image, alt: item.name, width: 64, height: 64, className: "object-cover w-full h-full" })),
        React.createElement("div", { className: "flex-1" },
            React.createElement("div", { className: "flex justify-between" },
                React.createElement("div", null,
                    React.createElement("h3", { className: "text-[13px] font-medium leading-tight" }, item.name),
                    React.createElement("p", { className: "text-[12px] text-gray-500" }, item.variant)),
                React.createElement("button", { className: "text-gray-500" }, "\uD83D\uDDD1")),
            React.createElement("div", { className: "flex justify-between items-center mt-2" },
                React.createElement("div", { className: "flex items-center gap-2 px-2 py-1 text-sm" },
                    React.createElement("button", { className: "border rounded-full w-6 h-6 flex items-center justify-center", onClick: function () { return setQty(Math.max(1, qty - 1)); } }, "-"),
                    React.createElement("span", null, qty),
                    React.createElement("button", { className: "border rounded-full w-6 h-6 flex items-center justify-center", onClick: function () { return setQty(qty + 1); } }, "+")),
                React.createElement("span", { className: "text-[13px] text-neutral-500" },
                    "Rs ",
                    item.price.toLocaleString())))));
}
