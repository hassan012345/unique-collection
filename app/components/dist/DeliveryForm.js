"use client";
"use strict";
exports.__esModule = true;
var CheckoutInput_1 = require("@/components/CheckoutInput");
var link_1 = require("next/link");
var NM = "var(--font-neue-montreal)";
// Country selector styled like a CheckoutInput
function CountrySelect(_a) {
    var value = _a.value, onChange = _a.onChange;
    var countries = [
        "Pakistan", "Afghanistan", "Bangladesh", "India",
        "United Arab Emirates", "Saudi Arabia", "United Kingdom",
        "United States", "Canada", "Australia",
    ];
    return (React.createElement("div", { className: "relative w-full" },
        React.createElement("select", { value: value, onChange: function (e) { return onChange(e.target.value); }, className: "w-full h-12 px-4 rounded-lg border border-[#E5E5E5] text-[14px] text-[#171717]\n          bg-[#F9FAFB] outline-none transition-colors appearance-none cursor-pointer\n          hover:border-[#D4D4D4] focus:border-[#184335]", style: { fontFamily: NM, fontWeight: 400 } }, countries.map(function (c) { return (React.createElement("option", { key: c, value: c }, c)); })),
        React.createElement("svg", { className: "absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none", width: "14", height: "14", viewBox: "0 0 14 14", fill: "none" },
            React.createElement("path", { d: "M3.5 5.25l3.5 3.5 3.5-3.5", stroke: "#525252", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" }))));
}
function DeliveryForm(_a) {
    var data = _a.data, onChange = _a.onChange, _b = _a.errors, errors = _b === void 0 ? {} : _b;
    return (React.createElement("div", { className: "flex flex-col gap-5" },
        React.createElement("div", { className: "flex items-center justify-between" },
            React.createElement("h2", { className: "", style: { fontFamily: NM } }, "Delivery Information"),
            React.createElement("p", { className: "text-[13px] text-green-500", style: { fontFamily: NM, fontWeight: 400 } },
                "Already have an account?",
                " ",
                React.createElement(link_1["default"], { href: "/login", className: "text-[#184335] font-medium underline hover:underline underline-offset-2" }, "Login"))),
        React.createElement("div", { className: "flex flex-col gap-3" },
            React.createElement(CheckoutInput_1["default"], { placeholder: "Email address", type: "email", value: data.email, onChange: function (e) { return onChange("email", e.target.value); }, error: errors.email }),
            React.createElement(CheckoutInput_1["default"], { placeholder: "Country", type: "text", value: data.country, onChange: function (e) { return onChange("country", e.target.value); }, error: errors.country }),
            React.createElement("div", { className: "grid grid-cols-2 gap-3" },
                React.createElement(CheckoutInput_1["default"], { placeholder: "First Name", value: data.firstName, onChange: function (e) { return onChange("firstName", e.target.value); }, error: errors.firstName }),
                React.createElement(CheckoutInput_1["default"], { placeholder: "Last Name", value: data.lastName, onChange: function (e) { return onChange("lastName", e.target.value); }, error: errors.lastName })),
            React.createElement(CheckoutInput_1["default"], { placeholder: "Address", value: data.address, onChange: function (e) { return onChange("address", e.target.value); }, error: errors.address }),
            React.createElement("div", { className: "grid grid-cols-2 gap-3" },
                React.createElement(CheckoutInput_1["default"], { placeholder: "City", value: data.city, onChange: function (e) { return onChange("city", e.target.value); }, error: errors.city }),
                React.createElement(CheckoutInput_1["default"], { placeholder: "Postal Code (Optional)", value: data.postalCode, onChange: function (e) { return onChange("postalCode", e.target.value); } })),
            React.createElement(CheckoutInput_1["default"], { placeholder: "Phone Number", type: "tel", value: data.phone, onChange: function (e) { return onChange("phone", e.target.value); }, error: errors.phone }))));
}
exports["default"] = DeliveryForm;
