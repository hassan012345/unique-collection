"use client";
"use strict";
exports.__esModule = true;
exports.WomensCollection = exports.MensCollection = void 0;
var react_1 = require("react");
var link_1 = require("next/link");
// Product image assets from Figma
var menProducts = [
    {
        id: 1,
        image: "https://www.figma.com/api/mcp/asset/1355a27c-d6a2-44e5-9ec7-e3c80c9ded50",
        name: "Classic White Shalwar Kameez",
        price: "PKR 4,500",
        originalPrice: "PKR 6,000",
        badge: "Sale",
        tag: "New Arrival"
    },
    {
        id: 2,
        image: "https://www.figma.com/api/mcp/asset/a15410c8-f28a-4feb-8458-53222cd7e65a",
        name: "Red Shalwaar kameez suite",
        price: "PKR 3,500",
        originalPrice: null,
        badge: null,
        tag: "New Arrival"
    },
    {
        id: 3,
        image: "https://www.figma.com/api/mcp/asset/187ac882-6b19-4831-a6a5-80f8e1c1da38",
        name: "Blue Banarsi Kameez",
        price: "PKR 2,500",
        originalPrice: "PKR 4,500",
        badge: "Sale",
        tag: null
    },
    {
        id: 4,
        image: "https://www.figma.com/api/mcp/asset/703f25eb-c9ee-444e-900d-fffbf735a246",
        name: "Classic White Shalwar Kameez",
        price: "PKR 10,500",
        originalPrice: null,
        badge: null,
        tag: null
    },
    {
        id: 5,
        image: "https://www.figma.com/api/mcp/asset/f279f0b9-07fc-407f-a8c2-05d9db6a9c4e",
        name: "Classic White Shalwar Kameez",
        price: "PKR 10,500",
        originalPrice: null,
        badge: null,
        tag: null
    },
];
var womenProducts = [
    {
        id: 1,
        image: "https://www.figma.com/api/mcp/asset/bc8bcf07-bf66-4302-a92f-a8d03ca3f038",
        name: "Classic White Shalwar Kameez",
        price: "PKR 4,500",
        originalPrice: "PKR 6,000",
        badge: "Sale",
        tag: "New Arrival"
    },
    {
        id: 2,
        image: "https://www.figma.com/api/mcp/asset/7bc6083d-b654-4be5-af61-ed1a6ca4fd3e",
        name: "Red Shalwaar kameez suite",
        price: "PKR 3,500",
        originalPrice: null,
        badge: null,
        tag: "New Arrival"
    },
    {
        id: 3,
        image: "https://www.figma.com/api/mcp/asset/b7bf97e2-51da-4024-9768-35b35e081ce2",
        name: "Blue Banarsi Kameez",
        price: "PKR 2,500",
        originalPrice: "PKR 4,500",
        badge: "Sale",
        tag: null
    },
    {
        id: 4,
        image: "https://www.figma.com/api/mcp/asset/70b1689e-8cf0-4a34-8dae-295264ea133e",
        name: "Classic White Shalwar Kameez",
        price: "PKR 10,500",
        originalPrice: null,
        badge: null,
        tag: null
    },
    {
        id: 5,
        image: "https://www.figma.com/api/mcp/asset/f279f0b9-07fc-407f-a8c2-05d9db6a9c4e",
        name: "Classic White Shalwar Kameez",
        price: "PKR 10,500",
        originalPrice: null,
        badge: null,
        tag: null
    },
];
var MEN_FILTERS = ["New Arrival", "Sale", "Unstitched", "Shalwar kameez", "Kurtas", "Waist Coats", "3-Piece Suits", "Blazers"];
var WOMEN_FILTERS = ["New Arrival", "Sale", "Unstitched", "Shalwar kameez", "Kurtas"];
function ProductCard(_a) {
    var product = _a.product;
    return (React.createElement("div", { className: "product-card flex-none w-[240px] md:w-[280px] lg:w-[302px]" },
        React.createElement("div", { className: "relative h-[300px] md:h-[350px] lg:h-[397px] rounded-lg overflow-hidden bg-[#F5F5F5]" },
            React.createElement("img", { src: product.image, alt: product.name, className: "product-card-img w-full h-full object-cover" }),
            product.badge && (React.createElement("div", { className: "absolute top-3 right-3" },
                React.createElement("span", { className: "bg-white text-black text-sm px-4 py-1.5 rounded-full", style: { fontFamily: "var(--font-neue-montreal)", fontWeight: 400 } }, product.badge))),
            product.tag && (React.createElement("div", { className: "absolute bottom-3 left-3" },
                React.createElement("span", { className: "bg-[#FFD6A8] text-black text-sm px-3 py-1 rounded-[6px]", style: { fontFamily: "var(--font-neue-montreal)", fontWeight: 400 } }, product.tag)))),
        React.createElement("div", { className: "mt-5 flex flex-col gap-1.5" },
            React.createElement("h4", { className: "text-black text-lg lg:text-[20px] leading-relaxed line-clamp-2", style: { fontFamily: "var(--font-neue-montreal)", fontWeight: 400 } }, product.name),
            React.createElement("div", { className: "flex items-center gap-2" },
                React.createElement("span", { className: "text-[#184335] text-lg lg:text-[20px] font-[500]", style: { fontFamily: "var(--font-neue-montreal)" } }, product.price),
                product.originalPrice && (React.createElement("span", { className: "text-[#737373] text-sm line-through", style: { fontFamily: "var(--font-neue-montreal)", fontWeight: 400 } }, product.originalPrice))))));
}
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
                React.createElement("div", { ref: scrollRef, className: "flex gap-5 lg:gap-6 overflow-x-auto scrollbar-hide px-8 lg:px-10" }, products.map(function (p) { return (React.createElement(ProductCard, { key: p.id, product: p })); })),
                React.createElement("button", { onClick: function () { return scroll("right"); }, className: "absolute right-0 lg:-right-3 top-[calc(50%-70px)] z-10 bg-white border border-[#A1A1A1] rounded-[30px] w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] flex items-center justify-center shadow-sm hover:border-[#184335] transition-colors", "aria-label": "Next" },
                    React.createElement(ChevronRightIcon, null))))));
}
function MensCollection() {
    return (React.createElement(ClothesSelection, { title: "Unique Men's Collection", products: menProducts, filters: MEN_FILTERS, viewAllHref: "/men" }));
}
exports.MensCollection = MensCollection;
function WomensCollection() {
    return (React.createElement(ClothesSelection, { title: "Unique Women's Collection", products: womenProducts, filters: WOMEN_FILTERS, viewAllHref: "/women" }));
}
exports.WomensCollection = WomensCollection;
