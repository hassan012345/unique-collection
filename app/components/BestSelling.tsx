'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const BestSelling = () => {
  return (
    <section className="py-12 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif mb-2">Our Best Selling</h2>
        <p className="text-base text-gray-600 mb-8">
          Customer favorites crafted for comfort, confidence, and lasting style.
        </p>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          navigation
          pagination={{ clickable: true }}
          className="best-selling-swiper"
        >
          {/* Occasion Wear Card (Larger) */}
          <SwiperSlide>
            <div className="relative h-[500px] md:h-[600px] bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <img
                src="/ManEmbroidedKurta.png"
                alt="Occasion Wear"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
                <h3 className="text-xl font-semibold">Occasion Wear</h3>
                <p className="text-sm">Crafted for ceremonies, celebrations, and unforgettable moments.</p>
                <button className="mt-2 text-sm underline">Explore Collection →</button>
              </div>
            </div>
          </SwiperSlide>

          {/* Classic White Shalwar Kameez */}
          <SwiperSlide>
            <div className="relative h-96 bg-white rounded-lg overflow-hidden shadow-md">
              <div className="absolute top-2 left-2 bg-[var(--new-arrival-yellow)] text-white text-xs px-2 py-1 rounded">New Arrival</div>
              <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">-50%</div>
              <img
                src="/ClassicWhite.png"
                alt="Classic White Shalwar Kameez"
                className="w-full h-3/4 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center mb-1">
                  <span className="text-yellow-400">★ ★ ★ ★ ☆</span>
                  <span className="text-xs text-gray-500 ml-2">(4.9 | 361)</span>
                </div>
                <h4 className="text-base font-medium">Classic White Shalwar Kameez</h4>
                <div className="flex items-center">
                  <span className="text-green-700 font-bold">PKR 4,500</span>
                  <span className="text-gray-500 line-through ml-2">PKR 9,000</span>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Repeat similar slides for other products */}
          <SwiperSlide>
            <div className="relative h-96 bg-white rounded-lg overflow-hidden shadow-md">
              <div className="absolute top-2 left-2 bg-[var(--new-arrival-yellow)] text-white text-xs px-2 py-1 rounded">New Arrival</div>
              <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">-50%</div>
              <img
                src="/ClassicWhite.png"
                alt="Classic White Shalwar Kameez"
                className="w-full h-3/4 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center mb-1">
                  <span className="text-yellow-400">★ ★ ★ ★ ☆</span>
                  <span className="text-xs text-gray-500 ml-2">(4.9 | 361)</span>
                </div>
                <h4 className="text-base font-medium">Classic White Shalwar Kameez</h4>
                <div className="flex items-center">
                  <span className="text-green-700 font-bold">PKR 4,500</span>
                  <span className="text-gray-500 line-through ml-2">PKR 9,000</span>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative h-96 bg-white rounded-lg overflow-hidden shadow-md">
              <div className="absolute top-2 left-2 bg-[var(--new-arrival-yellow)] text-white text-xs px-2 py-1 rounded">New Arrival</div>
              <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">-50%</div>
              <img
                src="/ClassicWhite.png"
                alt="Classic White Shalwar Kameez"
                className="w-full h-3/4 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center mb-1">
                  <span className="text-yellow-400">★ ★ ★ ★ ☆</span>
                  <span className="text-xs text-gray-500 ml-2">(4.9 | 361)</span>
                </div>
                <h4 className="text-base font-medium">Classic White Shalwar Kameez</h4>
                <div className="flex items-center">
                  <span className="text-green-700 font-bold">PKR 4,500</span>
                  <span className="text-gray-500 line-through ml-2">PKR 9,000</span>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Add more slides as needed */}
        </Swiper>
      </div>
    </section>
  );
};

export default BestSelling;