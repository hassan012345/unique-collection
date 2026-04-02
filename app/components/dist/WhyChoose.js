"use client";
"use strict";
exports.__esModule = true;
var features = [
    {
        icon: '/AITryOn.png',
        title: "AI Try-On",
        description: "Try AI Feature for your picks."
    },
    {
        icon: '/CustomStitching.png',
        title: "Custom Stitching",
        description: "Easily custom stitched."
    },
    {
        icon: '/FastDelivery.png',
        title: "Fast Delivery",
        description: "Delivered fast. Always."
    },
    {
        icon: '/QualityFabrics.png',
        title: "Quality Fabrics",
        description: "Provided with quality fabrics."
    },
];
function WhyChoose() {
    return (React.createElement("section", { className: "w-full bg-[#E8ECEB] px-5 lg:px-20 py-12 lg:py-16" },
        React.createElement("div", { className: "max-w-[1440px] mx-auto flex flex-col gap-8 lg:gap-10 items-center" },
            React.createElement("h2", { className: "text-[#184335] text-2xl md:text-3xl lg:text-[48px] font-[600] capitalize text-center", style: { fontFamily: "var(--font-perfectly-nineties)" } }, "Why Choose Unique Collection"),
            React.createElement("div", { className: "w-full grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4" }, features.map(function (f) { return (React.createElement("div", { key: f.title, className: "flex items-center gap-3 lg:gap-4" },
                React.createElement("div", { className: "shrink-0 w-[45px] h-[45px] lg:w-[55px] lg:h-[55px] overflow-hidden" },
                    React.createElement("img", { src: f.icon, alt: f.title, className: "w-full h-full object-contain" })),
                React.createElement("div", { className: "flex flex-col gap-1" },
                    React.createElement("h3", { className: "text-[#184335] text-lg lg:text-[28px] font-[700] leading-relaxed", style: { fontFamily: "var(--font-perfectly-nineties)" } }, f.title),
                    React.createElement("p", { className: "text-[#525252] text-xs lg:text-[16px] leading-relaxed", style: { fontFamily: "var(--font-neue-montreal)", fontWeight: 400 } }, f.description)))); })))));
}
exports["default"] = WhyChoose;
