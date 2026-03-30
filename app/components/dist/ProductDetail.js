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
var react_1 = require("react");
var image_1 = require("next/image");
var link_1 = require("next/link");
var BreadCrumb_1 = require("./BreadCrumb");
function ProductDetail(_a) {
    var _b, _c, _d;
    var product = _a.product, _e = _a.relatedProducts, relatedProducts = _e === void 0 ? [] : _e;
    var _f = react_1.useState(((_c = (_b = product.colors) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.name) || ""), selectedColor = _f[0], setSelectedColor = _f[1];
    var _g = react_1.useState(((_d = product.sizes) === null || _d === void 0 ? void 0 : _d[0]) || ""), selectedSize = _g[0], setSelectedSize = _g[1];
    var _h = react_1.useState(1), quantity = _h[0], setQuantity = _h[1];
    var _j = react_1.useState(0), activeImageIndex = _j[0], setActiveImageIndex = _j[1];
    var _k = react_1.useState(false), isFavorite = _k[0], setIsFavorite = _k[1];
    var images = product.images || [
        "/men1.png",
        "/men2.png",
        "/men3.png",
        "/men4.png",
    ];
    var displayPrice = product.price;
    var hasDiscount = !!product.originalPrice;
    var getSizeLabel = function (size) {
        var sizeMap = {
            xs: "Extra Small",
            s: "Small",
            m: "Medium",
            l: "Large",
            xl: "Extra Large",
            xxl: "2X Large"
        };
        return sizeMap[size.toLowerCase()] || size;
    };
    var breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Men's Collection", href: "/men" },
        { label: product.name },
    ];
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "bg-neutral-50 border-b border-neutral-200" },
            React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4" },
                React.createElement(BreadCrumb_1["default"], { items: breadcrumbItems }))),
        React.createElement("section", { className: "py-8 md:py-12" },
            React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
                React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12" },
                    React.createElement("div", { className: "flex flex-col gap-4" },
                        React.createElement("div", { className: "relative bg-neutral-100 rounded-lg overflow-hidden aspect-square md:aspect-[4/5]" },
                            React.createElement(image_1["default"], { src: images[activeImageIndex], alt: product.name, fill: true, className: "object-cover", priority: true }),
                            hasDiscount && (React.createElement("div", { className: "absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold" }, "Sale")),
                            React.createElement("button", { onClick: function () { return setIsFavorite(!isFavorite); }, className: "absolute top-4 right-4 bg-white rounded-full p-2.5 hover:bg-neutral-100 transition-colors shadow-md" },
                                React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: isFavorite ? "currentColor" : "none", stroke: "currentColor", strokeWidth: "2", className: isFavorite ? "text-red-500" : "text-neutral-600" },
                                    React.createElement("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" })))),
                        React.createElement("div", { className: "grid grid-cols-4 gap-3" }, images.map(function (img, idx) { return (React.createElement("button", { key: idx, onClick: function () { return setActiveImageIndex(idx); }, className: "relative aspect-square rounded-lg overflow-hidden border-2 transition-colors " + (activeImageIndex === idx
                                ? "border-green-500"
                                : "border-neutral-200 hover:border-neutral-300") },
                            React.createElement(image_1["default"], { src: img, alt: product.name + " - View " + (idx + 1), fill: true, className: "object-cover" }))); }))),
                    React.createElement("div", { className: "flex flex-col gap-6" },
                        React.createElement("div", null,
                            React.createElement("h1", { className: "text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-900 mb-3" }, product.name),
                            React.createElement("div", { className: "flex items-baseline gap-3" },
                                React.createElement("span", { className: "text-2xl md:text-3xl font-bold text-green-500" }, displayPrice),
                                hasDiscount && (React.createElement("span", { className: "text-lg text-neutral-500 line-through" }, product.originalPrice))),
                            React.createElement("p", { className: "font-medium text-lg leading-[1.5] tracking-normal" }, product.inStock ? "IN STOCK" : "OUT OF STOCK"),
                            React.createElement("div", { className: "flex items-center gap-3" },
                                React.createElement("div", { className: "flex items-center gap-1" }, __spreadArrays(Array(5)).map(function (_, i) { return (React.createElement("svg", { key: i, width: "16", height: "16", viewBox: "0 0 24 24", fill: i < Math.floor(product.rating || 5)
                                        ? "currentColor"
                                        : "none", stroke: "currentColor", strokeWidth: "1.5", className: i < Math.floor(product.rating || 5)
                                        ? "text-orange-400"
                                        : "text-neutral-300" },
                                    React.createElement("polygon", { points: "12 2 15.09 10.26 24 10.26 17.55 16.74 20.64 25 12 19.52 3.36 25 6.45 16.74 0 10.26 8.91 10.26" }))); })),
                                React.createElement("span", { className: "text-sm text-neutral-600" },
                                    "5 (",
                                    product.reviews || 128,
                                    " reviews)"))),
                        React.createElement("hr", { className: "border-t border-neutral-200" }),
                        product.colors && product.colors.length > 0 && (React.createElement("div", null,
                            React.createElement("label", { className: "block text-sm font-semibold text-neutral-900 mb-3" },
                                "Color:",
                                " ",
                                React.createElement("span", { className: "text-green-500" }, selectedColor)),
                            React.createElement("div", { className: "flex gap-3 flex-wrap" }, product.colors.map(function (color) { return (React.createElement("button", { key: color.name, onClick: function () { return setSelectedColor(color.name); }, className: "relative p-0.5 rounded-full border-2 transition-colors " + (selectedColor === color.name
                                    ? "border-green-500"
                                    : "border-neutral-300 hover:border-neutral-400"), title: color.name },
                                React.createElement("div", { className: "w-10 h-10 rounded-full", style: { backgroundColor: color.code } }))); })))),
                        product.sizes && product.sizes.length > 0 && (React.createElement("div", null,
                            React.createElement("label", { className: "block text-sm font-semibold text-neutral-900 mb-3" },
                                "Size:",
                                " ",
                                React.createElement("span", { className: "text-green-500" },
                                    " ",
                                    getSizeLabel(selectedSize))),
                            React.createElement("div", { className: "flex gap-3 flex-wrap" }, product.sizes.map(function (size) { return (React.createElement("button", { key: size, onClick: function () { return setSelectedSize(size); }, className: "relative p-0.5 rounded-full border-2 transition-colors w-10 h-10 flex items-center justify-center font-medium " + (selectedSize === size
                                    ? "border-green-500 bg-green-500 text-white"
                                    : "border-neutral-300 text-neutral-900 hover:border-neutral-400 hover:bg-neutral-50") }, size)); })))),
                        React.createElement("div", { className: "flex gap-3" },
                            React.createElement("div", { className: "flex items-center" },
                                React.createElement("button", { onClick: function () { return quantity > 1 && setQuantity(quantity - 1); }, className: "relative p-0.5 rounded-full border-2 border-neutral-300 text-neutral-900 hover:border-neutral-400 hover:bg-neutral-50 transition-colors w-10 h-10 flex items-center justify-center font-medium" }, "\u2212"),
                                React.createElement("input", { type: "number", value: quantity, onChange: function (e) {
                                        var val = parseInt(e.target.value) || 1;
                                        setQuantity(Math.max(1, val));
                                    }, className: "w-16 text-center border-0 outline-none font-semibold [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&]:appearance-textfield", min: "1" }),
                                React.createElement("button", { onClick: function () { return setQuantity(quantity + 1); }, className: "relative p-0.5 rounded-full border-2 border-neutral-300 text-neutral-900 hover:border-neutral-400 hover:bg-neutral-50 transition-colors w-10 h-10 flex items-center justify-center font-medium" }, "+")),
                            React.createElement("button", { className: "flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition-colors" }, "Add to Cart")),
                        React.createElement("button", { className: "bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition-colors" }, "Buy Now"),
                        React.createElement("div", { className: "pt-4 border-t border-neutral-200" },
                            React.createElement("div", { className: "space-y-3 text-sm" },
                                React.createElement("div", { className: "flex items-center gap-2" },
                                    React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "text-green-500 flex-shrink-0" },
                                        React.createElement("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
                                        React.createElement("polyline", { points: "22 4 12 14.01 9 11.01" })),
                                    React.createElement("span", { className: "text-neutral-600" }, "Free shipping on orders over PKR 5,000")),
                                React.createElement("div", { className: "flex items-center gap-2" },
                                    React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "text-green-500 flex-shrink-0" },
                                        React.createElement("path", { d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }),
                                        React.createElement("polyline", { points: "9 22 9 12 15 12 15 22" })),
                                    React.createElement("span", { className: "text-neutral-600" }, "30-day return policy")),
                                React.createElement("div", { className: "flex items-center gap-2" },
                                    React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "text-green-500 flex-shrink-0" },
                                        React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" })),
                                    React.createElement("span", { className: "text-neutral-600" }, "Easy returns & exchanges")))),
                        React.createElement("div", { className: "pt-4 border-t border-neutral-200" },
                            React.createElement("p", { className: "text-sm font-semibold text-neutral-900 mb-3" }, "Share:"),
                            React.createElement("div", { className: "flex gap-2" }, [
                                { icon: "facebook", label: "Facebook" },
                                { icon: "twitter", label: "Twitter" },
                                { icon: "pinterest", label: "Pinterest" },
                                { icon: "whatsapp", label: "WhatsApp" },
                            ].map(function (social) { return (React.createElement("button", { key: social.icon, className: "w-10 h-10 rounded-lg border-2 border-neutral-300 hover:border-green-500 hover:text-green-500 transition-colors flex items-center justify-center text-neutral-600", title: social.label },
                                React.createElement("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" },
                                    React.createElement("circle", { cx: "12", cy: "12", r: "1" })))); }))))))),
        React.createElement("section", { className: "border-t border-neutral-200 py-12 md:py-16" },
            React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
                React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12" },
                    React.createElement("div", { className: "md:col-span-2" },
                        React.createElement("h2", { className: "text-2xl font-semibold text-neutral-900 mb-4" }, "Product Details"),
                        product.description && (React.createElement("p", { className: "text-neutral-600 leading-relaxed mb-6" }, product.description)),
                        product.details && product.details.length > 0 && (React.createElement("div", { className: "mt-6" },
                            React.createElement("h3", { className: "text-lg font-semibold text-neutral-900 mb-4" }, "Features"),
                            React.createElement("ul", { className: "space-y-3" }, product.details.map(function (detail, idx) { return (React.createElement("li", { key: idx, className: "flex gap-3 text-neutral-600" },
                                React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "text-green-500 flex-shrink-0 mt-0.5" },
                                    React.createElement("polyline", { points: "20 6 9 17 4 12" })),
                                detail)); }))))),
                    React.createElement("div", { className: "bg-neutral-50 rounded-lg p-6" },
                        React.createElement("h3", { className: "text-lg font-semibold text-neutral-900 mb-4" }, "Product Information"),
                        React.createElement("div", { className: "space-y-4" },
                            React.createElement("div", null,
                                React.createElement("p", { className: "text-sm text-neutral-600 mb-1" }, "SKU"),
                                React.createElement("p", { className: "font-semibold text-neutral-900" },
                                    "UC-MEN-",
                                    String(product.id).padStart(4, "0"))),
                            React.createElement("div", null,
                                React.createElement("p", { className: "text-sm text-neutral-600 mb-1" }, "Category"),
                                React.createElement("p", { className: "font-semibold text-neutral-900" }, "Men's Collection")),
                            React.createElement("div", null,
                                React.createElement("p", { className: "text-sm text-neutral-600 mb-1" }, "Availability"),
                                React.createElement("p", { className: "font-semibold text-green-500" }, "In Stock")),
                            React.createElement("div", null,
                                React.createElement("p", { className: "text-sm text-neutral-600 mb-1" }, "Delivery Time"),
                                React.createElement("p", { className: "font-semibold text-neutral-900" }, "3-5 Business Days"))))))),
        relatedProducts && relatedProducts.length > 0 && (React.createElement("section", { className: "border-t border-neutral-200 py-12 md:py-16" },
            React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
                React.createElement("h2", { className: "text-2xl md:text-3xl font-semibold text-neutral-900 mb-8" }, "You May Also Like"),
                React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6" }, relatedProducts.slice(0, 4).map(function (relProduct) { return (React.createElement(link_1["default"], { key: relProduct.id, href: relProduct.href, className: "group" },
                    React.createElement("div", { className: "relative bg-neutral-100 rounded-lg overflow-hidden aspect-[3/4] mb-4" },
                        React.createElement(image_1["default"], { src: relProduct.image, alt: relProduct.name, fill: true, className: "object-cover group-hover:scale-105 transition-transform duration-300" })),
                    React.createElement("h3", { className: "font-semibold text-neutral-900 text-sm group-hover:text-green-500 transition-colors line-clamp-2" }, relProduct.name),
                    React.createElement("p", { className: "text-green-500 font-bold mt-2" }, relProduct.price))); })))))));
}
exports["default"] = ProductDetail;
