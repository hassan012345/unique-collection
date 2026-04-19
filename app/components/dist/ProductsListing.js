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
/**
 * components/ProductListingPage.tsx
 *
 * Key design decisions (matching your Figma):
 *
 * - NO inline sidebar on desktop. The filter panel is always a
 *   right-side slide-in triggered by the filter icon, same on
 *   both desktop and mobile.
 *
 * - Filter icon sits next to the pills row (desktop) and next to
 *   the page title (mobile) — both open the same panel.
 *
 * - One filter group: Category, checkbox only.
 *   Options come from the `filterOptions` prop so they're driven
 *   by config/filters.ts in the page file.
 *
 * - Full-width product grid (4 cols desktop, 2 cols mobile).
 *
 * - Active chips shown below the pill strip when filters are on.
 *
 * - Pagination + sort dropdown included.
 */
var react_1 = require("react");
var FilterSidebar_1 = require("@/components/FilterSidebar");
var ProductsGrid_1 = require("@/components/ProductsGrid");
var filters_1 = require("@/config/filters");
// ── Icons ──────────────────────────────────────────────────────────
function FilterIcon() {
    return (React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", "aria-hidden": true },
        React.createElement("path", { d: "M3 5h14M6 10h8M9 15h2", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })));
}
function CloseSmIcon() {
    return (React.createElement("svg", { width: "10", height: "10", viewBox: "0 0 10 10", fill: "none", "aria-hidden": true },
        React.createElement("path", { d: "M1 1l8 8M9 1L1 9", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round" })));
}
var PAGE_SIZE = 12;
function ProductListingPage(_a) {
    var title = _a.title, description = _a.description, breadcrumbs = _a.breadcrumbs, products = _a.products, filterOptions = _a.filterOptions, _b = _a.pills, pills = _b === void 0 ? [] : _b;
    // ── State ──────────────────────────────────────────────────────
    var _c = react_1.useState([]), selected = _c[0], setSelected = _c[1];
    var _d = react_1.useState("featured"), sort = _d[0], setSort = _d[1];
    var _e = react_1.useState(0), activePill = _e[0], setActivePill = _e[1];
    var _f = react_1.useState(1), page = _f[0], setPage = _f[1];
    var _g = react_1.useState(false), filterOpen = _g[0], setFilterOpen = _g[1];
    // ── Filter + sort ──────────────────────────────────────────────
    var filtered = react_1.useMemo(function () {
        var list = __spreadArrays(products);
        if (selected.length > 0) {
            list = list.filter(function (p) {
                return selected.some(function (v) { var _a; return (_a = p.href.split("/").pop()) === null || _a === void 0 ? void 0 : _a.includes(v); });
            });
        }
        if (sort === "price-asc")
            list.sort(function (a, b) {
                return parseInt(a.price.replace(/\D/g, "")) -
                    parseInt(b.price.replace(/\D/g, ""));
            });
        if (sort === "price-desc")
            list.sort(function (a, b) {
                return parseInt(b.price.replace(/\D/g, "")) -
                    parseInt(a.price.replace(/\D/g, ""));
            });
        return list;
    }, [products, selected, sort]);
    // ── Pagination ─────────────────────────────────────────────────
    var totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    var paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
    // ── Active chips ───────────────────────────────────────────────
    var activeChips = react_1.useMemo(function () { return filterOptions.filter(function (o) { return selected.includes(o.value); }); }, [filterOptions, selected]);
    function dismissChip(value) {
        setSelected(function (s) { return s.filter(function (v) { return v !== value; }); });
        setPage(1);
    }
    function clearAll() {
        setSelected([]);
        setPage(1);
    }
    // ── Filter button (shared between desktop + mobile) ────────────
    var FilterButton = (React.createElement("button", { type: "button", onClick: function () { return setFilterOpen(true); }, className: "flex items-center gap-1.5 border border-[#184335] text-[#184335] rounded-full px-3 py-1.5 text-sm font-medium hover:bg-[#E8ECEB] transition-colors flex-none", style: { fontFamily: "var(--font-neue-montreal)" } },
        React.createElement(FilterIcon, null),
        "Filters",
        selected.length > 0 && (React.createElement("span", { className: "bg-[#184335] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none" }, selected.length))));
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "w-full" },
            React.createElement("div", { className: "max-w-[1440px] mx-auto px-6 lg:px-20 py-5 lg:py-6" },
                React.createElement("div", { className: "flex items-center justify-between gap-4" },
                    React.createElement("h1", { className: "text-[28px] lg:text-[40px] font-semibold text-[#0A1C16] leading-tight", style: { fontFamily: "var(--font-perfectly-nineties)" } }, title),
                    pills.length === 0 && React.createElement("div", null, FilterButton)),
                description && (React.createElement("p", { className: "text-sm text-[#46695D] max-w-xl mt-1", style: {
                        fontFamily: "var(--font-neue-montreal)",
                        fontWeight: 400
                    } }, description)))),
        pills.length > 0 && (React.createElement("div", { className: "w-full bg-white border-b border-[#E5E5E5] sticky top-[63px] z-30" },
            React.createElement("div", { className: "max-w-[1440px] mx-auto px-5 lg:px-20 py-3 flex items-center gap-3" },
                React.createElement("div", { className: "flex gap-2 overflow-x-auto scrollbar-hide pb-0.5 flex-1 min-w-0" }, pills.map(function (pill, i) { return (React.createElement("button", { key: pill.value, type: "button", onClick: function () {
                        setActivePill(i);
                        setPage(1);
                    }, className: "\n                    flex-none px-4 py-1.5 rounded-full text-sm border transition-colors whitespace-nowrap\n                    " + (i === activePill
                        ? "bg-[#E8ECEB] text-[#184335] border-[#184335]"
                        : "bg-white text-[#525252] border-[#E5E5E5] hover:border-[#184335] hover:text-[#184335]") + "\n                  ", style: {
                        fontFamily: "var(--font-neue-montreal)",
                        fontWeight: 500
                    } }, pill.label)); })),
                FilterButton))),
        React.createElement("div", { className: "max-w-[1440px] mx-auto px-5 lg:px-20 py-6 lg:py-8" },
            React.createElement("div", { className: "flex items-center justify-between mb-4 gap-4" },
                React.createElement("p", { className: "text-sm text-[#737373]", style: { fontFamily: "var(--font-neue-montreal)" } },
                    filtered.length,
                    " ",
                    filtered.length === 1 ? "product" : "products"),
                React.createElement("div", { className: "relative" },
                    React.createElement("select", { value: sort, onChange: function (e) {
                            setSort(e.target.value);
                            setPage(1);
                        }, className: "appearance-none pl-3 pr-8 py-2 border border-[#E5E5E5] rounded-lg text-sm text-[#525252] bg-white hover:border-[#184335] focus:outline-none focus:border-[#184335] cursor-pointer", style: { fontFamily: "var(--font-neue-montreal)" } }, filters_1.SORT_OPTIONS.map(function (o) { return (React.createElement("option", { key: o.value, value: o.value }, o.label)); })),
                    React.createElement("svg", { className: "absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none", width: "12", height: "12", viewBox: "0 0 12 12", fill: "none" },
                        React.createElement("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "#737373", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" })))),
            activeChips.length > 0 && (React.createElement("div", { className: "flex flex-wrap gap-2 mb-5" },
                activeChips.map(function (chip) { return (React.createElement("span", { key: chip.value, className: "flex items-center gap-1.5 px-3 py-1 bg-[#E8ECEB] text-[#184335] text-xs rounded-full font-medium", style: { fontFamily: "var(--font-neue-montreal)" } },
                    chip.label,
                    React.createElement("button", { type: "button", onClick: function () { return dismissChip(chip.value); }, "aria-label": "Remove " + chip.label, className: "hover:text-[#0A1C16] transition-colors" },
                        React.createElement(CloseSmIcon, null)))); }),
                React.createElement("button", { type: "button", onClick: clearAll, className: "text-xs text-[#737373] hover:text-[#171717] underline underline-offset-2 transition-colors", style: { fontFamily: "var(--font-neue-montreal)" } }, "Clear all"))),
            React.createElement(ProductsGrid_1["default"], { products: paginated, onClear: clearAll }),
            totalPages > 1 && (React.createElement("div", { className: "flex items-center justify-center gap-2 mt-12" },
                React.createElement("button", { type: "button", onClick: function () { return setPage(function (p) { return Math.max(1, p - 1); }); }, disabled: page === 1, className: "px-4 py-2 border border-[#E5E5E5] rounded-lg text-sm text-[#525252] hover:border-[#184335] hover:text-[#184335] disabled:opacity-40 disabled:cursor-not-allowed transition-colors", style: { fontFamily: "var(--font-neue-montreal)" } }, "Previous"),
                Array.from({ length: totalPages }, function (_, i) { return i + 1; }).map(function (p) { return (React.createElement("button", { key: p, type: "button", onClick: function () { return setPage(p); }, className: "w-9 h-9 rounded-lg text-sm font-medium transition-colors " + (p === page
                        ? "bg-[#184335] text-white"
                        : "border border-[#E5E5E5] text-[#525252] hover:border-[#184335] hover:text-[#184335]"), style: { fontFamily: "var(--font-neue-montreal)" } }, p)); }),
                React.createElement("button", { type: "button", onClick: function () { return setPage(function (p) { return Math.min(totalPages, p + 1); }); }, disabled: page === totalPages, className: "px-4 py-2 border border-[#E5E5E5] rounded-lg text-sm text-[#525252] hover:border-[#184335] hover:text-[#184335] disabled:opacity-40 disabled:cursor-not-allowed transition-colors", style: { fontFamily: "var(--font-neue-montreal)" } }, "Next")))),
        filterOpen && (React.createElement(FilterSidebar_1["default"], { options: filterOptions, selected: selected, onChange: function (vals) {
                setSelected(vals);
                setPage(1);
            }, onClose: function () { return setFilterOpen(false); }, productCount: filtered.length }))));
}
exports["default"] = ProductListingPage;
