
import Image from 'next/image';

const UniqueMenCollection = () => {
  const products = [
    {
      image: '/men.png', // Replace with actual image path
      discount: '-50%',
      newArrival: true,
      name: 'Shalwar Kameez',
      description: 'Classic style, modern fit.',
      rating: 4.9,
      reviews: 156,
      price: 4500,
      oldPrice: 4600,
    },
    {
      image: '/men.png',
      discount: '-50%',
      newArrival: true,
      name: 'Shalwar Kameez',
      description: 'Classic style, modern fit.',
      rating: 4.9,
      reviews: 156,
      price: 4500,
      oldPrice: 4600,
    },
    {
      image: '/men.png',
      discount: '-50%',
      newArrival: true,
      name: 'Shalwar Kameez',
      description: 'Classic style, modern fit.',
      rating: 4.9,
      reviews: 156,
      price: 4500,
      oldPrice: 4600,
    },
    {
      image: '/men.png',
      discount: '-50%',
      newArrival: true,
      name: 'Shalwar Kameez',
      description: 'Classic style, modern fit.',
      rating: 4.9,
      reviews: 156,
      price: 4500,
      oldPrice: 4600,
    },
  ];

  return (
    <section className="py-12 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-6">Unique Men Collection</h2>
        <nav className="flex flex-wrap justify-center space-x-4 md:space-x-6 text-gray-600 text-sm md:text-base mb-8">
          <a href="#" className="hover:text-[#1B4B3A]">Shalwar Kameez</a>
          <a href="#" className="hover:text-[#1B4B3A]">Kurta/Trouser</a>
          <a href="#" className="hover:text-[#1B4B3A]">3-Piece Suits</a>
          <a href="#" className="hover:text-[#1B4B3A]">Waistcoats</a>
          <a href="#" className="hover:text-[#1B4B3A]">New Arrival</a>
          <a href="#" className="hover:text-[#1B4B3A]">Unstitched</a>
          <a href="#" className="hover:text-[#1B4B3A]">Stitched</a>
        </nav>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <div key={index} className="relative bg-white rounded-lg overflow-hidden shadow-md">
              <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">{product.discount}</div>
              {product.newArrival && (
                <div className="absolute bottom-36 left-2 bg-[#FBBF24] text-white text-xs px-2 py-1 rounded">New Arrival</div>
              )}
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={400}
                className="w-full h-80 object-fit"
              />
              <div className="p-4">
                <h3 className="text-base font-medium">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
                <div className="flex items-center mt-1">
                  <span className="text-yellow-400 text-sm">★★★★★</span>
                  <span className="text-xs text-gray-500 ml-1">({product.rating} {product.reviews})</span>
                </div>
                <div className="flex items-center mt-2">
                  <span className="text-[#1B4B3A] font-bold">PKR {product.price.toLocaleString()}</span>
                  <span className="text-gray-500 line-through ml-2">PKR {product.oldPrice.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-[#1B4B3A] text-white px-6 py-3 rounded-full font-medium text-base hover:bg-[#163a2d] transition">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default UniqueMenCollection;