"use strict";
exports.__esModule = true;
var Hero_1 = require("./components/Hero");
var Footer_1 = require("./components/Footer");
var Headline_1 = require("./components/Headline");
var BrowseByGender_1 = require("./components/BrowseByGender");
require("./globals.css");
var UniqueMenCollection_1 = require("./components/UniqueMenCollection");
var UniqueWomenCollection_1 = require("./components/UniqueWomenCollection");
var CustomizedClothing_1 = require("./components/CustomizedClothing");
var WhyChooseUs_1 = require("./components/WhyChooseUs");
function Home() {
    return (React.createElement("div", null,
        React.createElement(Headline_1["default"], null),
        React.createElement(Hero_1["default"], null),
        React.createElement(BrowseByGender_1["default"], null),
        React.createElement(UniqueMenCollection_1["default"], null),
        React.createElement(CustomizedClothing_1["default"], null),
        React.createElement(UniqueWomenCollection_1["default"], null),
        React.createElement(WhyChooseUs_1["default"], null),
        React.createElement(Footer_1["default"], null)));
}
exports["default"] = Home;
