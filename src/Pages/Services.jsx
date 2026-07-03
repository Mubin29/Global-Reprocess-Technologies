import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { useLocation } from "react-router-dom"; // ✅ ADDED

const ServicesPage = () => {
  const location = useLocation(); // ✅ ADDED

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
  const menuItems = [
    "Details of Process Engineering",
    "Complete Design Package",
    "Modification of existing plants",
    "Laboratory Set-up",
    "International Business",
  ];

  const [active, setActive] = useState(menuItems[0]);
  const [animate, setAnimate] = useState(false);

  const handleClick = (item) => {
    if (item === active) return;
    setAnimate(true);
    setTimeout(() => {
      setActive(item);
      setAnimate(false);
    }, 350);
  };

  // 🔥 HASH BASED NAVIGATION (MAIN FEATURE)
  useEffect(() => {
    if (location.hash) {
      const sectionMap = {
        "#process-engineering": "Details of Process Engineering",
        "#complete-design-package": "Complete Design Package",
        "#modification-of-existing-plants": "Modification of existing plants",
        "#laboratory-set-up": "Laboratory Set-up",
        "#international-business": "International Business",
      };

      const sectionName = sectionMap[location.hash];

      if (sectionName) {
        setActive(sectionName);

        // smooth scroll
        setTimeout(() => {
          const element = document.getElementById("services-content");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }
  }, [location]);

  // 🔶 DATA (UNCHANGED)
  const servicesData = {
    "Details of Process Engineering": {
      images: ["/src/asset/blend1.avif", "/src/asset/blend2.avif"],
      desc: null,
      leftList: [
        "Process Flow Diagram (PFD)",
        "Piping and Instrumentation Diagrams (P&ID)",
        "Line and Equipment List",
        "Mass and Energy Balance",
        "Pump hydraulics",
        "Performance curves and calculation details",
        "Structural design details",
        "Drawings for all fabricated items",
      ],
      rightList: [
        "Piping layouts and isometric diagrams",
        "Bill of Material for piping items",
        "Safety valve and rupture disc specifications",
        "Thermal design of heat exchangers",
        "Environmental Pollution control process design",
        "Bills of Quantities / MTO",
        "Foundation layouts",
        "Fire Safety Equipment List",
        "Lab Equipment List",
      ],
    },

    "Complete Design Package": {
      images: ["/src/asset/blend3.avif", "/src/asset/blend4.avif"],
      desc: null,
      leftList: [
        "Process Engineering",
        "Equipment Design",
        "Mechanical Detail",
        "Piping Detail",
        "Plan Layouts",
      ],
      rightList: [
        "Civil & Structural Detail",
        "Electrical and Instrumentation",
        "Fire fighting equipments",
        "Filling and Packing units",
        "Laboratory Set-up",
      ],
    },

    "Modification of existing plants": {
      desc:
        "We also advice on improving efficiencies to existing re-refining and recycling plants which are having problems with their production or are considering process improvements. Our expert team will visit the plants for surveying and discuss the problems with the present staff and advice latest solutions for improving their output accordingly.",
      images: ["/src/asset/blend5.avif", "/src/asset/blend6.avif"],
      leftList: null,
      rightList: null,
    },

    "Laboratory Set-up": {
      images: ["/src/asset/blend7.avif", "/src/asset/blend8.avif"],
      desc:
        "Each plant requires a complete set of laboratory equipment to conduct basic tests of received raw material and analyzing the finished product as per international specifications. We help you set up the laboratory as per your material testing requirements.",
      leftList: [
        "Flash Point Appratus",
        "Colour Compartor",
        "Viscosity Bath",
      ],
      rightList: [
        "Density Checker",
        "Hydro Meter",
      ],
    },

    "International Business": {
      images: [
        "/src/asset/blend2.avif",
        "/src/asset/blend5.avif",
        "/src/asset/blend6.avif",
      ],
      desc: null,
      leftList: [
        "Base Oil Bulk Import Export",
        "Bitumen Trading",
        "Additive Marketing",
        "Petro Chemicals & Petroleum Products Marketing",
      ],
      rightList: null,
    },
  };

  const currentData = servicesData[active];

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* 🔶 HERO */}
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

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl md:text-6xl font-bold text-orange-400">
            SERVICES
          </h1>

          <div className="text-sm md:text-lg text-orange-300 mt-2">
            <TypeAnimation
              sequence={[
                "PROCESS ENGINEERING EXPERTS",
                "GLOBAL REPROCESS TECHNOLOGIES",
                5000,
              ]}
              repeat={Infinity}
            />
          </div>
        </div>
      </div>

      {/* 🔶 MAIN */}
      <div className="max-w-7xl mx-auto p-4 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* 🔸 LEFT MENU */}
        <div className="bg-gray-200 p-4 rounded">
          <h2 className="text-xl font-bold mb-3">SERVICES</h2>

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
        <div
          id="services-content" // ✅ ADDED
          className="md:col-span-2 bg-white rounded shadow p-4 overflow-hidden"
        >
          <div
            className={`transition-all duration-500 ${
              animate
                ? "opacity-0 translate-x-10 blur-sm"
                : "opacity-100 translate-x-0 blur-0"
            }`}
          >
            <h2 className="text-2xl md:text-3xl text-center font-bold mb-4">
              {active}
            </h2>

            {/* 🔹 IMAGES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {currentData.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  className="w-full h-48 object-cover rounded hover:scale-105 transition duration-300"
                />
              ))}
            </div>

            {/* 🔹 PARAGRAPH */}
            {currentData.desc && (
              <p className="text-center font-serif md:text-left text-sm md:text-base mb-6 font-medium">
                {currentData.desc}
              </p>
            )}

            {/* 🔹 BULLETS */}
            {(currentData.leftList || currentData.rightList) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {currentData.leftList && (
                  <ul className="list-disc font-serif pl-6 space-y-2 text-sm md:text-base">
                    {currentData.leftList.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}

                {currentData.rightList && (
                  <ul className="list-disc font-serif pl-6 space-y-2 text-sm md:text-base">
                    {currentData.rightList.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;