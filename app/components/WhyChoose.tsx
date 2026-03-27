"use client";

const groupIconUrl = "https://www.figma.com/api/mcp/asset/e76815e7-d381-42c5-bfb0-b3e2468f88a0";
const needleUrl = "https://www.figma.com/api/mcp/asset/4a700dba-af1e-4748-b4b1-e83472068fc1";
const yogaMatUrl = "https://www.figma.com/api/mcp/asset/210fcd02-9592-4fce-95dd-36bb69b09c50";
const deliveryTruckUrl = "https://www.figma.com/api/mcp/asset/840a5f65-521a-4c3c-9c2a-a74231d12d06";

const features = [
  {
    icon: groupIconUrl,
    title: "AI Try-On",
    description: "Try AI Feature for your picks.",
  },
  {
    icon: needleUrl,
    title: "Custom Stitching",
    description: "Easily custom stitched.",
  },
  {
    icon: yogaMatUrl,
    title: "Fast Delivery",
    description: "Delivered fast. Always.",
  },
  {
    icon: deliveryTruckUrl,
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
