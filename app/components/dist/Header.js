"use client";
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var react_1 = require("react");
var fa_1 = require("react-icons/fa");
function Header() {
    var _a = react_1.useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var toggleMenu = function () {
        setIsOpen(!isOpen);
    };
    return (React.createElement("header", { className: "bg-header text-white" },
        React.createElement("div", { className: "max-w-7xl mx-auto px-4 py-3 flex items-center justify-between" },
            React.createElement(link_1["default"], { href: "/", className: "text-md md:text-xl font-bold" }, "Unique Collection"),
            React.createElement("nav", { className: "hidden md:flex space-x-6 font-medium" },
                React.createElement(link_1["default"], { href: "/shop" }, "Shop"),
                React.createElement(link_1["default"], { href: "/custom-tailoring" }, "Custom Tailoring"),
                React.createElement(link_1["default"], { href: "/collections" }, "Collections"),
                React.createElement(link_1["default"], { href: "/about" }, "About"),
                React.createElement(link_1["default"], { href: "/support" }, "Support")),
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
                React.createElement("button", { onClick: toggleMenu, className: "relative z-30" }, isOpen ? React.createElement(fa_1.FaTimes, { size: 20 }) : React.createElement(fa_1.FaBars, { size: 20 })))),
        isOpen && (React.createElement("nav", { className: "md:hidden absolute top-0 left-0 w-full h-screen bg-header flex flex-col items-center justify-center space-y-6 text-lg font-medium z-20" },
            React.createElement(link_1["default"], { href: "/profile", onClick: toggleMenu }, "Profile"),
            React.createElement(link_1["default"], { href: "/sale", onClick: toggleMenu }, "Sale"),
            React.createElement(link_1["default"], { href: "/men", onClick: toggleMenu }, "Men"),
            React.createElement(link_1["default"], { href: "/women", onClick: toggleMenu }, "Women"),
            React.createElement(link_1["default"], { href: "/custom-tailoring", onClick: toggleMenu }, "Custom Tailoring"),
            React.createElement(link_1["default"], { href: "/about", onClick: toggleMenu }, "About"),
            React.createElement(link_1["default"], { href: "/support", onClick: toggleMenu }, "Support")))));
}
exports["default"] = Header;
