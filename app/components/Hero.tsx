import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";

const HeroSection = () => {
  return (
    <header className="relative">

      {/* Hero Container */}
      <div
        className="relative h-[600px] md:h-vh-100px bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: "url('/hero-background.png')",
        }}
      >
        {/* Overlay for better text readability if needed */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between px-4 md:px-8 py-4 text-white">
          <div className="text-xl md:text-2xl font-bold tracking-wide">
            Unique Collection
          </div>
          <ul className="hidden md:flex space-x-6 text-base">
            <li className="flex items-center">
              Shop <span className="ml-1">
                <FaChevronDown/>
              </span>
            </li> 
            <span>|</span>
            <li className="flex items-center">
              Custom Tailoring <span className="ml-1"><FaChevronDown/></span>
            </li>
            <span>|</span>
            <li className="flex items-center">
              Collections <span className="ml-1"><FaChevronDown/></span>
            </li>
            <span>|</span>
            <li>About</li>
            <span>|</span>
            <li>Support</li>
          </ul>
          <div className="flex items-center space-x-4 text-xl">
            <span>
              <CiUser />
            </span>
            <span>
              <CiSearch />
            </span>
            <span className="relative">
              <CiShoppingCart/> {" "}
              <span className="absolute top-0 right-[-8px] bg-[#1B4B3A] text-white text-xs rounded-full px-1">
                2
              </span>
            </span>
          </div>
          {/* Hamburger for mobile */}
          <div className="md:hidden text-3xl">☰</div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-4 md:px-8 max-w-lg text-white space-y-4 md:space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif leading-tight tracking-tight">
            Premium Men&apos;
            <br />
            Wear - Ready-Made
            <br />& Custom Stitched
          </h1>
          <p className="text-base md:text-lg text-gray-200">
            Designed with your comfort in mind and styled to boost your
            confidence. This piece is perfect for any occasion.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-[#1B4B3A] text-white px-6 py-3 rounded-full font-medium text-base hover:bg-[#163a2d] transition">
              Start Custom Stitching
            </button>
            <button className="bg-white text-[#1B4B3A] px-6 py-3 rounded-full font-medium text-base hover:bg-gray-100 transition">
              Shop Ready-Made
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
