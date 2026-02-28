"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var md_1 = require("react-icons/md");
var BrowseByGender = function () {
    return (React.createElement("section", { className: "py-8 md:py-12 px-4 md:px-8 bg-white" },
        React.createElement("div", { className: "max-w-7xl mx-auto" },
            React.createElement("h2", { className: "text-3xl md:text-4xl font-bold text-center mb-8 md:mb-10" }, "Browse By Gender Category"),
            React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto" },
                React.createElement("div", { className: "group relative rounded-2xl overflow-hidden shadow-lg border-2 border-blue-600 transition-all hover:shadow-2xl" },
                    React.createElement("div", { className: "relative aspect-[4/5] md:aspect-[5/6] w-full" },
                        React.createElement(image_1["default"], { src: "/men.png" // Replace with your actual men's image
                            , alt: "Men's Collection", fill: true, className: "object-cover transition-transform group-hover:scale-105 duration-700", sizes: "(max-width: 768px) 100vw, 50vw", priority: true })),
                    React.createElement("div", { className: "absolute bottom-6 left-6 px-6 py-5 rounded-xl text-white w-4/5 md:w-80" },
                        React.createElement("p", { className: "text-2xl font-semibold mb-3" }, "Men's Collection"),
                        React.createElement("ul", { className: "space-y-1 text-sm mb-4" },
                            React.createElement("li", { className: "flex items-center gap-2" },
                                React.createElement("span", null, "\u2022"),
                                " Shalwar Kameez"),
                            React.createElement("li", { className: "flex items-center gap-2" },
                                React.createElement("span", null, "\u2022"),
                                " Waistcoats"),
                            React.createElement("li", { className: "flex items-center gap-2" },
                                React.createElement("span", null, "\u2022"),
                                " Formal Wear")),
                        React.createElement("button", { className: "flex items-center gap-2 text-sm font-semibold hover:text-blue-300 transition-colors" },
                            "View All Men's",
                            React.createElement("span", { className: "text-lg leading-none" },
                                React.createElement(md_1.MdNorthEast, null))))),
                React.createElement("div", { className: "group relative rounded-2xl overflow-hidden shadow-lg transition-all hover:shadow-2xl" },
                    React.createElement("div", { className: "relative aspect-[4/5] md:aspect-[5/6] w-full" },
                        React.createElement(image_1["default"], { src: "/women.png" // Replace with your actual women's image (two models)
                            , alt: "Woman's Collection", fill: true, className: "object-cover transition-transform group-hover:scale-105 duration-700", sizes: "(max-width: 768px) 100vw, 50vw", priority: true })),
                    React.createElement("div", { className: "absolute bottom-6 left-6 px-6 py-5 text-white w-4/5 md:w-80" },
                        React.createElement("p", { className: "text-2xl font-semibold mb-3" }, "Woman's Collection"),
                        React.createElement("ul", { className: "space-y-1 text-sm mb-4" },
                            React.createElement("li", { className: "flex items-center gap-2" },
                                React.createElement("span", null, "\u2022"),
                                " Shirts & Kurti"),
                            React.createElement("li", { className: "flex items-center gap-2" },
                                React.createElement("span", null, "\u2022"),
                                " Stitched Sets"),
                            React.createElement("li", { className: "flex items-center gap-2" },
                                React.createElement("span", null, "\u2022"),
                                " Unstitched Fabrics")),
                        React.createElement("button", { className: "flex items-center gap-2 text-sm font-semibold hover:text-blue-300 transition-colors" },
                            "View All Women's",
                            React.createElement("span", { className: "text-lg leading-none" },
                                React.createElement(md_1.MdNorthEast, null)))))))));
};
exports["default"] = BrowseByGender;
