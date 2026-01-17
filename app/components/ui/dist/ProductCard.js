"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var lu_1 = require("react-icons/lu");
var ProductCard = function (_a) {
    var product = _a.product;
    return (react_1["default"].createElement("div", { className: "flex flex-col group h-full" },
        react_1["default"].createElement("div", { className: "relative aspect-[4/5] rounded-lg overflow-hidden mb-4" },
            react_1["default"].createElement(image_1["default"], { src: product.image, alt: product.title, fill: true, className: "object-cover transition-transform duration-500 group-hover:scale-105" }),
            react_1["default"].createElement("div", { className: "absolute top-3 right-3 bg-[#FDFD96] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-black shadow-sm" }, "New Arrival")),
        react_1["default"].createElement("div", { className: "flex flex-col flex-grow px-1" },
            react_1["default"].createElement("div", { className: "flex justify-between items-start mb-1" },
                react_1["default"].createElement("h3", { className: "font-bold text-gray-900 text-lg leading-tight truncate" }, product.title),
                react_1["default"].createElement("div", { className: "flex items-center gap-1 text-sm shrink-0" },
                    react_1["default"].createElement(lu_1.LuStar, { className: "w-4 h-4 fill-orange-400 text-orange-400" }),
                    react_1["default"].createElement("span", { className: "font-medium text-gray-600" },
                        product.rating,
                        " (",
                        product.reviews,
                        ")"))),
            react_1["default"].createElement("p", { className: "text-gray-500 text-sm mb-1" }, product.description),
            react_1["default"].createElement("div", { className: "flex items-baseline gap-2 mb-4" },
                react_1["default"].createElement("span", { className: "text-[#1A4D2E] font-bold text-lg" },
                    "PKR ",
                    product.price.toLocaleString()),
                product.originalPrice && (react_1["default"].createElement("span", { className: "text-gray-400 line-through text-sm" },
                    "PKR ",
                    product.originalPrice.toLocaleString()))),
            react_1["default"].createElement("div", { className: "flex gap-2 mt-auto" },
                react_1["default"].createElement("button", { className: "flex-1 bg-[#234E41] text-white py-2.5 rounded-full flex items-center justify-center gap-2 text-sm font-semibold transition-colors hover:bg-[#1a3a31]" }, product.isStitchable ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement(lu_1.LuScissors, { className: "w-4 h-4" }),
                    " Stitch")) : (react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement(lu_1.LuShoppingCart, { className: "w-4 h-4" }),
                    " Add to cart"))),
                react_1["default"].createElement("button", { className: "flex-1 border border-gray-300 py-2.5 rounded-full flex items-center justify-center gap-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50" },
                    react_1["default"].createElement(lu_1.LuEye, { className: "w-4 h-4" }),
                    " View")))));
};
exports["default"] = ProductCard;
