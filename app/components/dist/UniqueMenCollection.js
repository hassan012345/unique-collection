"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var UniqueMenCollection = function () {
    var products = [
        {
            image: "/men.png",
            discount: "-50%",
            newArrival: true,
            name: "Shalwar Kameez",
            description: "Classic style, modern fit.",
            rating: 4.9,
            reviews: 156,
            price: 4500,
            oldPrice: 4600
        },
        {
            image: "/men.png",
            discount: "-50%",
            newArrival: true,
            name: "Shalwar Kameez",
            description: "Classic style, modern fit.",
            rating: 4.9,
            reviews: 156,
            price: 4500,
            oldPrice: 4600
        },
        {
            image: "/men.png",
            discount: "-50%",
            newArrival: true,
            name: "Shalwar Kameez",
            description: "Classic style, modern fit.",
            rating: 4.9,
            reviews: 156,
            price: 4500,
            oldPrice: 4600
        },
        {
            image: "/men.png",
            discount: "-50%",
            newArrival: true,
            name: "Shalwar Kameez",
            description: "Classic style, modern fit.",
            rating: 4.9,
            reviews: 156,
            price: 4500,
            oldPrice: 4600
        },
    ];
    return (React.createElement("section", { className: "py-12 px-4 md:px-8 bg-white" },
        React.createElement("div", { className: "max-w-7xl mx-auto" },
            React.createElement("h2", { className: "text-3xl md:text-4xl font-serif text-center mb-6" }, "Unique Men Collection"),
            React.createElement("nav", { className: "flex flex-wrap justify-center space-x-4 md:space-x-6 text-gray-600 text-sm md:text-base mb-8" },
                React.createElement("a", { href: "#", className: "hover:text-[#1B4B3A]" }, "Shalwar Kameez"),
                React.createElement("a", { href: "#", className: "hover:text-[#1B4B3A]" }, "Kurta/Trouser"),
                React.createElement("a", { href: "#", className: "hover:text-[#1B4B3A]" }, "3-Piece Suits"),
                React.createElement("a", { href: "#", className: "hover:text-[#1B4B3A]" }, "Waistcoats"),
                React.createElement("a", { href: "#", className: "hover:text-[#1B4B3A]" }, "New Arrival"),
                React.createElement("a", { href: "#", className: "hover:text-[#1B4B3A]" }, "Unstitched"),
                React.createElement("a", { href: "#", className: "hover:text-[#1B4B3A]" }, "Stitched")),
            React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6" }, products.map(function (product, index) { return (React.createElement("div", { key: index, className: "relative bg-white rounded-lg overflow-hidden shadow-md flex flex-col" },
                React.createElement("div", { className: "relative aspect-[3/4] w-full overflow-hidden" },
                    React.createElement("div", { className: "absolute top-2 right-2 z-10 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full" }, product.discount),
                    product.newArrival && (React.createElement("div", { className: "absolute bottom-3 left-3 z-10 bg-[#FBBF24] text-white text-[10px] px-2 py-1 rounded font-semibold uppercase tracking-wider" }, "New Arrival")),
                    React.createElement(image_1["default"], { src: product.image, alt: product.name, fill // Use fill with parent relative + aspect ratio
                        : true, className: "object-cover transition-transform duration-500 hover:scale-105" })),
                React.createElement("div", { className: "p-4" },
                    React.createElement("h3", { className: "text-base font-medium" }, product.name),
                    React.createElement("p", { className: "text-sm text-gray-600" }, product.description),
                    React.createElement("div", { className: "flex items-center mt-1" },
                        React.createElement("span", { className: "text-yellow-400 text-sm" }, "\u2605\u2605\u2605\u2605\u2605"),
                        React.createElement("span", { className: "text-xs text-gray-500 ml-1" },
                            "(",
                            product.rating,
                            " ",
                            product.reviews,
                            ")")),
                    React.createElement("div", { className: "flex items-center mt-2" },
                        React.createElement("span", { className: "text-[#1B4B3A] font-bold" },
                            "PKR ",
                            product.price.toLocaleString()),
                        React.createElement("span", { className: "text-gray-500 line-through ml-2" },
                            "PKR ",
                            product.oldPrice.toLocaleString()))))); })),
            React.createElement("div", { className: "flex justify-center mt-8" },
                React.createElement("button", { className: "bg-[#1B4B3A] text-white px-6 py-3 rounded-full font-medium text-base hover:bg-[#163a2d] transition" }, "View All")))));
};
exports["default"] = UniqueMenCollection;
