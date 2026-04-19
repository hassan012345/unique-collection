"use strict";
exports.__esModule = true;
var TopToast_1 = require("@/components/TopToast");
var Navbar_1 = require("@/components/Navbar");
var HeroSection_1 = require("@/components/HeroSection");
var GenderCategories_1 = require("@/components/GenderCategories");
var ClothesSelection_1 = require("@/components/ClothesSelection");
var CTAMiddle_1 = require("@/components/CTAMiddle");
var WhyChoose_1 = require("@/components/WhyChoose");
var Footer_1 = require("@/components/Footer");
function Home() {
    return (React.createElement("main", { className: "min-h-screen flex flex-col" },
        React.createElement(TopToast_1["default"], null),
        React.createElement(Navbar_1["default"], null),
        React.createElement(HeroSection_1["default"], null),
        React.createElement(GenderCategories_1["default"], null),
        React.createElement(ClothesSelection_1.MensCollection, null),
        React.createElement(CTAMiddle_1["default"], null),
        React.createElement(ClothesSelection_1.WomensCollection, null),
        React.createElement(WhyChoose_1["default"], null),
        React.createElement(Footer_1["default"], null)));
}
exports["default"] = Home;
