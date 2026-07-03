import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";
import distillationImg from "../asset/distillation1.jpg";
import wfeImg from "../asset/WFE1.jpg";
import solventImg from "../asset/solvent1.jpg";
import { s } from "framer-motion/client";

const technologies = [
  {
    title: "Dehydration, Distillation & Filtration",
    description:
      "Removes moisture, separates hydrocarbons, and purifies oil using advanced filtration techniques.",
    path: "/technology/dehydration-distillation-filtration",
    image:
      distillationImg,
  },
  {
    title: "WFE Distillation & Filtration",
    description:
      "Uses wiped film evaporator technology for high-efficiency oil recovery and improved purity.",
    path: "/technology/wfe-distillation-filtration",
    image:
      wfeImg,
  },
  {
    title: "WFE with Solvent Process",
    description:
      "Advanced refining using solvent extraction to enhance oil quality, clarity, and stability.",
    path: "/technology/wfe-solvent-process",
    image:
      solventImg,
  },
];

const TechnologyPage = () => {
  const navigate = useNavigate();

  // 🔶 Hero Slider Logic (UNCHANGED)
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "/src/asset/tech1.avif",
    "/src/asset/tech2.avif",
    "/src/asset/Hero Image 5.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* 🔶 HERO SECTION (FROM CODE 1 - PRESERVED) */}
      <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-6xl font-bold text-orange-400">
            TECHNOLOGY
          </h1>

          <div className="text-sm md:text-lg font-semibold tracking-widest mt-2 text-orange-300 h-[30px]">
            <TypeAnimation
              sequence={["GLOBAL REPROCESS TECHNOLOGIES", 2000]}
              speed={50}
              repeat={Infinity}
            />
          </div>
        </div>
      </div>

      {/* 🔶 INTRO SECTION */}
      <div className="max-w-6xl mx-auto px-4 py-10 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-orange-400">
          Advanced Oil Recycling Technologies
        </h2>
        <p className="text-black-600 font-semibold text-justify max-w-3xl mx-auto text-sm md:text-base">
          We provide cutting-edge solutions for used oil recycling with
          environmentally friendly processes, ensuring high recovery and
          premium-quality output.
        </p>
      </div>

      {/* 🔶 TECHNOLOGY CARDS */}
      <div className="max-w-6xl mx-auto px-4 pb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {technologies.map((tech, index) => (
          <div
            key={index}
            onClick={() => navigate(tech.path)}
            className="bg-white hover:bg-orange-200 rounded-2xl shadow-md hover:shadow-xl cursor-pointer transform hover:-translate-y-2 transition duration-300 overflow-hidden"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={tech.image}
                alt={tech.title}
                className="h-48 w-full object-cover hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-2">
                  {tech.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {tech.description}
                </p>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(tech.path);
                }}
                className="text-orange-500 font-medium hover:underline"
              >
                Learn More →
              </button>
            </div>
          </div>
        ))}
      </div>

          {/* 🔶 Clients Section */}
      <h2 className="text-3xl md:text-5xl font-bold text-yellow-500 mb-12 text-center">
        Our Clients
      </h2>
    
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
  );
};

export default TechnologyPage;