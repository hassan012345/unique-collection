"use client";

import Image from "next/image";
import { MdNorthEast } from "react-icons/md";

const BrowseByGender = () => {
  return (
    <section className="py-8 md:py-12 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-10">
          Browse By Gender Category
        </h2>

        {/* Cards Grid - Responsive: 1 column mobile, 2 columns desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Men's Collection Card */}
          <div className="group relative rounded-2xl overflow-hidden shadow-lg border-2 border-blue-600 transition-all hover:shadow-2xl">
            <div className="relative aspect-[4/5] md:aspect-[5/6] w-full">
              <Image
                src="/men.png" // Replace with your actual men's image
                alt="Men's Collection"
                fill
                className="object-cover transition-transform group-hover:scale-105 duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Overlay Content */}
            <div className="absolute bottom-6 left-6 px-6 py-5 rounded-xl text-white w-4/5 md:w-80">
              <p className="text-2xl font-semibold mb-3">Men&apos;s Collection</p>
              <ul className="space-y-1 text-sm mb-4">
                <li className="flex items-center gap-2">
                  <span>•</span> Shalwar Kameez
                </li>
                <li className="flex items-center gap-2">
                  <span>•</span> Waistcoats
                </li>
                <li className="flex items-center gap-2">
                  <span>•</span> Formal Wear
                </li>
              </ul>
              <button className="flex items-center gap-2 text-sm font-semibold hover:text-blue-300 transition-colors">
                View All Men&apos;s
                <span className="text-lg leading-none">
                  <MdNorthEast />
                </span>
              </button>
            </div>
          </div>

          {/* Woman's Collection Card */}
          <div className="group relative rounded-2xl overflow-hidden shadow-lg transition-all hover:shadow-2xl">
            <div className="relative aspect-[4/5] md:aspect-[5/6] w-full">
              <Image
                src="/women.png" // Replace with your actual women's image (two models)
                alt="Woman's Collection"
                fill
                className="object-cover transition-transform group-hover:scale-105 duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Overlay Content */}
            <div className="absolute bottom-6 left-6 px-6 py-5 text-white w-4/5 md:w-80">
              <p className="text-2xl font-semibold mb-3">Woman&apos;s Collection</p>
              <ul className="space-y-1 text-sm mb-4">
                <li className="flex items-center gap-2">
                  <span>•</span> Shirts &amp; Kurti
                </li>
                <li className="flex items-center gap-2">
                  <span>•</span> Stitched Sets
                </li>
                <li className="flex items-center gap-2">
                  <span>•</span> Unstitched Fabrics
                </li>
              </ul>
              <button className="flex items-center gap-2 text-sm font-semibold hover:text-blue-300 transition-colors">
                View All Women&apos;s
                <span className="text-lg leading-none">
                  <MdNorthEast />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseByGender;