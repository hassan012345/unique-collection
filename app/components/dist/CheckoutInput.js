"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
/**
 * components/checkout/CheckoutInput.tsx
 *
 * Figma specs:
 *   Height:        48px
 *   Border:        1px solid #E5E5E5
 *   Border-radius: 8px
 *   Padding:       0 16px
 *   Placeholder:   Neue Montreal Regular 14px #A1A1A1
 *   Value text:    Neue Montreal Regular 14px #171717
 *   Focus border:  #184335
 *   Background:    white
 */
var react_1 = require("react");
var NM = "var(--font-neue-montreal)";
var CheckoutInput = react_1.forwardRef(function (_a, ref) {
    var label = _a.label, error = _a.error, _b = _a.className, className = _b === void 0 ? "" : _b, props = __rest(_a, ["label", "error", "className"]);
    return (React.createElement("div", { className: "flex flex-col gap-1.5 w-full" },
        label && (React.createElement("label", { className: "text-[13px] font-medium text-[#171717]", style: { fontFamily: NM } }, label)),
        React.createElement("input", __assign({ ref: ref, className: "w-full h-12 px-4 rounded-lg border text-[14px] text-[#171717] bg-[#F9FAFB]\n            outline-none transition-colors placeholder:text-[#A1A1A1]\n            focus:border-[#184335] hover:border-[#D4D4D4] " + className, style: {
                fontFamily: NM,
                fontWeight: 400,
                borderColor: error ? "#C0392B" : "#E5E5E5"
            } }, props)),
        error && (React.createElement("p", { className: "text-[12px] text-[#C0392B]", style: { fontFamily: NM } }, error))));
});
CheckoutInput.displayName = "CheckoutInput";
exports["default"] = CheckoutInput;
