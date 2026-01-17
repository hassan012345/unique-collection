
const BrowseByGender = () => {  return (
    <section className="py-12 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-8">Browse By Gender</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Men's Collection */}
          <div className="relative h-96 md:h-[600px]">
            <img
              src="/men.png" // Replace with your actual men's image URL
              alt="Men's Collection"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
            <div className="absolute bottom-4 left-4 bg-opacity-70 px-4 py-2 rounded">
              <p className="text-xl font-semibold">Men Collection</p>
            </div>
          </div>

          {/* Women's Collection */}
          <div className="relative h-96 md:h-[600px]">
            <img
              src="/women.png" // Replace with your actual women's image URL
              alt="Women's Collection"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
            <div className="absolute bottom-4 left-4 bg-opacity-70 px-4 py-2 rounded">
              <p className="text-xl font-semibold">Women Collection</p>
            </div>
          </div>
        </div>
        <button className="mt-8 bg-[#1B4B3A] text-white px-6 py-3 rounded-full font-medium text-base hover:bg-[#163a2d] transition">
          View All
        </button>
      </div>
    </section>
  );
};

export default BrowseByGender;