"use client";

import { MdOutlinePhoneAndroid, MdOutlineHighQuality } from "react-icons/md";
import { GiSewingMachine } from "react-icons/gi";
import { FaTruckFast } from "react-icons/fa6";


export default function WhyChooseUniqueCollection() {
  const features = [
    {
      icon: <MdOutlinePhoneAndroid className="text-6xl" />,
      title: "AI Try-On",
      desc: "Try AI Feature for your picks.",
    },
    {
      icon: <GiSewingMachine className="text-6xl" />,
      title: "Custom Stitching",
      desc: "Easily custom stitched.",
    },
    {
      icon: <FaTruckFast className="text-6xl" />,
      title: "Fast Delivery",
      desc: "Delivered fast. Always.",
    },
    {
      icon: <MdOutlineHighQuality className="text-6xl" />,
      title: "Quality Fabrics",
      desc: "Provided with quality fabrics.",
    },
  ];

  return (
    <section className="bg-[#f8faf5] py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Title - Exact match */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-emerald-900 mb-12 md:mb-16 tracking-tight">
          Why Choose Unique Collection
        </h2>

        {/* Features Grid - Responsive: 1 col mobile → 2 col tablet → 4 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              {/* Icon - Large and colored exactly like the image style */}
              <div className="text-emerald-700 mb-6 transition-transform group-hover:scale-110">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-emerald-950 mb-3">
                {feature.title}
              </h3>

              {/* Subtitle */}
              <p className="text-emerald-700/80 text-base leading-relaxed max-w-[220px]">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}