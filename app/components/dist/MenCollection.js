"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var MenCollection = function () {
    var categories = [
        {
            src: "/men1.png",
            alt: "Waistcoat",
            label: "Waistcoats"
        },
        {
            src: "/men2.png",
            alt: "Shalwar Qameez",
            label: "Shalwar Qameez"
        },
        {
            src: "/men3.png",
            alt: "Kurta",
            label: "Kurta"
        },
        {
            src: "/men4.png",
            alt: "Sherwani",
            label: "Sherwani"
        },
    ];
    return (React.createElement("div", { className: "bg-white py-8 px-4 text-center md:mx-auto" },
        React.createElement("h1", { className: "text-3xl md:text-4xl font-serif text-center mb-6" }, "Men Collection"),
        React.createElement("div", { className: "flex flex-col md:flex-row gap-4 md:gap-6" }, categories.map(function (category, index) { return (React.createElement("div", { key: index, className: "relative flex-1" },
            React.createElement(image_1["default"], { className: "w-full h-auto rounded-lg shadow-md", src: category.src, alt: category.alt, width: 400, height: 600, priority: true }),
            React.createElement("p", { className: "absolute bottom-4 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded text-xl font-medium text-white" }, category.label))); })),
        React.createElement("div", { className: "flex justify-center mt-8" },
            React.createElement("button", { className: "bg-[#1B4B3A] text-white px-6 py-3 rounded-full font-medium text-base hover:bg-[#163a2d] transition" }, "View All"))));
};
exports["default"] = MenCollection;
