"use client";
import Link from "next/link";
import { useState } from "react";
import { FaUser, FaSearch, FaShoppingCart } from "react-icons/fa";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="text-white fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-800">
          Unique Collection
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link href="/shop">Shop</Link>
          <Link href="/custom-tailoring">Custom Tailoring</Link>
          <Link href="/collections">Collections</Link>
          <Link href="/about">About</Link>
          <Link href="/support">Support</Link>
        </nav>
        <div className="flex items-center space-x-4 text-gray-600">
          <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <FaSearch />
          </button>
          <Link href="/account">
            <FaUser />
          </Link>
          <Link href="/cart">
            <FaShoppingCart />
          </Link>
        </div>
      </div>

      {/* Search bar */}
      {isSearchOpen && (
        <div className="bg-gray-100 px-4 py-2">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
      )}
    </header>
  );
}
