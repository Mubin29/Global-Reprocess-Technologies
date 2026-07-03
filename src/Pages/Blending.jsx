import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

// ✅ HERO IMAGES
import tech1 from "../asset/tech1.avif";
import tech2 from "../asset/tech2.avif";
import hero5 from "../asset/Hero Image 5.jpg";

// ✅ CONTENT IMAGES
import blend1 from "../asset/blend1.avif";
import blend2 from "../asset/blend2.avif";
import blend3 from "../asset/blend3.avif";
import blend4 from "../asset/blend4.avif";
import blend5 from "../asset/blend5.avif";
import blend6 from "../asset/blend6.avif";
import blend7 from "../asset/blend7.avif";
import blend8 from "../asset/blend8.avif";
import blend9 from "../asset/blend9.avif";

const BlendingPage = () => {
  // 🔶 HERO SLIDER
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [tech1, tech2, hero5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // 🔶 MENU ITEMS
  const menuItems = [
    "Lube Oil Blending",
    "Grease Blending Plant",
    "Petroleum Jelly blending Plant",
    "Speciality Additives Plant",
  ];

  const [active, setActive] = useState(menuItems[0]);
  const [animate, setAnimate] = useState(false);

  const handleClick = (item) => {
    if (item === active) return;

    setAnimate(true);
    setTimeout(() => {
      setActive(item);
      setAnimate(false);
    }, 250);
  };

  // 🔶 DYNAMIC CONTENT DATA
  const blendingData = {
    "Lube Oil Blending": {
      bullets: [
        "Additive weighing mounted vessel.",
        "Base oil heating and Agitated Blending vessel.",
        "Storage tanks of Raw base oil and Finished lube oil as per the grade manufactured.",
        "Filling line of the lube oils into drums or in consumer pack through filling machines.",
        "Cartoon packing of consumer packs for delivery.",
      ],
      desc1:
        "Lube oil blending and additive mixing is a fully automatic batch process plant,which can be done in multiple parallel lines, each consisting of one additive weighing and mixing vessel and base oil blender.",
      desc2:
        "The project can be controlled automatically by PLC and SCADA based control system.",
      images: [blend1, blend2, blend3],
      products: [
        "2 T oil",
        "20W40 oil",
        "Multipurpose Engine oil",
        "Heavy duty engine oil",
        "Transmission oil",
        "Metal Cutting oil",
        "Transformer oil",
        "Gear oil",
        "Hydraulic oil",
        "Synthetic oil"
      ],
      capacity: "10 MTD TO 200 MTD",
    },

    "Grease Blending Plant": {
      bullets: [],
      desc1:
        "Grease making is also a blending process of different base oils with appropriate quality of chemicals such as calcium ,sodium,litihium etc. Then the grease is homogenized and milled through a miller machine,before packing it in barrels and consumer packs ,we make multi purpose grease plant in which you can make all type of greases as per your requirement",
        
        desc2:
        "Purity, Uniformity, Stability are the main characteristics of our grease quality.",
      images: [blend4, blend5],
      products: [
        "Calcium Base",
        "Sodium Base",
        "Aluminium Base",
        "Lithium Base",
        "Extreme Pressure",
        "Multipurpose ",
        "Polyurea",
      ],
      capacity: "5 MTD TO 100 MTD",
    },

    "Petroleum Jelly blending Plant": {
      bullets: [],
      desc1:
        "The PETROLEUM JELLY plant consists of Blending vessel with agitator,Cooling vessel and all pipe lines are made of SS304 material. Petroleum jelly making is a hot blending process of white mineral oil with appropriate quality and quantity of paraffin wax and microcrystalline wax. Then the petroleum jelly is cooled before packing it in barrels for bulk sales and also in consumer packs with various perfume scented qualities ,we make multi purpose petroleum jelly plant",
      desc2:
        "",
      images: [blend6, blend7,],
      products: [
        "Cosmetic grade petroleum jelly.",
        "Pharma grade petroleum jelly.",
      ],
      capacity: "5 MTD TO 50 MTD",
    },

    "Speciality Additives Plant": {
      bullets: [ ],
      desc1:
        "Additives making is also a chemically oriented blending process, Additives are the main ingredients of any finished product in petroleum industry, many additives are added to base oil to convert it into different grades of lubricant oil, from simple 2T oil to multi purpose heavy duty engine oil to hydraulic oils, gear oils,brake oils,metal cutting oils, ATF (Auto transmission oils) etc. all depend on additives blending, we make specialty ADDITIVE manufacturing plant as per the requirements of additives to be manufactured.",
      desc2:
        "Produced in controlled environments to ensure accurate formulation.",
      images: [blend8, blend9,],
      products: [
        "Multipurpose Engine Oil Additive",
        "Heavy Duty Engine Oil Additive",
        "Multi Grade Additive",
        "2T Engine Oil Additive",
        "Marine Oil Additive",
        "Gear Oil Additive",
        "Hydraulic Brake Fluid",
        "Transformer oil Additive",
        "Turbine oil Additive",
        "Automatic Transmission Fluid Additive",
        "Pour Point Depressant (PPD)",
        "Viscosity Index Improver (VII)",
        "Hydraulic Oil Additive",
        "Anti-Wear oil Additive",
        "Water Soluble Cutting Oil Additive",
        "Metal Cutting Oil Additive",
        "Heat Transfer Oil Additive",
        "Rust & Corrosion Inhibitor",
        "Extreme Pressure Additive",
        "Magnesium Petroleum Sulphonate TBN 400",
        "Calcium Petroleum Sulphonate TBN 400",
        "Calcium Petroleum Sulphonate TBN 400",
        "Sodium Petroleum Sulphonate",
      ],
      capacity: "1 MTD TO 10 MTD",
    },
  };

  const currentData = blendingData[active];

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* 🔶 HERO SECTION */}
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
            BLENDING
          </h1>

          <div className="text-sm md:text-lg font-semibold tracking-widest mt-2 text-orange-300">
            <TypeAnimation
              sequence={["GLOBAL REPROCESS TECHNOLOGIES", 5000]}
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
          <h2 className="text-xl font-bold mb-3">BLENDING</h2>

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

          <div
            className={`transition-all duration-300 ${
              animate ? "opacity-0 translate-y-4" : "opacity-100"
            }`}
          >
            <h2 className="text-2xl md:text-3xl text-center font-bold mb-4">
              {active}
            </h2>

            {/* 🔹 BULLETS (optional hide) */}
            {currentData.bullets.length > 0 && (
              <ul className="list-disc font-serif pl-6 space-y-2 text-sm md:text-base">
                {currentData.bullets.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}

            {/* 🔹 DESCRIPTION */}
            <p className="mt-4 text-black font-serif text-sm md:text-base text-justify">
              {currentData.desc1}
            </p>

            <p className="mt-2 text-black font-serif text-justify text-sm md:text-base">
              {currentData.desc2}
            </p>

            {/* 🔹 IMAGES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5">
              {currentData.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  className="w-full h-40 object-cover rounded transition-transform duration-500 hover:scale-105"
                />
              ))}
            </div>

            {/* 🔹 FINAL PRODUCT */}
            <div className="mt-6">
              <h3 className="font-bold font-serif text-lg mb-2">
                Final product:
              </h3>
              <ul className="list-disc font-serif pl-6 text-sm md:text-base space-y-1">
                {currentData.products.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <p className="mt-4 font-serif text-sm md:text-base">
                Standard plant sizes: {currentData.capacity}
              </p>
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

export default BlendingPage;