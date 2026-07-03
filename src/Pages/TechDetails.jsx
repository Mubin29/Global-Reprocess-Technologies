import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import distillationImg from "../asset/distillation1.jpg";
import distillation2 from "../asset/distillation2.jpg";
import wfeImg from "../asset/wfe1.jpg";
import solventImg from "../asset/solvent1.jpg";
import solvent2 from "../asset/solvent2.jpg";
import solvent3 from "../asset/solvent3.jpg";
import distillation3 from "../asset/distillation3.avif";
import wfe2 from "../asset/wfe2.avif";
import wfe3 from "../asset/wfe3.jpg";

// ✅ IMPORT CLIENT IMAGES (FIX)
import client1 from "../asset/client1.jpg";
import client2 from "../asset/client2.png";
import client3 from "../asset/client3.png";
import client4 from "../asset/client4.jpg";
import client5 from "../asset/client5.png";
import client6 from "../asset/client6.png";
import client7 from "../asset/client7.jpg";
import client8 from "../asset/client8.jpg";

const techData = {
  "dehydration-distillation-filtration": {
    title: "Dehydration, Distillation & Filtration",
    description:
     "First, the waste oil (ULO) is pre-treated by dehydration process to remove solids and free water, Then, the oil is distilled under vacuum to remove the remaining water and lighter ends (gas, and diesel).After this step, the dehydrated oil and degassed oil enters vacuum process under high vacuum in specially designed VACUUM SYSTEM and treated in order to distill the BASE oil, High vacuum allows to recover more oil while reducing operating temperatures which means less thermal cracking of the oil. Typically, up to 65% to 80%of the BASE oil is distilled overhead and recovered.The first 8 to 10% is lighter cuts ( diesel) which can be used to fire the burners for heating in the system and the remaining 15% is black, heavy slurry consisting of oil additives originally blended with the oil as well as metallic and carbon impurities. This slurry quickly solidifies at ambient temperature, and can subsequently be sold as a by-product for mixing in bitumen, Balance 10% to 12 % is loss of water and gases during dehydration and distillation process. Then distilled oil undergoes post treatment for filteration with activated clay bleaching process to remove colour and free radicals. The oil is now ready as BASE oil with almost the same specifications of virgin base oil before it can be blended with an additive package to be used as lubricating oil for automobiles. Standard plant sizes: 25 MTD TO 200 MTD. Note:The above Process may differ or change, for improvement, as new technologies are constantly being adapted by our R&D team.",
     
    images: [distillationImg, distillation2, distillation3],
  },

  "wfe-distillation-filtration": {
    title: "WFE Distillation & Filtration",
    description:
      "Wiped film evaporation (WFE) process is acid free, and sludge free this technology produces higher yield by minimizing bottom residue and maximizing reclamation of base oil. After the pretreatment process of removing water and lighter cut, the feed is subjected to wiped film evaporator (WFE) system before activated clay bleaching and filtration process .The WFE system is designed specially with short path wiped film evaporators and operates under controlled vacuum so that the distillation occurs well below the temperature that would cause the oil to crack and to separate the base oil fractions approximately 80%.The dissolved additives and other impurities in the ULO feed end up in the solid residue at the bottom of the WFE unit, which can be sold as a by- product for blending with bitumen or for burning in bricks refractory’s, The distilled ase oil fractions produced in the WFE system are then subjected to final finishing as per the requirements of base oil use. Standard plant sizes: 25 MTD TO 200 MTD. Note:The above Process may differ or change, for improvement, as new technologies are constantly being adapted by our R&D team.",

    images: [wfeImg, wfe2, wfe3],
  },

  "wfe-solvent-process": {
    title: "WFE with Solvent Process",
    description:
      "Solvent process: The BASE oil recovered from WFE process is treated for decoloring by solvent process and subjected to solvent process treatment, special solvent is added in separate vessel in calculated proportion to the distilled base oil and blended , then the solvent mixed distilled base oil is settled and processed by atmospheric distillation and then condensed ,which results in recovery of good quality base oil and 99 % solvent is also recovered again by vacuumzation to be used again in next batch.Standard plant sizes: 25 MTD TO 500 MTD. Note: The above Process may differ or change, for improvement, as new technologies are constantly being adapted by our R&D team.",
      
    images: [solventImg, solvent2, solvent3],
  },
};

const TechDetails = () => {
  const { type } = useParams();
  const navigate = useNavigate();

  const tech = techData[type];

  if (!tech) {
    return <h1 className="text-center mt-10">Page Not Found</h1>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* 🔶 Banner */}
      <div className="relative h-[250px] md:h-[350px]">
        <img
          src={tech.images[0]}
          alt={tech.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-orange-500 text-2xl md:text-4xl font-bold text-center px-4">
            {tech.title}
          </h1>
        </div>
      </div>

      {/* 🔶 Content */}
      <div className="max-w-6xl mx-auto px-4 py-10">

        <button
          onClick={() => navigate(-1)}
          className="mb-6 font-semibold bg-orange-300 px-3 py-1 rounded-lg"
        >
          ← Back
        </button>

        {/* 🔶 Overview */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Overview
        </h2>

        <p className="text-gray-600 text-justify mb-8">
          {tech.description}
        </p>

        {/* 🔶 Image Grid */}
        <div className="grid gap-4 mb-10 sm:grid-cols-2 lg:grid-cols-3">
          {tech.images.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow">
              <img
                src={img}
                alt={`tech-${index}`}
                className="w-full h-[250px] object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>

      </div>

      {/* 🔶 Clients Section */}
      <h2 className="text-3xl md:text-5xl font-bold text-yellow-500 mb-12 text-center">
        Our Clients
      </h2>

      <div className="max-w-6xl mx-auto px-4 pb-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center">
        {[
          client1,
          client2,
          client3,
          client4,
          client5,
          client6,
          client7,
          client8,
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

export default TechDetails;