import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";
// PETCO images 
import petco1 from "../asset/petco1.jpeg";
import petco2 from "../asset/petco2.jpeg";
import petco3 from "../asset/petco3.jpeg";
import petco4 from "../asset/petco4.jpeg";
import petco5 from "../asset/petco5.jpeg";
import petco6 from "../asset/petco6.jpeg";
// BACO Images
import baco1 from "../asset/baco1.jpg"; 
import baco2 from "../asset/baco2.jpg"; 
import baco3 from "../asset/baco3.jpg"; 
// MRCO IMAGES
import mrco1 from "../asset/mrco1.jpg";
import mrco2 from "../asset/mrco2.jpg";
import mrco3 from "../asset/mrco3.jpg";
import mrco4 from "../asset/mrco4.jpg";
import mrco5 from "../asset/mrco5.jpg";
import mrco6 from "../asset/mrco6.jpg";
//upco Images
import upco1 from "../asset/upco1.jpg";
import upco2 from "../asset/upco2.jpg";
import upco3 from "../asset/upco3.jpg";
import upco4 from "../asset/upco4.jpg";
import upco5 from "../asset/upco5.jpg";
import upco6 from "../asset/upco6.jpg";
// AJCO Images
import ajco1 from "../asset/ajco1.jpg";
import ajco2 from "../asset/ajco2.jpg";
import ajco3 from "../asset/ajco3.jpg";
import ajco4 from "../asset/ajco4.jpg";
import ajco5 from "../asset/ajco5.jpg";
import ajco6 from "../asset/ajco6.jpg"; 
// KECO Images 
import keco1 from "../asset/keco1.jpg";
import keco2 from "../asset/keco2.jpg";
import keco3 from "../asset/keco3.jpg";
import keco4 from "../asset/keco4.jpg";
import keco5 from "../asset/keco5.jpg";
import keco6 from "../asset/keco6.jpg";
// MCO Images
import mco1 from "../asset/mco1.jpeg";
import mco2 from "../asset/mco2.jpeg";
import mco3 from "../asset/mco3.jpeg";


