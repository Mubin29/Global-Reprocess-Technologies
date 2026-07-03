import React, { useState } from "react";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); 
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <>
      {/* Header Section */}
      <header className="bg-[#f6f6f6] w-full h-[100px] mx-auto flex items-center justify-between px-[30px] shadow-md opacity-100 border-b-2 ">
        {/* Logo */}
        <div className="flex items-center gap-2">
      
          {/*  Logo */}
          <img
            src="src\asset\grt-logo.png"
            alt="Global reprocess technologies"
            className="w-32 h-12 sm:w-32 sm:h-8 md:w-44 md:h-12"
          />
          </div>

        {/* Navigation Links */}
         <nav className="max-lg:hidden flex gap-4 text-black font-medium text-2xl sm:text-xl">
          <a href="/" className="hover:text-orange-600">
            Home
          </a>
          <a href="/Technology" className="hover:text-orange-600">
            Technology
          </a>
          <a href="/Projects" className="hover:text-orange-600">
            Projects
          </a>
          <a href="/Blending" className="hover:text-orange-600">
            Blending
          </a>
          <a href="/Services" className="hover:text-orange-600">
            Services
          </a>
           <a href="/Fabrication" className="hover:text-orange-600">
            Fabrication
          </a>
           <a href="/About" className="hover:text-orange-600">
            About Us
          </a>
          <a href="/Contact" className="hover:text-orange-600">
            Contact Us
          </a>
        </nav>

        {/* Icons and Hamburger Menu */}
       <div className="flex items-center gap-2">
            {/* Search Button */}
            {/* <button
              className="text-black hover:text-orange-600 text-3xl md:text-base"
              onClick={toggleSearch} // Toggle search bar
            >
              <i className="fas fa-search text-sm md:text-lg sm:text-xl"></i>
            </button> */}


        {/* Sidebar Toggle Button */}
        <button
          className="text-black hover:text-orange-600 text-sm sm:text-base"
          onClick={toggleSidebar}
        >
          <i className="fas fa-bars text-sm md:text-lg sm:text-3xl"></i>
        </button>

        {/* Sidebar Section */}
        <div
          className={`fixed top-0 left-0 w-[250px] md:h-[700px] bg-[#f6f6f6] rounded-r-3xl shadow-lg transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
        >
          <button
            className="absolute top-4 right-4 text-black hover:text-orange-600"
            onClick={toggleSidebar}
          >
            <i className="fas fa-times"></i>
          </button>

    <nav className="mt-6 px-4">
       <ul className="space-y-4 text-black font-normal text-lg">
           <img src="src\asset\grt-logo.png" alt="COLLEGEPUR" className="p-3 "/>

      {/* Sidebar Links */}
      <li>
        <a
          href="/"
          style={{ backgroundColor: "#E5A31D", color: "white" }}
          className="flex items-center justify-between py-2 px-4 text-black rounded"
        >
          <span>
            <i className="fa-solid fa-home"></i> Home
          </span>
        </a>
      </li>
      <li>
        <a
          href="/Technology"
          style={{ backgroundColor: "#E5A31D", color: "white" }}
          className="block py-2 px-4 rounded"
        >
          <span><i class="fa-solid fa-gear"></i> Technology</span>
        </a>
      </li>
      <li>
        <a
          href="/Projects"
          style={{ backgroundColor: "#E5A31D", color: "white" }}
          className="block py-2 px-4 bg-purple-400 rounded"
        >
          <i class="fa-solid fa-bong"></i> Projects
        </a>
      </li>
      <li>
        <a
          href="/Blending"
          style={{ backgroundColor: "#E5A31D", color: "white" }}
          className="block py-2 px-4 bg-purple-400 rounded"
        >
          <i class="fa-brands fa-mixer"></i> Blending
        </a>
      </li>
      <li>
        <a
          href="/Services"
          style={{ backgroundColor: "#E5A31D", color: "white" }}
          className="block py-2 px-4 bg-purple-400 rounded"
        >
          <i className="fa-solid fa-arrow-rotate-right"></i> Services
        </a>
      </li>
      <li>
        <a
          href="/Fabrication"
          style={{ backgroundColor: "#E5A31D", color: "white" }}
          className="block py-2 px-4 bg-purple-400 rounded"
        >
        <i class="fa-solid fa-screwdriver-wrench"></i> Fabrication
        </a>
      </li>
      <li>
        <a
          href="/About"
          style={{ backgroundColor: "#E5A31D", color: "white" }}
          className="block py-2 px-4 bg-purple-400 rounded"
        >
          <i className="fa-solid fa-book"></i> About Us
        </a>
      </li>
      <li>
        <a
          href="/Contact"
          style={{ backgroundColor: "#E5A31D", color: "white" }}
          className="block py-2 px-4 bg-purple-400 rounded"
        >
          <i className="fa-solid fa-person-chalkboard"></i> Contact us
        </a>
      </li>
      <li>
      </li>

    </ul>
  </nav>
</div>

{/* Overlay for Sidebar */}
{isSidebarOpen && (
  <div
    className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
    onClick={toggleSidebar}
  ></div>
)}
 
    </div>
    </header>
    </>
  );
};

export default Header;
