import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <Image
        src="/FooterImage.jpg"
        alt="Image description"
        width={1920}
        height={1080}
        className="w-full h-auto object-cover"
      />
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
                  <a href="#">Men's Collection</a>
                </li>
                <li>
                  <a href="#">Women's Collection</a>
                </li>
                <li>
                  <a href="#">Ready-Made</a>
                </li>
                <li>
                  <a href="#">Custom Stitching</a>
                </li>
                <li>
                  <a href="#">Unstitched Fabrics</a>
                </li>
                <li>
                  <a href="#">Wedding Specials</a>
                </li>
                <li>
                  <a href="#">New Arrivals</a>
                </li>
                <li>
                  <a href="#">Best Sellers</a>
                </li>
              </ul>
            </div>

            {/* Custom Tailoring Column */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-4">Custom Tailoring</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#">Start Custom Order</a>
                </li>
                <li>
                  <a href="#">Upload Your Design</a>
                </li>
                <li>
                  <a href="#">Measurement Guide</a>
                </li>
                <li>
                  <a href="#">All Virtual Try-On</a>
                </li>
                <li>
                  <a href="#">Free Alteration Policy</a>
                </li>
              </ul>
            </div>

            {/* About Us Column */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#">Our Story</a>
                </li>
                <li>
                  <a href="#">Craft & Tailoring</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Customer Reviews</a>
                </li>
              </ul>
            </div>

            {/* Support Column */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Shipping Information</a>
                </li>
                <li>
                  <a href="#">Returns & Exchanges</a>
                </li>
                <li>
                  <a href="#">Size & Fit Guide</a>
                </li>
                <li>
                  <a href="#">Order Tracking</a>
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
    </div>
  );
};

export default Footer;
