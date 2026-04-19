"use client";
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var CartItem_1 = require("./CartItem");
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
            React.createElement("div", { className: "flex-1 overflow-y-auto px-5 py-4 space-y-5" }, items.map(function (item) { return (React.createElement(CartItem_1["default"], { key: item.id, id: item.id.toString(), name: item.name, variant: item.variant, price: item.price, image: item.image, quantity: item.qty, onIncrease: function () { }, onDecrease: function () { }, onRemove: function () { } })); })),
            React.createElement("div", { className: "border-t px-5 py-4 space-y-4" },
                React.createElement("div", { className: "flex justify-between text-sm" },
                    React.createElement("span", { className: "text-gray-500" }, "SUBTOTAL"),
                    React.createElement("span", { className: "font-medium" },
                        "Rs ",
                        subtotal.toLocaleString())),
                React.createElement(link_1["default"], { href: "/checkout" },
                    React.createElement("button", { className: "w-full bg-[#1f5c4c] text-white py-3 rounded-full text-sm" }, "Proceed to Checkout \u2192")),
                React.createElement("p", { className: "text-[11px] text-gray-400 text-center" }, "Tax included & Shipping costs will be calculated on the checkout")))));
}
exports["default"] = CartDrawer;
