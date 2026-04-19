"use strict";
/**
 * app/(shop)/women/page.tsx
 *
 * Women's collection listing page.
 *
 * To change:
 *   Products  → config/products.ts → WOMEN_PRODUCTS
 *   Filters   → config/filters.ts  → WOMEN_FILTER_GROUPS
 *   Heading   → strings.ts         → strings.womensCollection
 *   Pills     → the `pills` array below
 */
exports.__esModule = true;
exports.metadata = void 0;
var ProductsListing_1 = require("@/components/ProductsListing");
var products_1 = require("@/config/products");
var filters_1 = require("@/config/filters");
var PILLS = [
    { label: "All", value: "all" },
    { label: "New Arrival", value: "new-arrival" },
    { label: "Sale", value: "sale" },
    { label: "Shalwaar Kameez", value: "shalwaar-kameez" },
    { label: "Kurtas", value: "kurtas" },
    { label: "Unstitched", value: "unstitched" },
];
// Extract category options for filter
var FILTER_OPTIONS = filters_1.WOMEN_FILTER_GROUPS[0].options || [];
exports.metadata = {
    title: "Women's Collection | Unique Collection",
    description: "Shop premium women's clothing — Shalwaar Kameez, Kurtas, Unstitched fabrics & more."
};
function WomenPage() {
    return (React.createElement(ProductsListing_1["default"], { title: "Women's Collection", description: "Elegant women's clothing crafted with premium fabrics \u2014 ready-made & custom stitched.", products: products_1.WOMEN_PRODUCTS, filterOptions: FILTER_OPTIONS, pills: PILLS }));
}
exports["default"] = WomenPage;
