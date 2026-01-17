import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ProductCard from './ui/ProductCard';

const MOCK_PRODUCTS = [
  {
    id: 1,
    title: "Classic White Shalwar Kameez",
    description: "Available: M, L, XL, XXL",
    price: 4500,
    originalPrice: 4500,
    rating: 4.9,
    reviews: 56,
    image: "/women.png",
  },
  {
    id: 2,
    title: "Premium Wash & Wear Fabric",
    description: "Fabric: 100% Cotton (5 meters)",
    price: 3200,
    rating: 4.8,
    reviews: 23,
    image: "/women.png",
    isStitchable: true,
  },
   {
    id: 3,
    title: "Classic White Shalwar Kameez",
    description: "Available: M, L, XL, XXL",
    price: 4500,
    originalPrice: 4500,
    rating: 4.9,
    reviews: 56,
    image: "/women.png",
  },
  {
    id: 4,
    title: "Premium Wash & Wear Fabric",
    description: "Fabric: 100% Cotton (5 meters)",
    price: 3200,
    rating: 4.8,
    reviews: 23,
    image: "/women.png",
    isStitchable: true,
  },
];

export default function FeaturedCollection() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header Area */}
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
            Loved by Women
          </h2>
          <p className="text-gray-600 text-lg">
            Customer favorites crafted for comfort, confidence, and lasting style.
          </p>
        </div>
        
        {/* Navigation Arrows */}
        <div className="hidden md:flex gap-3">
          <button className="p-2.5 rounded-full border border-gray-200 text-gray-400 hover:text-black hover:border-black transition-all">
            <FiChevronLeft className="w-6 h-6" />
          </button>
          <button className="p-2.5 rounded-full border border-gray-200 text-gray-400 hover:text-black hover:border-black transition-all">
            <FiChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Grid / Horizontal Scroll */}
      <div className="flex gap-6 overflow-x-auto pb-8 snap-x no-scrollbar md:grid md:grid-cols-3 lg:grid-cols-4 md:overflow-visible">
        {MOCK_PRODUCTS.map((product) => (
          <div key={product.id} className="min-w-[85%] md:min-w-0 snap-center">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}