"use strict";
exports.__esModule = true;
var react_1 = require("react");
var CustomizedClothing = function () {
    return (react_1["default"].createElement("section", null,
        react_1["default"].createElement("div", { className: "relative w-full h-screen bg-cover bg-center", style: {
                backgroundImage: "url('/Customize.png')"
            } },
            react_1["default"].createElement("div", { className: "max-w-xl text-center mx-auto h-full flex flex-col items-center justify-center px-4" },
                react_1["default"].createElement("p", { className: "text-white text-3xl sm:text-4xl md:text-5xl font-bold" }, "Customize your Unstitched Clothes"),
                react_1["default"].createElement("p", { className: "text-white text-base sm:text-lg md:text-xl mt-4" }, "Buy Unstitched clothes and help us customize them according to your needs"),
                react_1["default"].createElement("button", { className: "mt-6 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base text-white bg-[#245749] rounded-full hover:bg-gray-200 hover:text-[#245749] transition duration-300" }, "Customize Your Clothing")))));
};
exports["default"] = CustomizedClothing;
