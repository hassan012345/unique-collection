import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <h2 className="text-2xl font-bold mb-4">Unique Collection</h2>
            <p className="text-sm mb-4">
              Premium ready-to-wear and custom tailoring for men and women.
            </p>
            <div className="flex items-center space-x-4">
              <span>Follow Us</span>
              <a href="#" className="text-xl">
                <FaFacebookF />
              </a>{" "}
              {/* Facebook */}
              <a href="#" className="text-xl">
                <FaInstagram />
              </a>{" "}
              {/* Instagram */}
              <a href="#" className="text-xl">
                <BsTwitterX />
              </a>{" "}
              {/* X (Twitter) */}
            </div>
          </div>

          {/* Shop Column */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">Unstitched</a>
              </li>
              <li>
                <a href="#">Formal Wear</a>
              </li>
              <li>
                <a href="#">Sale</a>
              </li>
              <li>
                <a href="#">New Arrival</a>
              </li>
            </ul>
          </div>

          {/* Custom Tailoring Column */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Tailoring</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#">Customized Outfil</a>
              </li>
              <li>
                <a href="#">Unstitched</a>
              </li>
            </ul>
          </div>

          {/* About Us Column */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#">Dashboard</a>
              </li>
              <li>
                <a href="#">Orders</a>
              </li>
              <li>
                <a href="#">Saved</a>
              </li>
              <li>
                <a href="#">Measurements</a>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-4 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {currentYear} Unique Collection. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Refund Policy</a>
          </div>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <span>Accepted Payment Methods</span>
            <img
              src="https://placehold.co/30x20?text=PayPal"
              alt="PayPal"
              className="h-5"
            />
            <img
              src="https://placehold.co/30x20?text=Apple+Pay"
              alt="Apple Pay"
              className="h-5"
            />
            <img
              src="https://placehold.co/30x20?text=Visa"
              alt="Visa"
              className="h-5"
            />
            <img
              src="https://placehold.co/30x20?text=Mastercard"
              alt="Mastercard"
              className="h-5"
            />
            <img
              src="https://placehold.co/30x20?text=Shopify"
              alt="Shopify Pay"
              className="h-5"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
