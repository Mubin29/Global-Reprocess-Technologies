import React from "react";

const ContactPage = () => {
  return (
    <div className="w-full">

      {/* 🔶 MSP / HERO SECTION */}
      {/* <section className="bg-gray-900 text-white py-16 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-[#E5A31D]">
          Contact Us
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-300">
          Get in touch with Global Reprocess Technologies for engineering,
          process design, and global export solutions.
        </p>
      </section> */}

      {/* 🗺️ MAP SECTION */}
   
        <div className="w-full h-[300px] md:h-[400px]">
    <iframe
      title="Global Reprocess Technologies Location"
      src="https://www.google.com/maps?q=Patva%20Chambers%2C%20Clive%20Street%2C%20Masjid%20Bunder%2C%20Mumbai%20400009&z=16&output=embed"
      className="w-full h-full border-0 rounded-lg"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
    </div>


      {/* 📞 MAIN CONTACT SECTION */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* 🏢 LEFT - CORPORATE OFFICE */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">
              <span className="text-[#E5A31D]">Corporate</span> Headoffice:
            </h2>

            <h3 className="font-semibold text-lg">
              GLOBAL REPROCESS TECHNOLOGIES
            </h3>

            <p className="text-sm text-gray-700">
              32, Patva Chambers, 3rd floor, Clive street Opp. Masjid Rly Stn
              (East), Mumbai - 400009, INDIA
            </p>

            <div>
              <p className="font-semibold">Marketing & Finance:</p>
              <p>Email: grtceo@gmail.com</p>
              <p>Phone: +91 9819832060</p>
            </div>

            <div>
              <p className="font-semibold">Engineering & Process Design:</p>
              <p>Email: grtvinaysingh@gmail.com</p>
              <p>Phone: +91 7666234555</p>
            </div>
          </div>

          {/* 🌍 MIDDLE EAST CONTACT */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">
              <span className="text-[#E5A31D]">Middle East</span> Contact:
            </h2>

            <div>
              <p className="font-semibold">Marketing & Finance:</p>
              <p>Email: grtceo@gmail.com</p>
              <p>Phone: +91 9819832060</p>
            </div>

            <div>
              <p className="font-semibold">Engineering & Process Design:</p>
              <p>Email: grtvinaysingh@gmail.com</p>
              <p>Phone: +971 56 601 3459</p>
            </div>

            <div>
              <p>Email: sales@globalreprocess.com</p>
              <p>Email: info@globalreprocess.com</p>
            </div>
          </div>

          {/* 📝 RIGHT - CONTACT FORM */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold text-[#E5A31D] mb-4">
              Contact Us
            </h2>

            <form className="space-y-4">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-3 border rounded-lg w-full"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-3 border rounded-lg w-full"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="p-3 border rounded-lg w-full"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="p-3 border rounded-lg w-full"
                />
              </div>

              <textarea
                placeholder="Message"
                rows="4"
                className="p-3 border rounded-lg w-full"
              ></textarea>

              <button
                type="submit"
                className="bg-[#E5A31D] text-white px-6 py-3 rounded-lg w-full hover:bg-yellow-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>


        </div>
      </section>
    </div>
  );
};

export default ContactPage;