"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FaUser,
  FaSearch,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

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
        <nav className="hidden md:flex space-x-6 font-small">
          <Link href="/sale" className="flex items-center">
            <span>Sale</span>
            <FaAngleDown />
          </Link>

          <Link href="/men" className="flex items-center">
            <span>Men</span>
            <FaAngleDown />
          </Link>

          <Link href="/women" className="flex items-center">
            <span>Women</span>
            <FaAngleDown />
          </Link>
          <Link href="/custom-tailoring">Custom Tailoring</Link>
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
          <button
            onClick={toggleMenu}
            className="md:hidden transition-transform"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Dropdown Menu (Mobile) */}
      {isOpen && (
        <nav className="md:hidden fixed inset-0 top-[83px] bg-green-900 text-white z-40 overflow-y-auto px-6 py-8">
          {/* Men's Collection Section */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-6 tracking-wide">
              Men&apos;s Collection
            </h3>
            <div className="flex flex-col gap-5 text-lg font-medium">
              <Link
                href="/new-arrival"
                onClick={toggleMenu}
                className="hover:text-green-300 transition"
              >
                New Arrival
              </Link>
              <Link
                href="/sale"
                onClick={toggleMenu}
                className="hover:text-green-300 transition"
              >
                Sale
              </Link>
              <Link
                href="/unstitched"
                onClick={toggleMenu}
                className="hover:text-green-300 transition"
              >
                Unstitched
              </Link>
              <Link
                href="/shalwaar-kameez"
                onClick={toggleMenu}
                className="hover:text-green-300 transition"
              >
                Shalwaar Kameez
              </Link>
              <Link
                href="/kurtas"
                onClick={toggleMenu}
                className="hover:text-green-300 transition"
              >
                Kurtas
              </Link>
              <Link
                href="/waist-coats"
                onClick={toggleMenu}
                className="hover:text-green-300 transition"
              >
                Waist Coats
              </Link>
              <Link
                href="/3-piece-suits"
                onClick={toggleMenu}
                className="hover:text-green-300 transition"
              >
                3-Piece Suits
              </Link>
              <Link
                href="/blazers"
                onClick={toggleMenu}
                className="hover:text-green-300 transition"
              >
                Blazers
              </Link>
            </div>
          </div>

          {/* Women's Collection Section */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-6 tracking-wide">
              Women&apos;s Collection
            </h3>
            <div className="flex flex-col gap-5 text-lg font-medium">
              <Link
                href="/new-arrival-women"
                onClick={toggleMenu}
                className="hover:text-green-300 transition"
              >
                New Arrival
              </Link>
              <Link
                href="/sale-women"
                onClick={toggleMenu}
                className="hover:text-green-300 transition"
              >
                Sale
              </Link>
              <Link
                href="/unstitched-women"
                onClick={toggleMenu}
                className="hover:text-green-300 transition"
              >
                Unstitched
              </Link>
              <Link
                href="/shalwaar-kameez-women"
                onClick={toggleMenu}
                className="hover:text-green-300 transition"
              >
                Shalwaar Kameez
              </Link>
              <Link
                href="/kurtas-women"
                onClick={toggleMenu}
                className="hover:text-green-300 transition"
              >
                Kurtas
              </Link>
            </div>
          </div>

          {/* Account - Pushed to bottom exactly like image */}
          <div className="mt-auto pt-10 border-t border-white/20">
            <Link
              href="/account"
              onClick={toggleMenu}
              className="block text-xl font-medium hover:text-green-300 transition"
            >
              Account
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
