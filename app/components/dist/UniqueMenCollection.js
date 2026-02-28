"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("swiper/react");
var modules_1 = require("swiper/modules");
var fa6_1 = require("react-icons/fa6");
var image_1 = require("next/image");
require("swiper/css");
require("swiper/css/navigation");
function SwiperCmp() {
    var products = [
        {
            id: 1,
            image: "/men1.png",
            badge: "New",
            title: "Classic White Shalwar Kameez",
            price: "PKR 4,500"
        },
        {
            id: 2,
            image: "/men1.png",
            badge: "New Arrival",
            title: "Red Shalwar kameez suite",
            price: "PKR 3,500"
        },
        {
            id: 3,
            image: "/men1.png",
            badge: "Sale",
            title: "Blue Banarsi Kameez",
            price: "PKR 2,500",
            oldPrice: "PKR 4,000"
        },
        {
            id: 4,
            image: "/men1.png",
            badge: "Sale",
            title: "Classic White Shalwar Kameez",
            price: "PKR 10,500",
            oldPrice: "PKR 12,000"
        },
        {
            id: 5,
            image: "/men1.png",
            badge: null,
            title: "Classic White Shalwar Kameez",
            price: "PKR 10,500"
        },
    ];
    return (React.createElement("section", { className: "py-8 px-4 md:px-8 bg-white max-w-7xl mx-auto" },
        React.createElement("h2", { className: "text-3xl font-bold mb-6 text-center md:text-left" }, "Unique Men's Collection"),
        React.createElement("div", { className: "flex items-center justify-between mb-6 overflow-x-auto pb-3 scrollbar-hide" },
            React.createElement("div", { className: "flex gap-3 whitespace-nowrap" },
                React.createElement("button", { className: "bg-green-800 text-white px-6 py-2 rounded-full text-sm font-medium" }, "New Arrival"),
                React.createElement("button", { className: "hover:bg-gray-100 px-6 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-300" }, "Sale"),
                React.createElement("button", { className: "hover:bg-gray-100 px-6 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-300" }, "Shalwar Kameez"),
                React.createElement("button", { className: "hover:bg-gray-100 px-6 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-300" }, "Kurtas"),
                React.createElement("button", { className: "hover:bg-gray-100 px-6 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-300" }, "Waist Coats"),
                React.createElement("button", { className: "hover:bg-gray-100 px-6 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-300" }, "2-Piece Suits"),
                React.createElement("button", { className: "hover:bg-gray-100 px-6 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-300" }, "Shawls")),
            React.createElement("button", { className: "hidden md:block bg-white border border-gray-300 hover:bg-gray-100 px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap" }, "View All")),
        React.createElement("div", { className: "relative" },
            React.createElement(react_1.Swiper, { modules: [modules_1.Navigation], navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }, spaceBetween: 20, slidesPerView: 1.2, breakpoints: {
                    640: { slidesPerView: 2.2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4.2 }
                }, className: "product-swiper" }, products.map(function (product) { return (React.createElement(react_1.SwiperSlide, { key: product.id },
                React.createElement("div", { className: "group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all" },
                    React.createElement("div", { className: "relative h-[380px] md:h-[420px] w-full" },
                        React.createElement(image_1["default"], { src: product.image, alt: product.title, fill: true, className: "object-cover", sizes: "(max-width: 768px) 100vw, 25vw" }),
                        product.badge === "Sale" && (React.createElement("div", { className: "absolute top-4 right-4 bg-white text-black text-xs font-bold px-5 py-1 rounded-full shadow-md" }, "Sale")),
                        product.badge === "New" && (React.createElement("div", { className: "absolute bottom-4 left-4 bg-new text-black text-xs font-bold px-4 py-1 rounded shadow-md" }, "New Arrival"))),
                    React.createElement("div", { className: "p-4" },
                        React.createElement("p", { className: "text-sm text-gray-900 line-clamp-2 font-medium" }, product.title),
                        React.createElement("div", { className: "flex items-center gap-2 mt-1" },
                            React.createElement("p", { className: "text-lg font-semibold text-[#184335]" }, product.price),
                            product.oldPrice && (React.createElement("p", { className: "text-sm text-gray-500 line-through" }, product.oldPrice))))))); })),
            React.createElement("button", { className: "swiper-button-prev absolute -left-2 md:-left-3 top-1/2 -translate-y-1/2 z-10 \r\n  bg-white w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center \r\n  hover:shadow-md transition-all" },
                React.createElement(fa6_1.FaChevronLeft, { size: 10, color: "black" })),
            React.createElement("button", { className: "swiper-button-next absolute -right-2 md:-right-3 top-1/2 -translate-y-1/2 z-10 \r\n  bg-white w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center \r\n  hover:shadow-md transition-all" },
                React.createElement(fa6_1.FaChevronRight, { size: 10, color: "black" })))));
}
exports["default"] = SwiperCmp;
