"use strict";
/**
 * app/(shop)/sale/page.tsx  — Sale listing (shows sale items from both collections)
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.metadata = void 0;
var ProductsListing_1 = require("@/components/ProductsListing");
var products_1 = require("@/config/products");
// Combine and pre-filter to only sale items
var SALE_PRODUCTS = __spreadArrays(products_1.MEN_PRODUCTS, products_1.WOMEN_PRODUCTS).filter(function (p) { return p.badge === "Sale"; })
    .map(function (p, i) { return (__assign(__assign({}, p), { id: i + 1 })); });
var OPTIONS = [
    { label: "Men", value: "men" },
    { label: "Women", value: "women" },
];
var PILLS = [
    { label: "All", value: "all" },
    { label: "Men", value: "men" },
    { label: "Women", value: "women" },
];
exports.metadata = {
    title: "Sale | Unique Collection",
    description: "Shop discounted men's and women's clothing at Unique Collection."
};
function SalePage() {
    return (React.createElement(ProductsListing_1["default"], { title: "Sale", description: "Limited-time discounts on premium men's and women's clothing.", products: SALE_PRODUCTS, filterOptions: OPTIONS, pills: PILLS }));
}
exports["default"] = SalePage;
