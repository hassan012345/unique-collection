"use strict";
exports.__esModule = true;
var fi_1 = require("react-icons/fi");
var ProductCard_1 = require("./ui/ProductCard");
var MOCK_PRODUCTS = [
    {
        id: 1,
        title: "Classic White Shalwar Kameez",
        description: "Available: M, L, XL, XXL",
        price: 4500,
        originalPrice: 4500,
        rating: 4.9,
        reviews: 56,
        image: "/women.png"
    },
    {
        id: 2,
        title: "Premium Wash & Wear Fabric",
        description: "Fabric: 100% Cotton (5 meters)",
        price: 3200,
        rating: 4.8,
        reviews: 23,
        image: "/women.png",
        isStitchable: true
    },
    {
        id: 3,
        title: "Classic White Shalwar Kameez",
        description: "Available: M, L, XL, XXL",
        price: 4500,
        originalPrice: 4500,
        rating: 4.9,
        reviews: 56,
        image: "/women.png"
    },
    {
        id: 4,
        title: "Premium Wash & Wear Fabric",
        description: "Fabric: 100% Cotton (5 meters)",
        price: 3200,
        rating: 4.8,
        reviews: 23,
        image: "/women.png",
        isStitchable: true
    },
];
function FeaturedCollection() {
    return (React.createElement("section", { className: "py-16 px-4 md:px-8 max-w-7xl mx-auto" },
        React.createElement("div", { className: "flex justify-between items-end mb-10" },
            React.createElement("div", null,
                React.createElement("h2", { className: "text-4xl md:text-5xl font-serif text-gray-900 mb-4" }, "Loved by Women"),
                React.createElement("p", { className: "text-gray-600 text-lg" }, "Customer favorites crafted for comfort, confidence, and lasting style.")),
            React.createElement("div", { className: "hidden md:flex gap-3" },
                React.createElement("button", { className: "p-2.5 rounded-full border border-gray-200 text-gray-400 hover:text-black hover:border-black transition-all" },
                    React.createElement(fi_1.FiChevronLeft, { className: "w-6 h-6" })),
                React.createElement("button", { className: "p-2.5 rounded-full border border-gray-200 text-gray-400 hover:text-black hover:border-black transition-all" },
                    React.createElement(fi_1.FiChevronRight, { className: "w-6 h-6" })))),
        React.createElement("div", { className: "flex gap-6 overflow-x-auto pb-8 snap-x no-scrollbar md:grid md:grid-cols-3 lg:grid-cols-4 md:overflow-visible" }, MOCK_PRODUCTS.map(function (product) { return (React.createElement("div", { key: product.id, className: "min-w-[85%] md:min-w-0 snap-center" },
            React.createElement(ProductCard_1["default"], { product: product }))); }))));
}
exports["default"] = FeaturedCollection;
