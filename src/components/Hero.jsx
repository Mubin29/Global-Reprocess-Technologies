import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [

    "/src/asset/Hero Image 2.jpeg",
    "/src/asset/Hero Image 3.jpeg",
    "/src/asset/Hero Image 6.jpg",
    "/src/asset/Hero Image 5.jpg",

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {/* 🔹 HERO SECTION ONLY */}
      <div className="relative w-full h-screen overflow-hidden bg-gray-100">
        
        {/* Slides */}
        <div
          className="flex transition-transform duration-700"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-full h-screen">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* 🔻 Curve (ONLY for hero) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 150"
            className="w-full h-[100px]"
            preserveAspectRatio="none"
          >
            <path
              fill="#f3f4f6"
              d="M0,80 C300,150 1100,0 1440,80 L1440,150 L0,150 Z"
            />
          </svg>
        </div>

        {/* 🔹 Heading */}

        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center px-4">

    {/* 🔥 Typewriter Main Heading */}
    <TypeAnimation
        sequence={[
        "GLOBAL REPROCESS TECHNOLOGIES",
        2000
        ]}
        speed={30}
        repeat={Infinity}
        className="text-lg md:text-3xl lg:text-5xl from-neutral-600 font-serif font-semibold text-[#000000]"
    />

    {/* 🔥 Subtitle Typewriter */}
    <TypeAnimation
        sequence={[
        "Our Motto Is Serve Quality Not Quantity..",
        "Serving The World With Quality Reprocessed Oils..",
        "Reprocessing Used Oil For A Greener Tomorrow..",
        "Eco-Friendly Solutions For Waste Oil Recycling..",
        3000,
        "",
        2000,
        ]}
        speed={50}
        repeat={Infinity}
        className="block text-sm md:text-lg lg:text-xl  font-serif font-semibold mt-4 text-[#ffffff]"
    />
    </div>
    

        {/* 🔹 Dots */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-orange-600" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* 🔹 ABOUT SECTION (Separate - NO curve overlap) */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* Left Image */}
          <div>
            <img
              src="/src/asset/grt-logo.png"
              alt="about"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              About Company
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed text-lg">
              Re-processing, Re-refining and Reusing lubricant oils is economical and environmentally friendly, due to the increasing production costs of crude oil worldwide, and depletion of precious oil resources, which are drilled from the earth to fulfill the ever growing demands of automobiles.
            </p>

            <p className="text-gray-600 mb-4 leading-relaxed text-lg">
               Refining of new crude oil is expensive then reprocessing used oil, so it is valuable to reprocess waste oil /used oil and to REUSE it again and again.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
               GLOBAL REPROCESS TECHNOLOGIES unique approach to Recycling,Re-refining and Reprocessing waste oil/used oil by environmental friendly method is helping the environment worldwide to stay green.
               We provide end to end solutions for solving the problems of waste oil/used oil disposal by Recycling it in our plants using the latest technologies.
            </p>

        <button class="bg-[#df752a] text-white font-semibold px-6 py-2 rounded-lg hover:bg-[#F97316] transition-colors"
                onClick={() => window.location.href = '/about'}>
                    Read More
                  </button>
          </div>

        </div>
      </section>

        {/* SERVICES SECTION */}

      <section
       className="relative bg-[url('/src/asset/service-img.jpg')] bg-cover bg-center bg-no-repeat py-16 px-4"> 
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative max-w-7xl mx-auto text-center">
          <h2 className="text-orange-500 text-3xl md:text-5xl font-bold mb-12">
            Our Services
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            
            {/* Card 1 */}
            <div className="bg-transparent backdrop-blur-md rounded-xl p-6 shadow-lg hover:scale-105 transition duration-300">
              <div className="bg-gray-700 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-4 text-2xl">
                🔧
              </div>
              <h3 className="text-sm text-white font-semibold mb-3">
                DETAILS OF PROCESS ENGINEERING
              </h3>
             <button
              onClick={() => window.location.href = "/services#process-engineering"}
              className="text-black text-sm font-medium hover:underline hover:text-orange-500"
            >
              Read More →
            </button>
            </div>

            {/* Card 2 */}
            <div className="bg-transparent backdrop-blur-md rounded-xl p-6 shadow-lg hover:scale-105 transition duration-300">
              <div className="bg-gray-700 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-4 text-2xl">⚙️</div>
              <h3 className="text-sm text-white font-semibold mb-3">
                COMPLETE DESIGN PACKAGE
              </h3>
               <button
              onClick={() => window.location.href = "/services#complete-design-package"}
              className="text-black text-sm font-medium hover:underline hover:text-orange-500"
            >
              Read More →
            </button>
            </div>

            {/* Card 3 */}
            <div className="bg-transparent backdrop-blur-md rounded-xl p-6 shadow-lg hover:scale-105 transition duration-300">
              <div className="bg-gray-700 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-4 text-2xl">🌱</div>
              <h3 className="text-sm text-white font-semibold mb-3">
                MODIFICATION OF EXISTING PLANTS
              </h3>
               <button
              onClick={() => window.location.href = "/services#modification-of-existing-plants"}
              className="text-black text-sm font-medium hover:underline hover:text-orange-500"
            >
              Read More →
            </button>
            </div>

            {/* Card 4 */}
            <div className="bg-transparent backdrop-blur-md rounded-xl p-6 shadow-lg hover:scale-105 transition duration-300">
              <div className="bg-gray-700 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-4 text-2xl">🧪</div>
              <h3 className="text-white text-sm font-semibold mb-3">
                LABORATORY SET-UP
              </h3>
               <button
              onClick={() => window.location.href = "/services#laboratory-set-up"}
              className="text-black text-sm font-medium hover:underline hover:text-orange-500"
            >
              Read More →
            </button>
            </div>

            {/* Card 5 */}
            <div className="bg-transparent backdrop-blur-md rounded-xl p-6 shadow-lg hover:scale-105 transition duration-300">
              <div className="bg-gray-700 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-4 text-2xl">🌍</div>
              <h3 className="text-white text-sm font-semibold mb-3">
                INTERNATIONAL BUSINESS
              </h3> 
              <button
                onClick={() => window.location.href = "/services#international-business"}
                className="text-black text-sm font-medium hover:underline hover:text-orange-500"
              >
                Read More →
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 🔹 CALL US TODAY SECTION */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          
          {/* Left Logo Design */}
          <div className="flex justify-center">
            <div>
              <img
                src="/src/asset/grt-logo.png"
                alt="logo"
                className="w-30 h-45 object-contain bg-white p-4"
              />
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-3xl font-semibold text-black-300 mb-2">
              Call Us Today
            </h3>

            <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-6">
              +91 9819832060
            </h2>

            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Global Reprocess Technologies (GRT) Group headquartered in Mumbai,
              India with turnkey projects presence in more than 5 countries.
              With a history of more than fourteen years, the group has emerged as a
              leading used lube oil refining technology player across the globe,
              focusing on emerging markets.
            </p>
          </div>
        </div>
      </section>


                {/* 🔹 OUR CLIENTS SECTION */}
  {/* 🔹 CLIENTS SECTION */}
<section className="py-16 px-4 bg-gray-100">
  <div className="max-w-7xl mx-auto text-center">

    {/* Heading */}
    <h2 className="text-3xl md:text-5xl font-bold text-yellow-500 mb-12">
      Our Clients
    </h2>

    {/* Clients Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 items-center">

      {[
        "src/asset/client1.jpg",
        "src/asset/client2.png",
        "src/asset/client3.png",
        "src/asset/client4.jpg",
        "src/asset/client5.png",
        "src/asset/client6.png",
        "src/asset/client7.jpg",
        "src/asset/client8.jpg",
      ].map((img, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-lg shadow hover:shadow-md transition duration-300 flex items-center justify-center"
        >
          <img
            src={img}
            alt={`client-${index}`}
            className="h-16 sm:h-20 object-contain"
          />
        </div>
      ))}

    </div>
  </div>
</section>
    </>
  );
};

export default Hero;