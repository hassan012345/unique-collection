"use strict";
exports.__esModule = true;
var Hero_1 = require("./components/Hero");
var Footer_1 = require("./components/Footer");
var Headline_1 = require("./components/Headline");
var BrowseByGender_1 = require("./components/BrowseByGender");
var BestSelling_1 = require("./components/BestSelling");
require("./globals.css");
var MenCollection_1 = require("./components/MenCollection");
var UniqueMenCollection_1 = require("./components/UniqueMenCollection");
var HowItWorks_1 = require("./components/HowItWorks");
var VisualizeAi_1 = require("./components/VisualizeAi");
var LovedByWomen_1 = require("./components/LovedByWomen");
var UniqueWomenCollection_1 = require("./components/UniqueWomenCollection");
function Home() {
    return (React.createElement("div", null,
        React.createElement(Headline_1["default"], null),
        React.createElement(Hero_1["default"], null),
        React.createElement(BrowseByGender_1["default"], null),
        React.createElement(BestSelling_1["default"], null),
        React.createElement(MenCollection_1["default"], null),
        React.createElement(UniqueMenCollection_1["default"], null),
        React.createElement(HowItWorks_1["default"], null),
        React.createElement(VisualizeAi_1["default"], null),
        React.createElement(LovedByWomen_1["default"], null),
        React.createElement(UniqueWomenCollection_1["default"], null),
        React.createElement(Footer_1["default"], null)));
}
exports["default"] = Home;
