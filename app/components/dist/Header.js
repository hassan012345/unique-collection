"use client";
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var react_1 = require("react");
var fa_1 = require("react-icons/fa");
var fa_2 = require("react-icons/fa");
function Header() {
    var _a = react_1.useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var toggleMenu = function () {
        setIsOpen(!isOpen);
    };
    return (React.createElement("header", { className: "bg-header text-white" },
        React.createElement("div", { className: "max-w-7xl mx-auto px-4 py-3 flex items-center justify-between" },
            React.createElement(link_1["default"], { href: "/", className: "text-md md:text-xl font-bold" }, "Unique Collection"),
            React.createElement("nav", { className: "hidden md:flex space-x-6 font-small" },
                React.createElement(link_1["default"], { href: "/sale", className: "flex items-center" },
                    React.createElement("span", null, "Sale"),
                    React.createElement(fa_2.FaAngleDown, null)),
                React.createElement(link_1["default"], { href: "/men", className: "flex items-center" },
                    React.createElement("span", null, "Men"),
                    React.createElement(fa_2.FaAngleDown, null)),
                React.createElement(link_1["default"], { href: "/women", className: "flex items-center" },
                    React.createElement("span", null, "Women"),
                    React.createElement(fa_2.FaAngleDown, null)),
                React.createElement(link_1["default"], { href: "/custom-tailoring" }, "Custom Tailoring")),
            React.createElement("div", { className: "hidden md:flex items-center space-x-4" },
                React.createElement("button", null,
                    React.createElement(fa_1.FaSearch, null)),
                React.createElement(link_1["default"], { href: "/account" },
                    React.createElement(fa_1.FaUser, null)),
                React.createElement(link_1["default"], { href: "/cart" },
                    React.createElement(fa_1.FaShoppingCart, null))),
            React.createElement("div", { className: "md:hidden flex items-center space-x-2" },
                React.createElement("button", null,
                    React.createElement(fa_1.FaSearch, null)),
                React.createElement(link_1["default"], { href: "/cart" },
                    React.createElement(fa_1.FaShoppingCart, null)),
                React.createElement("button", { onClick: toggleMenu, className: "md:hidden transition-transform", "aria-label": "Toggle menu" }, isOpen ? React.createElement(fa_1.FaTimes, null) : React.createElement(fa_1.FaBars, null)))),
        isOpen && (React.createElement("nav", { className: "md:hidden fixed inset-0 top-[83px] bg-green-900 text-white z-40 overflow-y-auto px-6 py-8" },
            React.createElement("div", { className: "mb-10" },
                React.createElement("h3", { className: "text-2xl font-bold mb-6 tracking-wide" }, "Men's Collection"),
                React.createElement("div", { className: "flex flex-col gap-5 text-lg font-medium" },
                    React.createElement(link_1["default"], { href: "/new-arrival", onClick: toggleMenu, className: "hover:text-green-300 transition" }, "New Arrival"),
                    React.createElement(link_1["default"], { href: "/sale", onClick: toggleMenu, className: "hover:text-green-300 transition" }, "Sale"),
                    React.createElement(link_1["default"], { href: "/unstitched", onClick: toggleMenu, className: "hover:text-green-300 transition" }, "Unstitched"),
                    React.createElement(link_1["default"], { href: "/shalwaar-kameez", onClick: toggleMenu, className: "hover:text-green-300 transition" }, "Shalwaar Kameez"),
                    React.createElement(link_1["default"], { href: "/kurtas", onClick: toggleMenu, className: "hover:text-green-300 transition" }, "Kurtas"),
                    React.createElement(link_1["default"], { href: "/waist-coats", onClick: toggleMenu, className: "hover:text-green-300 transition" }, "Waist Coats"),
                    React.createElement(link_1["default"], { href: "/3-piece-suits", onClick: toggleMenu, className: "hover:text-green-300 transition" }, "3-Piece Suits"),
                    React.createElement(link_1["default"], { href: "/blazers", onClick: toggleMenu, className: "hover:text-green-300 transition" }, "Blazers"))),
            React.createElement("div", { className: "mb-10" },
                React.createElement("h3", { className: "text-2xl font-bold mb-6 tracking-wide" }, "Women's Collection"),
                React.createElement("div", { className: "flex flex-col gap-5 text-lg font-medium" },
                    React.createElement(link_1["default"], { href: "/new-arrival-women", onClick: toggleMenu, className: "hover:text-green-300 transition" }, "New Arrival"),
                    React.createElement(link_1["default"], { href: "/sale-women", onClick: toggleMenu, className: "hover:text-green-300 transition" }, "Sale"),
                    React.createElement(link_1["default"], { href: "/unstitched-women", onClick: toggleMenu, className: "hover:text-green-300 transition" }, "Unstitched"),
                    React.createElement(link_1["default"], { href: "/shalwaar-kameez-women", onClick: toggleMenu, className: "hover:text-green-300 transition" }, "Shalwaar Kameez"),
                    React.createElement(link_1["default"], { href: "/kurtas-women", onClick: toggleMenu, className: "hover:text-green-300 transition" }, "Kurtas"))),
            React.createElement("div", { className: "mt-auto pt-10 border-t border-white/20" },
                React.createElement(link_1["default"], { href: "/account", onClick: toggleMenu, className: "block text-xl font-medium hover:text-green-300 transition" }, "Account"))))));
}
exports["default"] = Header;
