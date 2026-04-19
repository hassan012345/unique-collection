"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
function CartItem(_a) {
    var id = _a.id, name = _a.name, variant = _a.variant, price = _a.price, image = _a.image, quantity = _a.quantity, onIncrease = _a.onIncrease, onDecrease = _a.onDecrease, onRemove = _a.onRemove;
    return (React.createElement("div", { className: "flex items-center justify-between gap-3 py-3 border-b border-gray-200 min-w-0" },
        React.createElement("div", { className: "flex items-center gap-3 min-w-0 flex-1" },
            React.createElement("div", { className: "w-[56px] h-[56px] relative rounded-md overflow-hidden bg-gray-100 flex-shrink-0" },
                React.createElement(image_1["default"], { src: image, alt: name, fill: true, className: "object-cover" })),
            React.createElement("div", { className: "flex flex-col min-w-0 flex-1" },
                React.createElement("p", { className: "text-[14px] font-medium text-gray-900 truncate" }, name),
                React.createElement("p", { className: "text-[12px] text-gray-500 mt-0.5" }, variant),
                React.createElement("div", { className: "flex items-center gap-2 mt-2" },
                    React.createElement("button", { onClick: function () { return onDecrease(id); }, className: "w-6 h-6 flex items-center justify-center border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100" }, "-"),
                    React.createElement("span", { className: "text-[13px] text-gray-800 min-w-[16px] text-center" }, quantity),
                    React.createElement("button", { onClick: function () { return onIncrease(id); }, className: "w-6 h-6 flex items-center justify-center border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100" }, "+")))),
        React.createElement("div", { className: "flex flex-col items-end justify-between gap-4 flex-shrink-0 h-full" },
            React.createElement("button", { onClick: function () { return onRemove(id); }, className: "text-gray-500 hover:text-red-500" },
                React.createElement(image_1["default"], { src: "/Trash.png", alt: "Remove", width: 16, height: 16, className: "object-contain" })),
            React.createElement("p", { className: "text-[14px] font-medium text-gray-700 whitespace-nowrap" },
                "Rs ",
                price.toLocaleString()))));
}
exports["default"] = CartItem;
