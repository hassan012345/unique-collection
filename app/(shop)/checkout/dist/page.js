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
exports.__esModule = true;
var react_1 = require("react");
var DeliveryForm_1 = require("@/components/DeliveryForm");
var ShippingMethod_1 = require("@/components/ShippingMethod");
var PaymentOptions_1 = require("@/components/PaymentOptions");
var OrderSummary_1 = require("@/components/OrderSummary");
var cartStore_1 = require("@/store/cartStore");
var BreadCrumb_1 = require("@/components/BreadCrumb");
var NM = "var(--font-neue-montreal)";
/* ── Shipping options ───────────────────────────────────────────── */
var SHIPPING_OPTIONS = [
    { id: "standard", label: "Shipping Charges", price: 300 },
];
function CheckoutPage() {
    var _a;
    var storeItems = cartStore_1.useCartStore(function (s) { return s.items; });
    var updateQty = cartStore_1.useCartStore(function (s) { return s.updateQty; });
    var removeItem = cartStore_1.useCartStore(function (s) { return s.removeItem; });
    var _b = react_1.useState(storeItems.map(function (i) { return ({
        id: i.productId + "-" + i.color.id + "-" + i.size,
        name: i.name,
        variant: i.color.name + " / " + i.size,
        price: i.price,
        qty: i.qty,
        image: i.image
    }); })), cartItems = _b[0], setCartItems = _b[1];
    var _c = react_1.useState({
        email: "",
        country: "",
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        postalCode: "",
        phone: ""
    }), delivery = _c[0], setDelivery = _c[1];
    var _d = react_1.useState("standard"), shipping = _d[0], setShipping = _d[1];
    var _e = react_1.useState({
        cardNumber: "",
        expiry: "",
        cvv: "",
        nameOnCard: ""
    }), payment = _e[0], setPayment = _e[1];
    var _f = react_1.useState({}), errors = _f[0], setErrors = _f[1];
    // ── Derived values ───────────────────────────────────────────────
    var shippingOption = SHIPPING_OPTIONS.find(function (o) { return o.id === shipping; });
    var shippingCost = (_a = shippingOption === null || shippingOption === void 0 ? void 0 : shippingOption.price) !== null && _a !== void 0 ? _a : 300;
    var subtotal = cartItems.reduce(function (s, i) { return s + i.price * i.qty; }, 0);
    var total = subtotal + shippingCost;
    // ── Cart handlers ────────────────────────────────────────────────
    function handleQtyChange(id, qty) {
        setCartItems(function (prev) {
            return prev.map(function (item) { return (item.id === id ? __assign(__assign({}, item), { qty: qty }) : item); });
        });
    }
    function handleRemove(id) {
        setCartItems(function (prev) { return prev.filter(function (item) { return item.id !== id; }); });
    }
    // ── Validation ───────────────────────────────────────────────────
    function validate() {
        var errs = {};
        if (!delivery.email)
            errs.email = "Email is required";
        if (!delivery.firstName)
            errs.firstName = "First name is required";
        if (!delivery.lastName)
            errs.lastName = "Last name is required";
        if (!delivery.address)
            errs.address = "Address is required";
        if (!delivery.city)
            errs.city = "City is required";
        if (!delivery.phone)
            errs.phone = "Phone number is required";
        if (!payment.cardNumber)
            errs.cardNumber = "Card number is required";
        if (!payment.expiry)
            errs.expiry = "Expiry date is required";
        if (!payment.cvv)
            errs.cvv = "CVV is required";
        if (!payment.nameOnCard)
            errs.nameOnCard = "Name on card is required";
        setErrors(errs);
        return Object.keys(errs).length === 0;
    }
    function handlePayNow() {
        if (!validate())
            return;
        // TODO: call your payment API here
        console.log("Proceeding to payment:", {
            delivery: delivery,
            shipping: shipping,
            payment: payment,
            cartItems: cartItems
        });
        alert("Order placed! (wire up your payment API here)");
    }
    // ── Render ───────────────────────────────────────────────────────
    return (React.createElement("div", { className: "min-h-screen bg-white" },
        React.createElement(BreadCrumb_1["default"], { items: [
                { label: "Home", href: "/" },
                { label: "Cart", href: "/cart" },
                { label: "Checkout", href: "/checkout" },
            ] }),
        React.createElement("div", { className: "px-6 py-5 md:px-20 md:py-8" },
            React.createElement("div", { className: "lg:hidden sticky top-0 z-30 bg-[#F5F5F5] border-b border-[#E5E5E5] px-5 py-3\n        flex items-center justify-between" },
                React.createElement("p", { className: "text-[15px] font-semibold text-[#171717] bg-[#F5F5F5]", style: { fontFamily: NM } }, "Total"),
                React.createElement("div", { className: "flex flex-col items-center" },
                    React.createElement("p", { className: "text-[15px] font-semibold text-[#184335]", style: { fontFamily: NM } },
                        "Rs ",
                        total.toLocaleString()),
                    React.createElement("button", { className: "text-[13px] text-[#184335] underline underline-offset-2", style: { fontFamily: NM } }, "Edit Summary")))),
        React.createElement("div", { className: "max-w-[1440px] mx-auto px-5 lg:px-20 py-8 lg:py-10" },
            React.createElement("div", { className: "flex flex-col lg:flex-row gap-8 lg:gap-12 items-start" },
                React.createElement("div", { className: "w-full lg:w-1/2 flex flex-col gap-8" },
                    React.createElement(DeliveryForm_1["default"], { data: delivery, onChange: function (field, value) {
                            return setDelivery(function (prev) {
                                var _a;
                                return (__assign(__assign({}, prev), (_a = {}, _a[field] = value, _a)));
                            });
                        }, errors: errors }),
                    React.createElement("div", { className: "h-px bg-[#E5E5E5]" }),
                    React.createElement(ShippingMethod_1["default"], { options: SHIPPING_OPTIONS, selected: shipping, onChange: setShipping }),
                    React.createElement("div", { className: "h-px bg-[#E5E5E5]" }),
                    React.createElement(PaymentOptions_1["default"], { data: payment, onChange: function (field, value) {
                            return setPayment(function (prev) {
                                var _a;
                                return (__assign(__assign({}, prev), (_a = {}, _a[field] = value, _a)));
                            });
                        }, errors: errors })),
                React.createElement("div", { className: "w-full lg:w-1/2 lg:sticky lg:top-6" },
                    React.createElement(OrderSummary_1["default"], { items: cartItems, shippingCost: shippingCost, onItemQtyChange: handleQtyChange, onItemRemove: handleRemove, onPayNow: handlePayNow }))))));
}
exports["default"] = CheckoutPage;
