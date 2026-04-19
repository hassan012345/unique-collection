"use client";

import { useState } from "react";
import DeliveryForm from "@/components/DeliveryForm";
import ShippingMethod, {
  type ShippingOption,
} from "@/components/ShippingMethod";
import PaymentOptions, { type PaymentData } from "@/components/PaymentOptions";
import OrderSummary, { type CartItem } from "@/components/OrderSummary";
import { useCartStore } from "@/store/cartStore";
import Breadcrumb from "@/components/BreadCrumb";

const NM = "var(--font-neue-montreal)";

/* ── Shipping options ───────────────────────────────────────────── */
const SHIPPING_OPTIONS: ShippingOption[] = [
  { id: "standard", label: "Shipping Charges", price: 300 },
];

export default function CheckoutPage() {
  const storeItems = useCartStore((s) => s.items);
  const updateQty = useCartStore((s) => s.updateQty);
  const removeItem = useCartStore((s) => s.removeItem);

  const [cartItems, setCartItems] = useState<CartItem[]>(
    storeItems.map((i) => ({
      id: `${i.productId}-${i.color.id}-${i.size}`,
      name: i.name,
      variant: `${i.color.name} / ${i.size}`,
      price: i.price,
      qty: i.qty,
      image: i.image,
    })),
  );

  const [delivery, setDelivery] = useState({
    email: "",
    country: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
  });

  const [shipping, setShipping] = useState("standard");

  const [payment, setPayment] = useState<PaymentData>({
    cardNumber: "",
    expiry: "",
    cvv: "",
    nameOnCard: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // ── Derived values ───────────────────────────────────────────────
  const shippingOption = SHIPPING_OPTIONS.find((o) => o.id === shipping);
  const shippingCost = shippingOption?.price ?? 300;
  const subtotal = cartItems.reduce((s, i) => s + i.price * i.qty, 0);
  const total = subtotal + shippingCost;

  // ── Cart handlers ────────────────────────────────────────────────
  function handleQtyChange(id: string, qty: number) {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty } : item)),
    );
  }

  function handleRemove(id: string) {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  // ── Validation ───────────────────────────────────────────────────
  function validate(): boolean {
    const errs: Record<string, string> = {};
    if (!delivery.email) errs.email = "Email is required";
    if (!delivery.firstName) errs.firstName = "First name is required";
    if (!delivery.lastName) errs.lastName = "Last name is required";
    if (!delivery.address) errs.address = "Address is required";
    if (!delivery.city) errs.city = "City is required";
    if (!delivery.phone) errs.phone = "Phone number is required";
    if (!payment.cardNumber) errs.cardNumber = "Card number is required";
    if (!payment.expiry) errs.expiry = "Expiry date is required";
    if (!payment.cvv) errs.cvv = "CVV is required";
    if (!payment.nameOnCard) errs.nameOnCard = "Name on card is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function handlePayNow() {
    if (!validate()) return;
    // TODO: call your payment API here
    console.log("Proceeding to payment:", {
      delivery,
      shipping,
      payment,
      cartItems,
    });
    alert("Order placed! (wire up your payment API here)");
  }

  // ── Render ───────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Cart", href: "/cart" },
          { label: "Checkout", href: "/checkout" },
        ]}
      />

      <div className="px-6 py-5 md:px-20 md:py-8">
        <div
          className="lg:hidden sticky top-0 z-30 bg-[#F5F5F5] border-b border-[#E5E5E5] px-5 py-3
        flex items-center justify-between"
        >
          <p
            className="text-[15px] font-semibold text-[#171717] bg-[#F5F5F5]"
            style={{ fontFamily: NM }}
          >
            Total
          </p>
          <div className="flex flex-col items-center">
            <p
              className="text-[15px] font-semibold text-[#184335]"
              style={{ fontFamily: NM }}
            >
              Rs {total.toLocaleString()}
            </p>
            <button
              className="text-[13px] text-[#184335] underline underline-offset-2"
              style={{ fontFamily: NM }}
            >
              Edit Summary
            </button>
          </div>
        </div>
      </div>

      {/* ── Page body ── */}
      <div className="max-w-[1440px] mx-auto px-5 lg:px-20 py-8 lg:py-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* ── LEFT COLUMN: Shipping Details ── */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <DeliveryForm
              data={delivery}
              onChange={(field, value) =>
                setDelivery((prev) => ({ ...prev, [field]: value }))
              }
              errors={errors}
            />

            <div className="h-px bg-[#E5E5E5]" />

            <ShippingMethod
              options={SHIPPING_OPTIONS}
              selected={shipping}
              onChange={setShipping}
            />

            <div className="h-px bg-[#E5E5E5]" />

            <PaymentOptions
              data={payment}
              onChange={(field, value) =>
                setPayment((prev) => ({ ...prev, [field]: value }))
              }
              errors={errors}
            />
          </div>

          {/* ── RIGHT COLUMN: Order Summary ── */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-6">
            <OrderSummary
              items={cartItems}
              shippingCost={shippingCost}
              onItemQtyChange={handleQtyChange}
              onItemRemove={handleRemove}
              onPayNow={handlePayNow}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
