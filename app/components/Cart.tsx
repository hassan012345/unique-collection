"use client";

import Image from "next/image";
import Link from "next/link";
import CartItem from "./CartItem";
import { useState } from "react";

export default function CartDrawer({ isOpen, onClose }: any) {
  const items = [
    {
      id: 1,
      name: "Classic White Shalwar Kameez",
      variant: "Red / S",
      price: 4500,
      qty: 2,
      image: "/p1.jpg",
    },
    {
      id: 2,
      name: "Brown Banarsi Saree",
      variant: "Brown / XL",
      price: 6500,
      qty: 1,
      image: "/p2.jpg",
    },
    {
      id: 3,
      name: "Shalwar White New",
      variant: "Purple / L",
      price: 1500,
      qty: 1,
      image: "/p3.jpg",
    },
  ];

  const subtotal = items.reduce((acc, i) => acc + i.price * i.qty, 0);

  return (
    <div
      className={`fixed inset-0 z-50 ${isOpen ? "" : "pointer-events-none"}`}
    >
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/40 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Drawer */}
      <div
        className={`absolute right-0 top-0 h-full w-full sm:w-[400px] bg-white shadow-xl transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h2 className="text-[16px] font-medium">
            Your Cart <span className="text-gray-500">(2 items)</span>
          </h2>
          <button onClick={onClose} className="text-xl">
            ×
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5">
          {items.map((item) => (
            <CartItem key={item.id} 
              id={item.id.toString()}
              name={item.name}
              variant={item.variant}
              price={item.price}
              image={item.image}
              quantity={item.qty}
              onIncrease={() => {}}
              onDecrease={() => {}}
              onRemove={() => {}}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="border-t px-5 py-4 space-y-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">SUBTOTAL</span>
            <span className="font-medium">Rs {subtotal.toLocaleString()}</span>
          </div>
          <Link href={"/checkout"}>
            <button className="w-full bg-[#1f5c4c] text-white py-3 rounded-full text-sm">
              Proceed to Checkout →
            </button>
          </Link>
          <p className="text-[11px] text-gray-400 text-center">
            Tax included & Shipping costs will be calculated on the checkout
          </p>
        </div>
      </div>
    </div>
  );
}
