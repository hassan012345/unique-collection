"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
var logoUrl = "/Logo.png";
// ── Dropdown data (from Figma screenshots) ────────────────────────
var DROPDOWNS = {
    Sale: {
        columns: [
            {
                heading: "Men's Collection",
                links: ["New Arrival", "Sale", "Unstitched", "Shalwaar Kameez", "Kurtas", "Waist Coats", "3-Piece Suits", "Blazers"]
            },
            {
                heading: "Women's Collection",
                links: ["New Arrival", "Sale", "Unstitched", "Shalwaar Kameez", "Kurtas"]
            },
        ]
    },
    Men: {
        columns: [
            {
                heading: "Men's Collection",
                links: ["New Arrival", "Sale", "Unstitched", "Shalwaar Kameez", "Kurtas", "Waist Coats", "3-Piece Suits", "Blazers"]
            },
        ]
    },
    Women: {
        columns: [
            {
                heading: "Women's Collection",
                links: ["New Arrival", "Sale", "Unstitched", "Shalwaar Kameez", "Kurtas"]
            },
        ]
    }
};
var NAV_ITEMS = [
    { label: "Sale", href: "/sale", hasDropdown: true },
    { label: "Men", href: "/men", hasDropdown: true },
    { label: "Women", href: "/women", hasDropdown: true },
    { label: "Custom Tailoring", href: "/tailoring", hasDropdown: false },
];
// ── Mobile sections (from Figma Image 4) ─────────────────────────
var MOBILE_SECTIONS = [
    {
        heading: "Men's Collection",
        links: ["New Arrival", "Sale", "Unstitched", "Shalwaar Kameez", "Kurtas", "Waist Coats", "3-Piece Suits", "Blazers"],
        href: "/men"
    },
    {
        heading: "Women's Collection",
        links: ["New Arrival", "Sale", "Unstitched", "Shalwaar Kameez", "Kurtas"],
        href: "/women"
    },
    {
        heading: "Account",
        links: [],
        href: "/account"
    },
];
// ── SVG Icons ─────────────────────────────────────────────────────
function ChevronDown(_a) {
    var open = _a.open;
    return (React.createElement("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", className: "transition-transform duration-200 " + (open ? "rotate-180" : "") },
        React.createElement("path", { d: "M2.5 4L6 7.5L9.5 4", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })));
}
function SearchIcon() {
    return (React.createElement("svg", { width: "22", height: "22", viewBox: "0 0 22 22", fill: "none" },
        React.createElement("circle", { cx: "9.5", cy: "9.5", r: "6.5", stroke: "white", strokeWidth: "1.8" }),
        React.createElement("path", { d: "M14.5 14.5L19 19", stroke: "white", strokeWidth: "1.8", strokeLinecap: "round" })));
}
function UserIcon() {
    return (React.createElement("svg", { width: "22", height: "22", viewBox: "0 0 22 22", fill: "none" },
        React.createElement("circle", { cx: "11", cy: "7", r: "4", stroke: "white", strokeWidth: "1.8" }),
        React.createElement("path", { d: "M3 19c0-4 3.58-7 8-7s8 3 8 7", stroke: "white", strokeWidth: "1.8", strokeLinecap: "round" })));
}
function CartIcon(_a) {
    var _b = _a.count, count = _b === void 0 ? 0 : _b;
    return (React.createElement("div", { className: "relative" },
        React.createElement("svg", { width: "22", height: "22", viewBox: "0 0 22 22", fill: "none" },
            React.createElement("path", { d: "M3 3h2l2.68 10.39a2 2 0 001.94 1.61h7.72a2 2 0 001.94-1.51L20.6 7H6", stroke: "white", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }),
            React.createElement("circle", { cx: "9", cy: "20", r: "1.2", fill: "white" }),
            React.createElement("circle", { cx: "17", cy: "20", r: "1.2", fill: "white" })),
        count > 0 && (React.createElement("span", { className: "absolute -top-1.5 -right-1.5 bg-[#FFB86A] text-black text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none" }, count))));
}
function HamburgerIcon(_a) {
    var open = _a.open;
    return (React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none" }, open ? (React.createElement(React.Fragment, null,
        React.createElement("line", { x1: "4", y1: "4", x2: "20", y2: "20", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }),
        React.createElement("line", { x1: "20", y1: "4", x2: "4", y2: "20", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }))) : (React.createElement(React.Fragment, null,
        React.createElement("line", { x1: "3", y1: "6", x2: "21", y2: "6", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }),
        React.createElement("line", { x1: "3", y1: "12", x2: "21", y2: "12", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }),
        React.createElement("line", { x1: "3", y1: "18", x2: "21", y2: "18", stroke: "white", strokeWidth: "2", strokeLinecap: "round" })))));
}
// ── Mega-dropdown panel ────────────────────────────────────────────
function MegaDropdown(_a) {
    var item = _a.item;
    var data = DROPDOWNS[item];
    return (React.createElement("div", { className: "absolute top-full left-0 w-full bg-[#184335] z-40 px-20 py-8", style: { boxShadow: "0 8px 24px rgba(0,0,0,0.25)" } },
        React.createElement("div", { className: "max-w-[1440px] mx-auto flex gap-20" }, data.columns.map(function (col) { return (React.createElement("div", { key: col.heading, className: "flex flex-col gap-4" },
            React.createElement("h3", { className: "text-white text-base font-semibold", style: { fontFamily: "var(--font-neue-montreal)" } }, col.heading),
            React.createElement("ul", { className: "flex flex-col gap-3" }, col.links.map(function (link) { return (React.createElement("li", { key: link },
                React.createElement(link_1["default"], { href: "/" + item.toLowerCase() + "/" + link.toLowerCase().replace(/\s+/g, "-"), className: "text-[#B7C5C0] text-sm hover:text-white transition-colors", style: { fontFamily: "var(--font-neue-montreal)", fontWeight: 400 } }, link))); })))); }))));
}
// ── Main Navbar ────────────────────────────────────────────────────
function Navbar() {
    var _a = react_1.useState(null), activeDropdown = _a[0], setActiveDropdown = _a[1];
    var _b = react_1.useState(false), mobileOpen = _b[0], setMobileOpen = _b[1];
    var navRef = react_1.useRef(null);
    // Close dropdown when clicking outside
    react_1.useEffect(function () {
        function handleClickOutside(e) {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setActiveDropdown(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return function () { return document.removeEventListener("mousedown", handleClickOutside); };
    }, []);
    // Close mobile menu on resize to desktop
    react_1.useEffect(function () {
        function handleResize() {
            if (window.innerWidth >= 1024) {
                setMobileOpen(false);
            }
        }
        window.addEventListener("resize", handleResize);
        return function () { return window.removeEventListener("resize", handleResize); };
    }, []);
    var handleNavHover = function (label) {
        if (label in DROPDOWNS)
            setActiveDropdown(label);
        else
            setActiveDropdown(null);
    };
    return (React.createElement("nav", { ref: navRef, className: "w-full bg-[#184335] sticky top-0 z-50" },
        React.createElement("div", { className: "hidden lg:flex max-w-[1440px] mx-auto px-20 py-4 items-center justify-between relative", onMouseLeave: function () { return setActiveDropdown(null); } },
            React.createElement(link_1["default"], { href: "/", className: "shrink-0" },
                React.createElement("img", { src: logoUrl, alt: "Unique Collection", className: "h-[31px] w-auto" })),
            React.createElement("div", { className: "flex items-center gap-16" }, NAV_ITEMS.map(function (item) { return (React.createElement("div", { key: item.label, className: "relative", onMouseEnter: function () { return handleNavHover(item.label); } },
                React.createElement(link_1["default"], { href: item.href, className: "flex items-center gap-1 text-sm transition-colors " + (activeDropdown === item.label ? "text-white" : "text-white/80 hover:text-white"), style: { fontFamily: "var(--font-neue-montreal)", fontWeight: 400 } },
                    item.label,
                    item.hasDropdown && React.createElement(ChevronDown, { open: activeDropdown === item.label })),
                activeDropdown === item.label && (React.createElement("span", { className: "absolute -bottom-[17px] left-0 right-0 h-[2px] bg-white rounded-full" })))); })),
            React.createElement("div", { className: "flex items-center gap-5" },
                React.createElement("button", { className: "text-white hover:text-white/70 transition-colors", "aria-label": "Search" },
                    React.createElement(SearchIcon, null)),
                React.createElement("button", { className: "text-white hover:text-white/70 transition-colors", "aria-label": "Account" },
                    React.createElement(UserIcon, null)),
                React.createElement("button", { className: "text-white hover:text-white/70 transition-colors", "aria-label": "Cart" },
                    React.createElement(CartIcon, { count: 2 })))),
        activeDropdown && (React.createElement("div", { onMouseEnter: function () { return setActiveDropdown(activeDropdown); }, onMouseLeave: function () { return setActiveDropdown(null); }, className: "hidden lg:block" },
            React.createElement(MegaDropdown, { item: activeDropdown }))),
        React.createElement("div", { className: "lg:hidden flex items-center justify-between px-5 py-4" },
            React.createElement(link_1["default"], { href: "/", className: "shrink-0" },
                React.createElement("img", { src: logoUrl, alt: "Unique Collection", className: "h-7 w-auto" })),
            React.createElement("div", { className: "flex items-center gap-4" },
                React.createElement("button", { className: "text-white", "aria-label": "Search" },
                    React.createElement(SearchIcon, null)),
                React.createElement("button", { className: "text-white", "aria-label": "Cart" },
                    React.createElement(CartIcon, { count: 2 })),
                React.createElement("button", { className: "text-white", onClick: function () { return setMobileOpen(!mobileOpen); }, "aria-label": mobileOpen ? "Close menu" : "Open menu" },
                    React.createElement(HamburgerIcon, { open: mobileOpen })))),
        mobileOpen && (React.createElement("div", { className: "lg:hidden border-t border-[#245749] bg-[#184335] overflow-y-auto max-h-[80vh]" },
            React.createElement("div", { className: "px-5 py-6 flex flex-col gap-6" },
                MOBILE_SECTIONS.map(function (section) { return (React.createElement("div", { key: section.heading, className: "flex flex-col gap-3" },
                    React.createElement(link_1["default"], { href: section.href, className: "text-white text-lg font-semibold", style: { fontFamily: "var(--font-neue-montreal)" }, onClick: function () { return setMobileOpen(false); } }, section.heading),
                    section.links.length > 0 && (React.createElement("ul", { className: "flex flex-col gap-3 pl-1" }, section.links.map(function (link) { return (React.createElement("li", { key: link },
                        React.createElement(link_1["default"], { href: "/" + section.href.replace("/", "") + "/" + link.toLowerCase().replace(/\s+/g, "-"), className: "text-[#B7C5C0] text-sm hover:text-white transition-colors", style: { fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }, onClick: function () { return setMobileOpen(false); } }, link))); }))))); }),
                React.createElement("div", { className: "border-t border-[#245749] pt-4" },
                    React.createElement(link_1["default"], { href: "/tailoring", className: "text-white text-lg font-semibold", style: { fontFamily: "var(--font-neue-montreal)" }, onClick: function () { return setMobileOpen(false); } }, "Custom Tailoring")),
                React.createElement("div", { className: "border-t border-[#245749] pt-4 flex items-center gap-5" },
                    React.createElement(link_1["default"], { href: "/account", onClick: function () { return setMobileOpen(false); }, "aria-label": "Account" },
                        React.createElement(UserIcon, null)),
                    React.createElement(link_1["default"], { href: "/search", onClick: function () { return setMobileOpen(false); }, "aria-label": "Search" },
                        React.createElement(SearchIcon, null))))))));
}
exports["default"] = Navbar;