const ProjectPage = () => {
  const navigate = useNavigate();

  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = [
    "/src/asset/tech1.avif",
    "/src/asset/tech2.avif",
    "/src/asset/Hero Image 5.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);


  const allProjects = [
    {
      id: 1,
      title: "PETCO - EGYPT Project",
      location: "Egypt",
      year: "2012",
      type: "Oil & Gas",
      description:
        "The PETCO Egypt Project is a significant industrial initiative focused on petroleum-related activities. One notable project undertaken by PETCO in Egypt involves oil and gas exploration and production. PETCO has been active in projects that contribute to optimizing production capabilities, including heavy-duty processes like steel reinforcement and concrete work packages at major construction sites such as the Golden Pyramids Plaza in Cairo​",
      images: [petco1, petco2, petco3, petco4, petco5, petco6],
      
    },

    {
      id: 2,
      title: "BACO - RIYADH Project",
      location: "Saudi Arabia",
      year: "2021",
      type: "Pipeline",
      description: "The BACO-Riyadh Project, undertaken by Global Reprocess Technologies, focused on petroleum and lubricant processing. This project, launched in 2013, involved activities like blending processes for lube oils, grease, and petroleum jelly. The BACO project played a part in developing infrastructure for reprocessing and re-refining used oils, which is environmentally friendly and helps reduce crude oil processing costs.",
      images: [baco1, baco2, baco3],
    },
    {
      id: 3,
      title: "MRCO - UAE Project",
      location: "UAE",
      year: "2020",
      type: "Refinery",
      description: "The MRCO Project in the UAE, led by Global Reprocess Technologies (GRT), was completed in 2014. This project focuses on used lube oil (ULO) re-refining, which is an environmentally friendly process to treat and reuse waste oil. GRT is known for providing turnkey solutions in this field, offering advanced technologies like vacuum distillation and solvent processes for color removal and filtration. GRT's projects, such as MRCO, contribute significantly to oil conservation by treating ULO and converting it into reusable base oils or other industrial products. The company has completed over 11 projects globally, including in regions like the Middle East, Africa, and the Gulf",
      images: [mrco1, mrco2, mrco3, mrco4, mrco5, mrco6],
    },
    {
      id: 4,
      title: "UPCO - KSA Project (2018)",
      location: "KSA",
      year: "2018",
      type: "Industrial",
      images: [upco1, upco2, upco3, upco4, upco5, upco6],
    },
    {
      id: 5,
      title: "AJCO - ANGOLA Project",
      location: "Angola",
      year: "2019",
      type: "Oil Processing",
      images: [ajco1, ajco2, ajco3, ajco4, ajco5, ajco6],
    },
    {
      id: 6,
      title: "KECO - EGYPT Project",
      location: "Egypt",
      year: "2023",
      type: "Energy",
      images: [keco1, keco2, keco3, keco4, keco5, keco6],
    },
    {
      id: 7,
      title: "Mini Crude Oil Refinery Project",
      location: "India",
      year: "2022",
      type: "Refinery",
      description: "We supply complete turnkey project for crude oil refining This project is specially made for extracting various gases and petroleum products from the available crude oil. Crude oil is processed by molecular vacuum column distillation and various cuts of gases and petroleum products are received at different boiling points.",
      images: [mco1, mco2, mco3,],
    },
    {
      id: 8,
      title: "Glycol Distillation Project",
      location: "India",
      year: "2021",
      type: "Chemical",
      description: "We supply complete turnkey project to reprocess waste mixed sludge generated by big refineries,petrochemical plants and pharmaceutical industries into value added products. All these big companies produce tons of chemical waste material everyday from their manufacturing process,which they want to get rid off in environmental friendly manner,these waste sludge are sold by these companies at very low prices or for free .which consists of 50 %water and chemically produced by-products from the original processed material.Our technologically advanced glycol reprocess plant uses distillation process to convert these waste chemical sludge into their original form by removing water and other impurities through various stages of molecular distillation and refining.",
      images: [mco1, mco2, mco3,],
    },
    {
      id: 9,
      title: "Waste to Fuel",
      location: "India",
      year: "2023",
      type: "Sustainability",
      description: "Converting waste materials into usable fuel.",
      images: [mco1, mco2, mco3,],
    },
  ];

  const [active, setActive] = useState(allProjects[0]);
  const [animate, setAnimate] = useState(false);

  const handleClick = (project) => {
    if (project.id === active.id) return;

    setAnimate(true);
    setTimeout(() => {
      setActive(project);
      setAnimate(false);
    }, 250);
  };

  return (
    <div className="bg-gray-100 min-h-screen">

      {/*  ...... HERO SECTION ...... */}
      <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden">
        {heroImages.map((img, index) => (
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
            ACHIEVEMENTS
          </h1>

          <div className="text-sm md:text-lg font-semibold tracking-widest mt-2 text-orange-300 h-[30px]">
            <TypeAnimation
              sequence={[
                "PROJECTS DONE BY...",
                "GLOBAL REPROCESS TECHNOLOGIES",
                5000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>
        </div>
      </div>

      {/*  ...... PROJECT SECTION  ...... */}
      <div className="p-3 md:p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* LEFT PANEL */}
          <div className="bg-gray-200 p-4 rounded">
            <h2 className="text-xl font-bold mb-3">PROJECTS</h2>

            <div className="space-y-2">
              {allProjects.slice(0, 6).map((p) => (
                <div
                  key={p.id}
                  onClick={() => handleClick(p)}
                  className={`cursor-pointer hover:bg-orange-300 px-3 py-2 transition-all duration-300 border-b
                  ${
                    active.id === p.id
                      ? "bg-orange-300 text-white scale-[1.02]"
                      : "text-yellow-600 hover:bg-gray-300 hover:text-white"
                  }`}
                >
                  {p.title}
                </div>
              ))}
            </div>

            <h2 className="text-xl font-bold mt-6 mb-3">
              OTHER PROJECTS
            </h2>

            <div className="space-y-2">
              {allProjects.slice(6).map((p) => (
                <div
                  key={p.id}
                  onClick={() => handleClick(p)}
                  className={`cursor-pointer hover:bg-orange-300 px-3 py-2 transition-all duration-300 border-b
                  ${
                    active.id === p.id
                      ? "bg-orange-300 text-white scale-[1.02]"
                      : "text-yellow-600 hover:bg-gray-300 hover:text-white"
                  }`}
                >
                  {p.title}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="md:col-span-2 bg-white p-4 rounded shadow overflow-hidden">
            
            <div
              className={`transition-all duration-300 ${
                animate
                  ? "opacity-0 translate-y-4"
                  : "opacity-100 translate-y-0"
              }`}
            >
              <h2 className="text-2xl text-center text-orange-400 font-bold mb-2">
                {active.title}
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm mb-4">
                <div className="bg-gray-100 p-2 rounded">
                  <span className="font-bold">Location:</span> {active.location}
                </div>
                <div className="bg-gray-100 p-2 rounded">
                  <span className="font-bold">Year:</span> {active.year}
                </div>
                <div className="bg-gray-100 p-2 rounded">
                  <span className="font-bold">Type:</span> {active.type}
                </div>
                <div className="bg-gray-100 p-2 rounded">
                  <span className="font-bold">Status:</span> Completed
                </div>
              </div>

              <p className="text-gray-800 text-justify font-serif mb-4 text-sm md:text-base">
                {active.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {active.images.map((img, i) => (
                  <div key={i} className="overflow-hidden rounded">
                    <img
                      src={img}
                      alt=""
                      className="w-full h-32 md:h-40 object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
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

export default ProjectPage;