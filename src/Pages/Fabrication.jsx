import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

const FabricationPage = () => {
  // 🔶 HERO SLIDER
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "/src/asset/tech1.avif",
    "/src/asset/tech2.avif",
    "/src/asset/Hero Image 5.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // 🔶 MENU
  const menuItems = ["Equipment", "Out Sourcing"];
  const [active, setActive] = useState(menuItems[0]);
  const [animate, setAnimate] = useState(false);

  const handleClick = (item) => {
    if (item === active) return;
    setAnimate(true);
    setTimeout(() => {
      setActive(item);
      setAnimate(false);
    }, 300);
  };

  // 🔶 DATA
  const fabricationData = {
    Equipment: {
      title: "Equipment",
      desc: "We fabricate the following equipments needed to run the above projects:",
      images: [
        "../src/asset/fab1.jpeg",
        "../src/asset/fab2.jpeg",
        "../src/asset/fab3.jpeg",
      ],
      leftList: [
        "Reactor vessel",
        "Receivers",
        "Condensor",
        "Blending vessel",
        "High pressure vessel",
      ],
      rightList: [
        "Structure",
        "Pipeline",
        "Knockout pot",
        "Basket Filter",
        "Storage Tank",
      ],
    },

    "Out Sourcing": {
      title: "Out Sourcing",
      desc: "We also outsource the following equipments needed to run the plants:",
      images: [
        "../src/asset/fab4.jpeg",
        "../src/asset/fab5.jpeg",
        "../src/asset/fab6.jpeg",
      ],
      leftList: [
        "Thermic Fluid Boilers",
        "High Efficiency Electric Burners",
        "Pumps & Vacuum Booster System",
        "Electric Motors",
        "Filter Press Machine",
        "Filter Cloth",
        "WFE (Wiped Film Evaporator)",
        "Cooling Towers",
        "Lube Oil Filling Machines",
      ],
      rightList: [
        "D.G. Sets",
        "Electric Main Control Panel",
        "Valves and Fittings",
        "Flow Meters",
        "Fire Fighting Systems",
        "Electric Cables, Switches",
        "Safety Equipment for Workers",
        "Packing Machines",
        "Lab Equipment",
        "Centrifuging Kit",
      ],
    },
  };

  const currentData = fabricationData[active];

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* 🔶 HERO SECTION (UNCHANGED) */}
      <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-6xl font-bold text-orange-400">
            FABRICATION
          </h1>

          <div className="text-sm md:text-lg font-semibold tracking-widest mt-2 text-orange-300">
            <TypeAnimation
              sequence={[
                "CUSTOM FABRICATION PROVIDER...",
                "GLOBAL REPROCESS TECHNOLOGIES",
                5000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>
        </div>
      </div>

      {/* 🔶 MAIN SECTION */}
      <div className="max-w-7xl mx-auto p-4 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* 🔸 LEFT MENU */}
        <div className="bg-gray-200 rounded p-4">
          <h2 className="text-xl font-bold mb-3">FABRICATION</h2>

          {menuItems.map((item, i) => (
            <div
              key={i}
              onClick={() => handleClick(item)}
              className={`cursor-pointer px-3 py-2 border-b transition-all duration-300
              ${
                active === item
                  ? "bg-orange-300 text-white scale-[1.02]"
                  : "text-yellow-600 hover:bg-gray-300 hover:text-white"
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        {/* 🔸 RIGHT CONTENT */}
        <div className="md:col-span-2 bg-white rounded shadow p-4 overflow-hidden">

          {/* 🔥 NEW TRANSITION (SLIDE + SCALE) */}
          <div
            className={`transition-all duration-500 transform ${
              animate
                ? "opacity-0 translate-x-10 scale-95"
                : "opacity-100 translate-x-0 scale-100"
            }`}
          >
            <h2 className="text-2xl md:text-3xl text-center font-bold mb-4">
              {currentData.title}
            </h2>

            {/* 🔹 IMAGES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {currentData.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  className="w-full h-40 object-cover rounded hover:scale-105 transition duration-300"
                />
              ))}
            </div>

            {/* 🔹 DESCRIPTION */}
            <p className="text-center font-serif mb-6 text-sm md:text-base">
              {currentData.desc}
            </p>

            {/* 🔹 LISTS */}
            <div className="grid grid-cols-1 font-serif sm:grid-cols-2 gap-6">
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
                {currentData.leftList.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
                {currentData.rightList.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

          {/* 🔶 CLIENTS SECTION */}
      <h2 className="text-3xl md:text-5xl font-bold text-yellow-500 mb-12 text-center">
        Our Clients
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4 pb-10">
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

export default FabricationPage;