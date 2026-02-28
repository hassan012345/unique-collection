import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import Header from "./Header";

const HeroSection = () => {
  return (
    <div>
      <Header />
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-background.png')",
        }}
      >
        {/* Overlay for better text readability if needed */}
        <div className="absolute inset-0 bg-black/10"></div>
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-4 md:px-8 max-w-lg text-white space-y-4 md:space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif leading-tight tracking-tight">
            Premium Men&apos;
            <br />
            Wear - Ready-Made
            <br />& Custom Stitched
          </h1>
          <p className="text-base md:text-lg">``
            Designed with your comfort in mind and styled to boost your
            confidence. This piece is perfect for any occasion.
          </p>
          <div className="flex flex-col w-full sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-[#1B4B3A] text-white px-6 py-3 rounded-full font-medium text-base hover:bg-[#163a2d] transition">
              Start Custom Stitching
            </button>
            <button className="bg-white text-[#1B4B3A] px-6 py-3 rounded-full font-medium text-base hover:bg-gray-100 transition">
              Shop Ready-Made
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
