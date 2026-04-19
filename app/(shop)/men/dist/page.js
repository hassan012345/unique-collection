"use strict";
/**
 * app/(shop)/men/page.tsx
 *
 * To change filter options → edit the OPTIONS array below.
 * To change products       → config/products.ts → MEN_PRODUCTS
 */
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
var OPTIONS = [
    { label: "New Arrival", value: "new-arrival" },
    { label: "Sale", value: "sale" },
    { label: "Unstitched", value: "unstitched" },
    { label: "Shalwaar Kameez", value: "shalwaar-kameez" },
    { label: "Kurtas", value: "kurtas" },
    { label: "Waist Coats", value: "waist-coats" },
    { label: "3-Piece Suits", value: "3-piece-suits" },
    { label: "Blazers", value: "blazers" },
];
// Same list used for pills strip AND the filter panel checkboxes
var PILLS = __spreadArrays([{ label: "All", value: "all" }], OPTIONS);
exports.metadata = {
    title: "Men's Collection | Unique Collection",
    description: "Shop premium men's clothing — Shalwaar Kameez, Kurtas, Waistcoats & more."
};
function MenPage() {
    return (React.createElement(ProductsListing_1["default"], { title: "Men's Collection", description: "Premium men's clothing crafted for comfort and confidence.", products: products_1.MEN_PRODUCTS, filterOptions: OPTIONS, pills: PILLS }));
}
exports["default"] = MenPage;
