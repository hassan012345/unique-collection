"use client";
import Link from "next/link";
import { useState } from "react";
import { FaUser, FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-header text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-md md:text-xl font-bold">
          Unique Collection
        </Link>

        {/* Navigation (Desktop) */}
        <nav className="hidden md:flex space-x-6 font-medium">
          <Link href="/shop">Shop</Link>
          <Link href="/custom-tailoring">Custom Tailoring</Link>
          <Link href="/collections">Collections</Link>
          <Link href="/about">About</Link>
          <Link href="/support">Support</Link>
        </nav>

        {/* Icons (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <button>
            <FaSearch />
          </button>
          <Link href="/account">
            <FaUser />
          </Link>
          <Link href="/cart">
            <FaShoppingCart />
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center space-x-2">
          <button>
            <FaSearch />
          </button>
          <Link href="/cart">
            <FaShoppingCart />
          </Link>
          <button onClick={toggleMenu} className="relative z-30">
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Dropdown Menu (Mobile) */}
      {isOpen && (
        <nav className="md:hidden absolute top-0 left-0 w-full h-screen bg-header flex flex-col items-center justify-center space-y-6 text-lg font-medium z-20">
          <Link href="/profile" onClick={toggleMenu}>Profile</Link>
          <Link href="/sale" onClick={toggleMenu}>Sale</Link>
          <Link href="/men" onClick={toggleMenu}>Men</Link>
          <Link href="/women" onClick={toggleMenu}>Women</Link>
          <Link href="/custom-tailoring" onClick={toggleMenu}>Custom Tailoring</Link>
          <Link href="/about" onClick={toggleMenu}>About</Link>
          <Link href="/support" onClick={toggleMenu}>Support</Link>
        </nav>
      )}
    </header>
  );
}