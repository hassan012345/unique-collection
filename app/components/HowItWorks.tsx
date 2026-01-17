import Image from "next/image";

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-12 mb-6 md:mb-12 lg:gap-16">
          {/* Left side - Title (two lines) */}
          <div className="md:w-8/12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              How It Works For
              <br />
              Ready-Made
            </h2>
          </div>

          {/* Right side - Description text */}
          <div className="md:w-7/16 text-left md:text-right self-end">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Breathable, tailored, and elegant stitched for daily comfort and
              refined style.
            </p>
          </div>
        </div>
        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-5">
          {/* Step 1 */}
          <div className="text-center px-4">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center">
              <Image
                src="/MaskGroup.png"
                alt="Browse Icon"
                width={32}
                height={32}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Browse & Select
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Discover premium menswear curated for everyday elegance and
              special occasions.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center px-4">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center">
              <Image
                src="/MaskGroup.png"
                alt="Browse Icon"
                width={32}
                height={32}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Add to Cart
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Add your favorite outfits to the cart with size selection, color
              options, and quick delivery estimates.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center px-4">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center">
              <Image
                src="/MaskGroup.png"
                alt="Browse Icon"
                width={32}
                height={32}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Checkout & Pay
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Secure payments, Cash on Delivery, and saved addresses make
              checkout effortless & fast.
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center px-4">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center">
              <Image
                src="/MaskGroup.png"
                alt="Browse Icon"
                width={32}
                height={32}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Receive at Your Door
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Your outfit is carefully packed, shipped nationwide, and delivered
              ready to wear
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
