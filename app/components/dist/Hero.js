"use strict";
exports.__esModule = true;
var Header_1 = require("./Header");
var HeroSection = function () {
    return (React.createElement("div", null,
        React.createElement(Header_1["default"], null),
        React.createElement("div", { className: "relative w-full h-screen bg-cover bg-center", style: {
                backgroundImage: "url('/hero-background.png')"
            } },
            React.createElement("div", { className: "absolute inset-0 bg-black/10" }),
            React.createElement("div", { className: "relative z-10 flex flex-col items-start justify-center h-full px-4 md:px-8 max-w-lg text-white space-y-4 md:space-y-6" },
                React.createElement("h1", { className: "text-4xl sm:text-5xl md:text-6xl font-serif leading-tight tracking-tight" },
                    "Premium Men'",
                    React.createElement("br", null),
                    "Wear - Ready-Made",
                    React.createElement("br", null),
                    "& Custom Stitched"),
                React.createElement("p", { className: "text-base md:text-lg" }, "`` Designed with your comfort in mind and styled to boost your confidence. This piece is perfect for any occasion."),
                React.createElement("div", { className: "flex flex-col w-full sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4" },
                    React.createElement("button", { className: "bg-[#1B4B3A] text-white px-6 py-3 rounded-full font-medium text-base hover:bg-[#163a2d] transition" }, "Start Custom Stitching"),
                    React.createElement("button", { className: "bg-white text-[#1B4B3A] px-6 py-3 rounded-full font-medium text-base hover:bg-gray-100 transition" }, "Shop Ready-Made"))))));
};
exports["default"] = HeroSection;
