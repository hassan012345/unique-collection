"use client";
"use strict";
exports.__esModule = true;
/**
 * components/checkout/PaymentOptions.tsx
 *
 * Figma specs:
 *   Heading:      "Payment Options" 16px semibold
 *   Payment icons: Apple Pay, Mastercard, Visa — right of heading row
 *   Fields:
 *     Card Number           (full width)
 *     Expiration Date MM/YY | Security Code (CVV)  (two cols)
 *     Name on Card          (full width)
 */
var CheckoutInput_1 = require("@/components/CheckoutInput");
var NM = "var(--font-neue-montreal)";
/* ── Payment brand icons (SVG) ──────────────────────────────────── */
function ApplePayIcon() {
    return (React.createElement("svg", { width: "34", height: "20", viewBox: "0 0 34 20", fill: "none" },
        React.createElement("rect", { width: "34", height: "20", rx: "3", fill: "#000" }),
        React.createElement("path", { d: "M11.5 7c.4-.5.7-1.1.6-1.7-.6 0-1.3.4-1.7.9-.4.4-.7 1.1-.6 1.7.6 0 1.3-.4 1.7-.9z", fill: "white" }),
        React.createElement("path", { d: "M12.1 7.9c-.9-.1-1.7.5-2.1.5-.5 0-1.2-.5-2-.5C7 7.9 5.9 8.5 5.4 9.5c-1 1.9-.3 4.7.7 6.3.5.7 1.1 1.5 1.9 1.5.7 0 1-.5 1.9-.5s1.2.5 2 .5c.8 0 1.3-.8 1.8-1.5.6-.8.8-1.6.8-1.6s-1.5-.6-1.5-2.2c0-1.4 1.1-2 1.2-2.1-.7-1-1.7-1-2.1-1z", fill: "white" }),
        React.createElement("path", { d: "M19 6.5h-2.6v10h1.1V13h1.5c1.4 0 2.4-1 2.4-2.3S20.4 6.5 19 6.5zm.1 5.4H17.5V7.5H19c.9 0 1.4.6 1.4 1.7s-.5 1.7-1.4 1.7zm6.6-2.2c-.8 0-1.5.4-1.8 1v-1h-1v7h1v-2.5c.3.6 1 1 1.8 1 1.4 0 2.4-1.1 2.4-2.7s-1-2.8-2.4-2.8zm-.2 4.6c-.8 0-1.4-.7-1.4-1.8s.6-1.8 1.4-1.8 1.4.7 1.4 1.8-.6 1.8-1.4 1.8z", fill: "white" })));
}
function MastercardIcon() {
    return (React.createElement("svg", { width: "34", height: "20", viewBox: "0 0 34 20", fill: "none" },
        React.createElement("rect", { width: "34", height: "20", rx: "3", fill: "#EB001B", fillOpacity: ".07" }),
        React.createElement("circle", { cx: "13", cy: "10", r: "6", fill: "#EB001B" }),
        React.createElement("circle", { cx: "21", cy: "10", r: "6", fill: "#F79E1B" }),
        React.createElement("path", { d: "M17 5.6a6 6 0 010 8.8A6 6 0 0117 5.6z", fill: "#FF5F00" })));
}
function VisaIcon() {
    return (React.createElement("svg", { width: "34", height: "20", viewBox: "0 0 34 20", fill: "none" },
        React.createElement("rect", { width: "34", height: "20", rx: "3", fill: "#F5F5F5" }),
        React.createElement("path", { d: "M13.7 13.4l1-6H16l-1 6h-1.3zm8.3-5.9c-.4-.1-1-.3-1.7-.3-1.9 0-3.2 1-3.2 2.4 0 1 1 1.6 1.8 2s1 .6 1 .9c0 .5-.6.7-1.2.7-.8 0-1.3-.1-2-.4l-.3-.1-.3 1.6c.5.2 1.3.4 2.2.4 2.1 0 3.4-1 3.4-2.5 0-.8-.6-1.4-1.8-1.9-.8-.3-1.2-.5-1.2-.9 0-.3.4-.6 1.2-.6.7 0 1.2.1 1.6.3l.2.1.3-1.7zm5.1-.1h-1.5c-.5 0-.8.1-1 .6l-2.8 6.4H24l.5-1.2h2.3l.3 1.2H28l-1-6.3-.9.3zm-2.5 4l.7-2 .4 2h-1.1zM12 7.4l-1.9 4.1-.2-1c-.4-1.2-1.5-2.5-2.8-3.2l1.7 6.1h2.1l3.2-6.1H12z", fill: "#1A1F71" })));
}
/* ── Card number formatter ──────────────────────────────────────── */
function formatCardNumber(v) {
    return v.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
}
function formatExpiry(v) {
    var digits = v.replace(/\D/g, "").slice(0, 4);
    if (digits.length >= 3)
        return digits.slice(0, 2) + "/" + digits.slice(2);
    return digits;
}
function PaymentOptions(_a) {
    var data = _a.data, onChange = _a.onChange, _b = _a.errors, errors = _b === void 0 ? {} : _b;
    return (React.createElement("div", { className: "flex flex-col gap-4" },
        React.createElement("div", { className: "flex items-center justify-between" },
            React.createElement("h2", { className: "text-[16px] font-semibold text-[#171717]", style: { fontFamily: NM } }, "Payment Options"),
            React.createElement("div", { className: "flex items-center gap-1.5" },
                React.createElement(ApplePayIcon, null),
                React.createElement(MastercardIcon, null),
                React.createElement(VisaIcon, null))),
        React.createElement("div", { className: "flex flex-col gap-3" },
            React.createElement(CheckoutInput_1["default"], { placeholder: "Card Number", value: data.cardNumber, inputMode: "numeric", onChange: function (e) { return onChange("cardNumber", formatCardNumber(e.target.value)); }, error: errors.cardNumber }),
            React.createElement("div", { className: "grid grid-cols-2 gap-3" },
                React.createElement(CheckoutInput_1["default"], { placeholder: "Expiration Date (MM/YY)", value: data.expiry, inputMode: "numeric", onChange: function (e) { return onChange("expiry", formatExpiry(e.target.value)); }, error: errors.expiry }),
                React.createElement(CheckoutInput_1["default"], { placeholder: "Security Code (CVV)", type: "password", maxLength: 4, value: data.cvv, inputMode: "numeric", onChange: function (e) { return onChange("cvv", e.target.value.replace(/\D/g, "").slice(0, 4)); }, error: errors.cvv })),
            React.createElement(CheckoutInput_1["default"], { placeholder: "Name on Card", value: data.nameOnCard, onChange: function (e) { return onChange("nameOnCard", e.target.value); }, error: errors.nameOnCard }))));
}
exports["default"] = PaymentOptions;
