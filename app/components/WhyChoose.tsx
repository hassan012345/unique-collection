"use client";

const features = [
  {
    icon: '/AITryOn.png', 
    title: "AI Try-On",
    description: "Try AI Feature for your picks.",
  },
  {
    icon: '/CustomStitching.png',
    title: "Custom Stitching",
    description: "Easily custom stitched.",
  },
  {
    icon: '/FastDelivery.png',
    title: "Fast Delivery",
    description: "Delivered fast. Always.",
  },
  {
    icon: '/QualityFabrics.png',
    title: "Quality Fabrics",
    description: "Provided with quality fabrics.",
  },
];

export default function WhyChoose() {
  return (
    <section className="w-full bg-[#E8ECEB] px-5 lg:px-20 py-12 lg:py-16">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-8 lg:gap-10 items-center">
        <h2
          className="text-[#184335] text-2xl md:text-3xl lg:text-[48px] font-[600] capitalize text-center"
          style={{ fontFamily: "var(--font-perfectly-nineties)" }}
        >
          Why Choose Unique Collection
        </h2>

        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {features.map((f) => (
            <div key={f.title} className="flex items-center gap-3 lg:gap-4">
              <div className="shrink-0 w-[45px] h-[45px] lg:w-[55px] lg:h-[55px] overflow-hidden">
                <img src={f.icon} alt={f.title} className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col gap-1">
                <h3
                  className="text-[#184335] text-lg lg:text-[28px] font-[700] leading-relaxed"
                  style={{ fontFamily: "var(--font-perfectly-nineties)" }}
                >
                  {f.title}
                </h3>
                <p
                  className="text-[#525252] text-xs lg:text-[16px] leading-relaxed"
                  style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
                >
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
