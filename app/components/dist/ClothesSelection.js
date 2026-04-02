"use client";
"use strict";
exports.__esModule = true;
exports.WomensCollection = exports.MensCollection = void 0;
var react_1 = require("react");
var link_1 = require("next/link");
var ProductCard_1 = require("./ProductCard");
var products_1 = require("@/config/products");
var MEN_FILTERS = ["New Arrival", "Sale", "Unstitched", "Shalwar kameez", "Kurtas", "Waist Coats", "3-Piece Suits", "Blazers"];
var WOMEN_FILTERS = ["New Arrival", "Sale", "Unstitched", "Shalwar kameez", "Kurtas"];
function ChevronLeftIcon() {
    return (React.createElement("svg", { width: "22", height: "22", viewBox: "0 0 22 22", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M13 5L7 11L13 17", stroke: "#171717", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })));
}
function ChevronRightIcon() {
    return (React.createElement("svg", { width: "22", height: "22", viewBox: "0 0 22 22", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M9 5L15 11L9 17", stroke: "#171717", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })));
}
function ClothesSelection(_a) {
    var title = _a.title, products = _a.products, filters = _a.filters, viewAllHref = _a.viewAllHref;
    var _b = react_1.useState(0), activeFilter = _b[0], setActiveFilter = _b[1];
    var scrollRef = react_1.useRef(null);
    var scroll = function (dir) {
        if (scrollRef.current) {
            var amount = 320;
            scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
        }
    };
    return (React.createElement("section", { className: "w-full px-5 lg:px-20 py-8 lg:py-10" },
        React.createElement("div", { className: "max-w-[1440px] mx-auto flex flex-col gap-8" },
            React.createElement("div", { className: "flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4" },
                React.createElement("div", { className: "flex flex-col gap-4 lg:gap-6" },
                    React.createElement("h2", { className: "text-[#0A0A0A] text-2xl md:text-3xl lg:text-[48px] font-[600] capitalize leading-relaxed", style: { fontFamily: "var(--font-perfectly-nineties)" } }, title),
                    React.createElement("div", { className: "flex flex-wrap gap-3 lg:gap-4" }, filters.map(function (f, i) { return (React.createElement("button", { key: f, onClick: function () { return setActiveFilter(i); }, className: "px-4 lg:px-5 py-2 lg:py-3 rounded-[60px] text-sm font-[500] transition-all " + (i === activeFilter ? "pill-active" : "pill-inactive"), style: { fontFamily: "var(--font-neue-montreal)" } }, f)); }))),
                React.createElement(link_1["default"], { href: viewAllHref, className: "self-start lg:self-auto shrink-0 border border-[#245749] text-[#245749] text-base font-[500] px-6 py-2 rounded-full bg-[#FAFAFA] hover:bg-[#E8ECEB] transition-colors", style: { fontFamily: "var(--font-neue-montreal)" } }, "View All")),
            React.createElement("div", { className: "relative" },
                React.createElement("button", { onClick: function () { return scroll("left"); }, className: "absolute left-0 lg:-left-3 top-[calc(50%-70px)] z-10 bg-white border border-[#A1A1A1] rounded-[30px] w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] flex items-center justify-center shadow-sm hover:border-[#184335] transition-colors", "aria-label": "Previous" },
                    React.createElement(ChevronLeftIcon, null)),
                React.createElement("div", { ref: scrollRef, className: "flex items-start w-full gap-5 lg:gap-6 overflow-x-auto scrollbar-hide px-8 lg:px-10" }, products.map(function (p) { return (React.createElement("div", { key: p.id, className: "flex-shrink-0 min-w-[220px] sm:min-w-[240px] md:min-w-[280px]" },
                    React.createElement(ProductCard_1["default"], { product: p }))); })),
                React.createElement("button", { onClick: function () { return scroll("right"); }, className: "absolute right-0 lg:-right-3 top-[calc(50%-70px)] z-10 bg-white border border-[#A1A1A1] rounded-[30px] w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] flex items-center justify-center shadow-sm hover:border-[#184335] transition-colors", "aria-label": "Next" },
                    React.createElement(ChevronRightIcon, null))))));
}
function MensCollection() {
    return (React.createElement(ClothesSelection, { title: "Unique Men's Collection", products: products_1.MEN_PRODUCTS, filters: MEN_FILTERS, viewAllHref: "/men" }));
}
exports.MensCollection = MensCollection;
function WomensCollection() {
    return (React.createElement(ClothesSelection, { title: "Unique Women's Collection", products: products_1.WOMEN_PRODUCTS, filters: WOMEN_FILTERS, viewAllHref: "/women" }));
}
exports.WomensCollection = WomensCollection;
