import React from "react";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  return (
    <div className="bg-gray-100">

      {/* 🔶 Top Banner */}
      <div className="relative h-[300px] md:h-[400px] w-full">
  
      {/* 🔶 Background Image */}
      <img
        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
        alt="Banner"
        className="w-full h-full object-cover"
      />

      {/* 🔶 Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">

       {/* Static Heading */}
        <h1 className="text-3xl md:text-6xl font-bold text-orange-400">
          ABOUT US
        </h1>

        {/* Typewriter Text */}
        <div className="text-sm md:text-lg font-semibold tracking-widest mt-2 text-orange-300 h-[30px]">
          <TypeAnimation
            sequence={[
              "GLOBAL REPROCESS TECHNOLOGIES",
              2000,
              "",
              500,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </div>

      </div>
      </div>

      {/* 🔶 Main Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Global Reprocess Technologies
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed text-justify">
            Global Reprocess Technologies (GRT) Group head quartered in MUMBAI -INDIA with its turnkey projects presence in more than 5 countries . With a history dating back more than ten years, the group has emerged as a leading USED LUBE OIL REFINING technology player across the globe with focus on emerging markets.
          </p>

          {/* Global Presence */}
          <h3 className="text-2xl font-semibold mt-10 text-gray-800">
            Global Presence
          </h3>

          <p className="mt-4 text-gray-600 leading-relaxed text-justify">
            The GRT Group with its presence in India, and internationally in Gulf region, Middle East, Africa, has a workforce of Professionals Engineers, Process designers, Weldors & Fitters and is represented by three partners .
            Our global clientele comprises of individuals & industrial clients who have reposed their faith in our competency, both technical as well as commercial.
            The GRT Group represents a globally present, locally driven business organisation in the field of USED OIL REFINING technology.
          </p>

          <p className="mt-3 text-gray-600 leading-relaxed text-justify">
            Our global clientele includes both individual and industrial
            customers who trust our technical expertise and commercial
            reliability.
          </p>

         {/* Global Presence 2 */}
          <h3 className="text-2xl font-semibold mt-10 text-gray-800">
            Global Presence
          </h3>

          <p className="mt-4 text-gray-600 leading-relaxed text-justify">
            GRT’s ULO saga spans over years, making it an industry leader today in the field of total OIL management. With 11 projects completed in five countries, ( K.S.A, UAE, OMAN , EGYPT, ANGOLA.) GRT is a pure-play ULO technology multinational offering a wide range of solutions focused on conservation, optimisation, recycling and reuse of resources. </p>

          <p className="mt-4 text-gray-600 leading-relaxed text-justify">
          With strong Research & Development ( R&D) and a passion for innovation, GRT has honed its skills in handling EPC projects of any scale across any petroleum sector or region.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed text-justify">
          The company’s key competences, developed over years of plant-building experience, lie in the turnkey execution and operation of Used Lube Oil and waste treatment plants for both the individual client and industrial sectors. GRT has a successful track record of executing over 11 industrial projects globally with quality and commitment to timely delivery.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed text-justify">
          Recycling and reuse augurs well for the environment as well as for industries. By setting up reuse and recycling systems, the limited oil supply can be better prioritised. With focus on industrial tie ups, GRT’s offerings are based on the conviction that “OIL is too precious to be used just once”. The company has numerous standout references that employ advanced multi refining systems and testify to its expertise in the domain of OIL reuse.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed text-justify">
          The company’s recycling capabilities are highly pronounced in the GULF ,MIDDLE EAST and AFRICA industrial sector .
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed text-justify">
           The effective management of ULO generated by rapidly growing cars has become a serious issue affecting the health and productivity of burgeoning population. GRT promotes sustainability with ULO treatment solutions that ensure environmentally friendly discharge or reuse of treated sludge . In addition, GRT promotes a comprehensive ULO treatment model that focuses on resource recovery through a combination of innovative technologies.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed text-justify">
          GRT provides a range of optimal solutions extending from highly effective WFE distillation and SOLVENT treatment (NMP ) for complete color-removal. The key technologies employed include single and dual-stage distillation under vacuum and filteration by activated clay or decoloring by solvent processes,
          </p>

          <div className="mt-4">
            <img
              src="/src/asset/About1.jpeg"
              alt="Plant 1"
              className="w-full h-64 md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-md"
            />
          </div>

          <p className="mt-4 text-gray-600 leading-relaxed text-justify">
          Our global references ensure treatment of around 500 ton of ULO every day in various plants across the world, thus protecting the people and the environment. Plants like Universal projects in K.S.A , treating 75 ton daily & Millenium Refinery , UAE treating 120 ton daily of ULO every day, are some of the marquee references in our ULO refining portfolio.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-10">

          {/* IMAGES */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="src\asset\About3.jpg"
              alt="Plant 1"
              className="rounded-lg shadow-md h-48 md:h-60 object-cover w-full"
            />
            <img
              src="src\asset\About4.jpg"
              alt="Plant 2"
              className="rounded-lg shadow-md h-48 md:h-60 object-cover w-full"
            />
          </div>

          {/* 🔶 Our Philosophy */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">
              Our Philosophy :
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Our objective is to provide a growing number of customers with access to clean oil as well as to secure environmentally-compatible disposal of waste oils and industrial waste. We are committed to contributing in a sustainable manner to environmental protection and an enhanced quality of life.
            </p>

            <p className="mt-3 text-gray-600 leading-relaxed">
              This vision drives continuous innovation, development of new
              technologies, and optimization of existing processes.
            </p>
          </div>

          {/* 🔶 Our Vision */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">
              Our Vision :
            </h3>

             <p className="mt-4 text-gray-600 leading-relaxed">
              Global Reprocess Technologies (GRT) is a professionally-managed Indian multinational having market leadership in emerging markets and significant position in the global market, both in the EPC and service sector of the Used Lube Oil treatment business.
              GRT shall encourage and practice a culture of caring, trust and continuous learning while meeting expectations of customers employees, vendors and society.
              GRT shall be an innovative entrepreneurial and empowered team committed to total customer satisfaction and value creation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <img
              src="src\asset\About2.jpeg"
              alt="Plant 1"
              className="w-full h-64 md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-md"
            />
          </div>

            {/* 🔶 Water Reclamation */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">
              Water Reclamation :
            </h3>

             <p className="mt-4 text-gray-600 leading-relaxed text-justify">
              GRT has been a pioneer in state-of-the-art water reuse and reclamation systems recovered from the ULO after dehydration process the recovered water is utilized for gardening purpose.
            </p>
          </div>


             {/* 🔶 DIESEL Reclamation */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">
              DIESEL Reclamation 
            </h3>

             <p className="mt-4 text-gray-600 leading-relaxed text-justify">
              GRT process starts with degassing of the ULO to reclaim DIESEL which is meant for domestic and industrial applications in the plant itself.
            </p>
          </div>

            {/* 🔶 Sludge Reclamation */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">
              Sludge Reclamation 
            </h3>

             <p className="mt-4 text-gray-600 leading-relaxed text-justify">
             With the increase in volume of treated sewage, cities and municipalities across the globe are grappling with the issue of sludge management. Sludge is rich in organic matter; when treated properly, it becomes a resource rather than a liability. GRT ’s proven technological know-how in sludge management allows the utilization of valuable mixing material in turn serves as the binding source for asphalt in road making thereby rendering it energy-neutral.
            </p>    

            <p className="mt-4 text-gray-600 leading-relaxed text-justify">
            The savings that result from such a self-sustaining process are substantial both in terms of operational expenditure as well as in minimizing the carbon footprint of the ULO treatment facility.
            </p>
          
            <p className="mt-4 text-gray-600 leading-relaxed text-justify">
            GRT has established itself as an ideal partner for this common challenge with an extensive selection of chemical, physical and biological processes for the treatment of ULO . Our leading technological competence is underpinned by a high degree of process know-how and a profound understanding of customer needs.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed text-justify">
            We engineer complete plants, which guarantee safe adherence to the required parameters, are designed to accommodate future developments and are characterized by high levels of technical reliability.
            </p>
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

export default About;