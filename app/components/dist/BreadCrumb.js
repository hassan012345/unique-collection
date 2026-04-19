"use client";
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var navigation_1 = require("next/navigation");
var ROUTE_LABELS = {
    men: "Men's Collection",
    women: "Women's Collection",
    sale: "Sale",
    tailoring: "Custom Tailoring",
    unstitched: "Unstitched",
    "new-arrival": "New Arrival",
    "new-arrivals": "New Arrivals",
    "shalwaar-kameez": "Shalwaar Kameez",
    "waist-coats": "Waist Coats",
    "3-piece-suits": "3-Piece Suits",
    blazers: "Blazers",
    kurtas: "Kurtas",
    formal: "Formal Wear",
    account: "Account",
    orders: "Orders",
    saved: "Saved",
    measurements: "Measurements"
};
function slugToLabel(slug) {
    var _a;
    return ((_a = ROUTE_LABELS[slug]) !== null && _a !== void 0 ? _a : slug.split("-").map(function (w) { return w[0].toUpperCase() + w.slice(1); }).join(" "));
}
function useAutoCrumbs() {
    var pathname = navigation_1.usePathname();
    var segments = pathname.split("/").filter(Boolean);
    var crumbs = [{ label: "Home", href: "/" }];
    segments.forEach(function (seg, i) {
        var isLast = i === segments.length - 1;
        crumbs.push({
            label: slugToLabel(seg),
            href: isLast ? undefined : "/" + segments.slice(0, i + 1).join("/")
        });
    });
    return crumbs;
}
function ChevronRight() {
    return (React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": true },
        React.createElement("path", { d: "M5.5 3L8.5 7L5.5 11", stroke: "#A1A1A1", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" })));
}
function Breadcrumb(_a) {
    var items = _a.items, className = _a.className;
    var auto = useAutoCrumbs();
    var crumbs = items !== null && items !== void 0 ? items : auto;
    return (React.createElement("nav", { "aria-label": "Breadcrumb", className: className },
        React.createElement("ol", { className: "flex flex-wrap items-center gap-1 ", itemScope: true, itemType: "https://schema.org/BreadcrumbList" }, crumbs.map(function (crumb, i) {
            var isLast = i === crumbs.length - 1;
            return (React.createElement("li", { key: i, className: "flex items-center gap-1", itemProp: "itemListElement", itemScope: true, itemType: "https://schema.org/ListItem" },
                i > 0 && React.createElement(ChevronRight, null),
                isLast || !crumb.href ? (React.createElement("span", { className: "text-sm font-medium text-[#171717]", style: { fontFamily: "var(--font-neue-montreal)" }, "aria-current": "page", itemProp: "name" }, crumb.label)) : (React.createElement(link_1["default"], { href: crumb.href, className: "text-sm text-[#737373] hover:text-[#184335] transition-colors", style: { fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }, itemProp: "item" },
                    React.createElement("span", { itemProp: "name" }, crumb.label))),
                React.createElement("meta", { itemProp: "position", content: String(i + 1) })));
        }))));
}
exports["default"] = Breadcrumb;
