"use client";
"use strict";
exports.__esModule = true;
var md_1 = require("react-icons/md");
var gi_1 = require("react-icons/gi");
var fa6_1 = require("react-icons/fa6");
function WhyChooseUniqueCollection() {
    var features = [
        {
            icon: React.createElement(md_1.MdOutlinePhoneAndroid, { className: "text-6xl" }),
            title: "AI Try-On",
            desc: "Try AI Feature for your picks."
        },
        {
            icon: React.createElement(gi_1.GiSewingMachine, { className: "text-6xl" }),
            title: "Custom Stitching",
            desc: "Easily custom stitched."
        },
        {
            icon: React.createElement(fa6_1.FaTruckFast, { className: "text-6xl" }),
            title: "Fast Delivery",
            desc: "Delivered fast. Always."
        },
        {
            icon: React.createElement(md_1.MdOutlineHighQuality, { className: "text-6xl" }),
            title: "Quality Fabrics",
            desc: "Provided with quality fabrics."
        },
    ];
    return (React.createElement("section", { className: "bg-[#f8faf5] py-12 md:py-16" },
        React.createElement("div", { className: "max-w-6xl mx-auto px-4 md:px-6" },
            React.createElement("h2", { className: "text-4xl md:text-5xl font-bold text-center text-emerald-900 mb-12 md:mb-16 tracking-tight" }, "Why Choose Unique Collection"),
            React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10" }, features.map(function (feature, index) { return (React.createElement("div", { key: index, className: "flex flex-col items-center text-center" },
                React.createElement("div", { className: "text-emerald-700 mb-6 transition-transform group-hover:scale-110" }, feature.icon),
                React.createElement("h3", { className: "text-2xl font-semibold text-emerald-950 mb-3" }, feature.title),
                React.createElement("p", { className: "text-emerald-700/80 text-base leading-relaxed max-w-[220px]" }, feature.desc))); })))));
}
exports["default"] = WhyChooseUniqueCollection;
