'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("swiper/react");
var modules_1 = require("swiper/modules");
// Import Swiper styles
require("swiper/css");
require("swiper/css/navigation");
require("swiper/css/pagination");
var BestSelling = function () {
    return (React.createElement("section", { className: "py-12 px-4 md:px-8 bg-white" },
        React.createElement("div", { className: "max-w-7xl mx-auto" },
            React.createElement("h2", { className: "text-3xl md:text-4xl font-serif mb-2" }, "Our Best Selling"),
            React.createElement("p", { className: "text-base text-gray-600 mb-8" }, "Customer favorites crafted for comfort, confidence, and lasting style."),
            React.createElement(react_1.Swiper, { modules: [modules_1.Navigation, modules_1.Pagination], spaceBetween: 16, slidesPerView: 1, breakpoints: {
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 }
                }, navigation: true, pagination: { clickable: true }, className: "best-selling-swiper" },
                React.createElement(react_1.SwiperSlide, null,
                    React.createElement("div", { className: "relative h-[500px] md:h-[600px] bg-gray-100 rounded-lg overflow-hidden shadow-md" },
                        React.createElement("img", { src: "/ManEmbroidedKurta.png", alt: "Occasion Wear", className: "w-full h-full object-cover" }),
                        React.createElement("div", { className: "absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white" },
                            React.createElement("h3", { className: "text-xl font-semibold" }, "Occasion Wear"),
                            React.createElement("p", { className: "text-sm" }, "Crafted for ceremonies, celebrations, and unforgettable moments."),
                            React.createElement("button", { className: "mt-2 text-sm underline" }, "Explore Collection \u2192")))),
                React.createElement(react_1.SwiperSlide, null,
                    React.createElement("div", { className: "relative h-96 bg-white rounded-lg overflow-hidden shadow-md" },
                        React.createElement("div", { className: "absolute top-2 left-2 bg-[var(--new-arrival-yellow)] text-white text-xs px-2 py-1 rounded" }, "New Arrival"),
                        React.createElement("div", { className: "absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full" }, "-50%"),
                        React.createElement("img", { src: "/ClassicWhite.png", alt: "Classic White Shalwar Kameez", className: "w-full h-3/4 object-cover" }),
                        React.createElement("div", { className: "p-4" },
                            React.createElement("div", { className: "flex items-center mb-1" },
                                React.createElement("span", { className: "text-yellow-400" }, "\u2605 \u2605 \u2605 \u2605 \u2606"),
                                React.createElement("span", { className: "text-xs text-gray-500 ml-2" }, "(4.9 | 361)")),
                            React.createElement("h4", { className: "text-base font-medium" }, "Classic White Shalwar Kameez"),
                            React.createElement("div", { className: "flex items-center" },
                                React.createElement("span", { className: "text-green-700 font-bold" }, "PKR 4,500"),
                                React.createElement("span", { className: "text-gray-500 line-through ml-2" }, "PKR 9,000"))))),
                React.createElement(react_1.SwiperSlide, null,
                    React.createElement("div", { className: "relative h-96 bg-white rounded-lg overflow-hidden shadow-md" },
                        React.createElement("div", { className: "absolute top-2 left-2 bg-[var(--new-arrival-yellow)] text-white text-xs px-2 py-1 rounded" }, "New Arrival"),
                        React.createElement("div", { className: "absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full" }, "-50%"),
                        React.createElement("img", { src: "/ClassicWhite.png", alt: "Classic White Shalwar Kameez", className: "w-full h-3/4 object-cover" }),
                        React.createElement("div", { className: "p-4" },
                            React.createElement("div", { className: "flex items-center mb-1" },
                                React.createElement("span", { className: "text-yellow-400" }, "\u2605 \u2605 \u2605 \u2605 \u2606"),
                                React.createElement("span", { className: "text-xs text-gray-500 ml-2" }, "(4.9 | 361)")),
                            React.createElement("h4", { className: "text-base font-medium" }, "Classic White Shalwar Kameez"),
                            React.createElement("div", { className: "flex items-center" },
                                React.createElement("span", { className: "text-green-700 font-bold" }, "PKR 4,500"),
                                React.createElement("span", { className: "text-gray-500 line-through ml-2" }, "PKR 9,000"))))),
                React.createElement(react_1.SwiperSlide, null,
                    React.createElement("div", { className: "relative h-96 bg-white rounded-lg overflow-hidden shadow-md" },
                        React.createElement("div", { className: "absolute top-2 left-2 bg-[var(--new-arrival-yellow)] text-white text-xs px-2 py-1 rounded" }, "New Arrival"),
                        React.createElement("div", { className: "absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full" }, "-50%"),
                        React.createElement("img", { src: "/ClassicWhite.png", alt: "Classic White Shalwar Kameez", className: "w-full h-3/4 object-cover" }),
                        React.createElement("div", { className: "p-4" },
                            React.createElement("div", { className: "flex items-center mb-1" },
                                React.createElement("span", { className: "text-yellow-400" }, "\u2605 \u2605 \u2605 \u2605 \u2606"),
                                React.createElement("span", { className: "text-xs text-gray-500 ml-2" }, "(4.9 | 361)")),
                            React.createElement("h4", { className: "text-base font-medium" }, "Classic White Shalwar Kameez"),
                            React.createElement("div", { className: "flex items-center" },
                                React.createElement("span", { className: "text-green-700 font-bold" }, "PKR 4,500"),
                                React.createElement("span", { className: "text-gray-500 line-through ml-2" }, "PKR 9,000")))))))));
};
exports["default"] = BestSelling;
