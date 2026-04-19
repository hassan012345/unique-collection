"use strict";
exports.__esModule = true;
var TopToast_1 = require("@/components/TopToast");
var Navbar_1 = require("@/components/Navbar");
var BreadCrumb_1 = require("@/components/BreadCrumb");
var Footer_1 = require("@/components/Footer");
function ShopLayout(_a) {
    var children = _a.children;
    return (React.createElement("main", { className: "min-h-screen flex flex-col" },
        React.createElement(TopToast_1["default"], null),
        React.createElement(Navbar_1["default"], null),
        React.createElement("div", { className: "w-full border-b border-[#E5E5E5] max-w-[1440px] mx-auto px-5 lg:px-20 py-3" },
            React.createElement("div", { className: "" },
                React.createElement(BreadCrumb_1["default"], null))),
        React.createElement("div", { className: "flex-1" }, children),
        React.createElement(Footer_1["default"], null)));
}
exports["default"] = ShopLayout;
