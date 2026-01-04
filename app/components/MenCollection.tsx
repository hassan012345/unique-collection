import Image from "next/image";

const MenCollection = () => {
  const categories = [
    {
      src: "/men1.png",
      alt: "Waistcoat",
      label: "Waistcoats",
    },
    {
      src: "/men2.png",
      alt: "Shalwar Qameez",
      label: "Shalwar Qameez",
    },
    {
      src: "/men3.png",
      alt: "Kurta",
      label: "Kurta",
    },
    {
      src: "/men4.png",
      alt: "Sherwani",
      label: "Sherwani",
    },
  ];

  return (
    <div className="bg-white py-8 px-4 md:text-center md:mx-auto">
      <h1 className="text-3xl md:text-4xl font-serif text-center md:text-left mb-6">
        Men Collection
      </h1>
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        {categories.map((category, index) => (
          <div key={index} className="relative flex-1">
            <Image
              className="w-full h-auto rounded-lg shadow-md"
              src={category.src}
              alt={category.alt}
              width={400}
              height={600}
              priority
            />
            <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded text-sm font-medium text-white">
              {category.label}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center md:justify-start mt-8">
        <button className="bg-[#1B4B3A] text-white px-6 py-3 rounded-full font-medium text-base hover:bg-[#163a2d] transition">
          View All
        </button>
      </div>
    </div>
  );
};

export default MenCollection;
