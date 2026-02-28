"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaChevronRight } from "react-icons/fa6";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft } from "react-icons/fa6";

export default function SwiperCmp() {
  const products = [
    {
      id: 1,
      image: "/men1.png",
      badge: "New",
      title: "Classic White Shalwar Kameez",
      price: "PKR 4,500",
    },
    {
      id: 2,
      image: "/men1.png",
      badge: "New Arrival",
      title: "Red Shalwar kameez suite",
      price: "PKR 3,500",
    },
    {
      id: 3,
      image: "/men1.png",
      badge: "Sale",
      title: "Blue Banarsi Kameez",
      price: "PKR 2,500",
    },
    {
      id: 4,
      image: "/men1.png",
      badge: "Sale",
      title: "Classic White Shalwar Kameez",
      price: "PKR 10,500",
    },
    {
      id: 5,
      image: "/men1.png",
      badge: null,
      title: "Classic White Shalwar Kameez",
      price: "PKR 10,500",
    },
  ];

  return (
    <section className="py-8 px-4 md:px-8 bg-white max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
        Unique Men&apos;s Collection
      </h2>

      {/* Category Tabs */}
      <div className="flex items-center justify-between mb-6 overflow-x-auto pb-3 scrollbar-hide">
        <div className="flex gap-3 whitespace-nowrap">
          <button className="bg-green-800 text-white px-6 py-2 rounded-full text-sm font-medium">
            New Arrival
          </button>
          <button className="hover:bg-gray-100 px-6 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-300">
            Sale
          </button>
          <button className="hover:bg-gray-100 px-6 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-300">
            Shalwar Kameez
          </button>
          <button className="hover:bg-gray-100 px-6 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-300">
            Kurtas
          </button>
          <button className="hover:bg-gray-100 px-6 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-300">
            Waist Coats
          </button>
          <button className="hover:bg-gray-100 px-6 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-300">
            2-Piece Suits
          </button>
          <button className="hover:bg-gray-100 px-6 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-300">
            Shawls
          </button>
        </div>
        <button className="hidden md:block bg-white border border-gray-300 hover:bg-gray-100 px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap">
          View All
        </button>
      </div>

      {/* Swiper with EXACT arrow buttons from your image */}
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4.2 },
          }}
          className="product-swiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="relative h-[380px] md:h-[420px] w-full">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  {product.badge === "Sale" && (
                    <div className="absolute top-4 right-4 bg-white text-black text-xs font-bold px-5 py-1 rounded-full shadow-md">
                      Sale
                    </div>
                  )}
                  {product.badge === "New" && (
                    <div className="absolute bottom-4 left-4 bg-new text-black text-xs font-bold px-4 py-1 rounded shadow-md">
                      New Arrival
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-900 line-clamp-2 font-medium">
                    {product.title}
                  </p>
                  <p className="text-lg font-semibold text-[#184335] mt-1">
                    {product.price}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* EXACT ARROW BUTTONS - Matching your screenshot 100% */}
        <button className="swiper-button-prev absolute -left-5 md:-left-6 top-1/2 -translate-y-1/2 z-10 bg-white w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:shadow-xl hover:scale-110 transition-all">
          <FaChevronLeft color="black" />
        </button>

        <button className="swiper-button-next absolute -right-5 md:-right-6 top-1/2 -translate-y-1/2 z-10 bg-white w-12 h-12 rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:shadow-xl hover:scale-110 transition-all">
          <FaChevronRight color="black" />
        </button>
      </div>
    </section>
  );
}
