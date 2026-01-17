export default function AIVisualizationSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT: Text content */}
          <div className="text-center space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-6">
              <p className="text-2xl md:text-3xl font-light text-gray-800 tracking-wide">
                *✦*{" "}
              </p>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Tailored to You,
                <br />
                Visualized with AI
              </h2>

              <p className="text-lg md:text-md text-gray-600 leading-relaxed max-w-xl mx-auto md:mx-0">
                Our AI-powered Skin Scan reveals your skin’s needs in seconds—
                <br className="hidden md:block" />
                so you get personalized product recommendations with confidence.
              </p>
            </div>

            {/* Button */}
            <div className="mt-8">
              <button
                className="
                  inline-flex items-center justify-center px-8 py-4   
                  bg-[#1B4B3A] text-white font-medium text-lg rounded-full 
                  shadow-md hover:shadow-lg transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2
                "
              >
                Scan With AI
              </button>
            </div>
          </div>

          {/* RIGHT: Image with dashed border frame */}
          <div className="relative mx-auto md:mx-0 max-w-md md:max-w-none">
            {/* Dashed border frame – using border-dashed + transform for slight tilt */}
            <div
              className="
                relative 
                shadow-2xl rounded-lg overflow-hidden
              "
            >
              <div className="">
                {/* Replace src with your actual image or use placeholder */}
                <img
                  src="/woman.jpg"
                  alt="Woman in elegant floral dress on balcony"
                  className="w-full h-auto object-cover"
                  width={600}
                  height={800}
                />
              </div>
              <div
                className="
  absolute z-10 w-90 h-90 
  top-1/2 left-1/2 
  -translate-x-1/2 -translate-y-1/2 
  border-2 border-dashed border-gray-300 
  pointer-events-none bg-white/20
"
              >
                {/* optional: you can put text/icon/debug content inside if needed */}
              </div>
              <div className="bg-white/0 absolute inset-0 flex items-center justify-center">
                <div
                  className="
  absolute z-10 w-75 h-50
  top-1/2 left-1/2 
  -translate-x-1/2 -translate-y-1/2 
  border-2 border-dashed border-gray-300 
  pointer-events-none bg-whit bg-gradient-to-t from-white/70 via-white/30 to-transparent
"
                >
                  {/* optional: you can put text/icon/debug content inside if needed */}
                </div>
              </div>
            </div>

            {/* Optional subtle overlay text inside frame (as in your description) */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-80 transition-opacity duration-300 bg-black/30 rounded-lg">
              <p className="text-white text-xl font-medium px-6 text-center">
                Our AI-powered Skin Scan reveals your skin needs...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
