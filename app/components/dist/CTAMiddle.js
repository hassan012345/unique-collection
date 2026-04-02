"use client";
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
// local copy from public/ (downloaded from Figma)
var ctaBgUrl = "/CTA.png";
function CTAMiddle() {
    return (React.createElement("section", { className: "relative w-full overflow-hidden" },
        React.createElement("div", { className: "absolute inset-0" },
            React.createElement("img", { src: ctaBgUrl, alt: "CTA background", className: "w-full h-full object-cover" }),
            React.createElement("div", { className: "absolute inset-0 bg-black/50" })),
        React.createElement("div", { className: "relative z-10 max-w-[1440px] mx-auto px-5 lg:px-20 py-20 lg:py-[150px] flex flex-col gap-8 items-start lg:items-center text-center" },
            React.createElement("div", { className: "flex flex-col gap-5 text-white text-left lg:text-center max-w-[500px]" },
                React.createElement("h2", { className: "text-[36px] md:text-[48px] lg:text-[64px] font-[400] leading-tight lg:leading-[69px]", style: { fontFamily: "var(--font-perfectly-nineties)" } }, "Customize your Unstitched Clothes"),
                React.createElement("p", { className: "text-sm lg:text-base leading-relaxed", style: { fontFamily: "var(--font-neue-montreal)", fontWeight: 400 } }, "Buy Unstitched clothes and help us customize them according to your needs")),
            React.createElement(link_1["default"], { href: "/tailoring", className: "h-[48px] lg:h-[56px] px-8 lg:px-10 flex items-center justify-center rounded-full bg-[#245749] text-white text-sm lg:text-base font-[500] hover:bg-[#184335] transition-colors whitespace-nowrap", style: { fontFamily: "var(--font-neue-montreal)" } }, "Customize your Clothing"))));
}
exports["default"] = CTAMiddle;
