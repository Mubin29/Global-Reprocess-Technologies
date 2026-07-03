import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-orange-100 text-gray-800 auto">
      <div className="max-w-7xl mx-auto py-10 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

  {/* 🔹 Company Info */}
  <div>
    <img
      src="src/asset/grt-logo.png"
      alt="logo"
      className="h-16 mb-4"
    />

    <p className="text-sm">
      <span className="font-bold"><i class="fa-solid fa-map-pin"></i> Corporate Headoffice:</span> 32, Patva Chambers, 3rd floor,
      Clive street Opp. Masjid Rly Stn (East), Mumbai - 400 009, INDIA
    </p>

    <div className="mt-4 space-y-2 text-sm">
      <p className="font-semibold"><i class="fa-solid fa-phone-volume"></i> +91 9819832060</p>
      <p className="font-semibold"><i class="fa-solid fa-envelope"></i>  grtceo@gmail.com</p>
    </div>
  </div>

  {/* 🔹 Technology */}
  <div>
    <h3 className="text-xl font-semibold mb-4">Technology</h3>
    <ul className="space-y-2 text-sm">
      <li>Dehydration, Distillation, Filtration</li>
      <li>WFE Distillation, Filtration</li>
      <li>WFE With Solvent Process</li>
    </ul>
  </div>

  {/* 🔹 Blending */}
  <div>
    <h3 className="text-xl font-semibold mb-4">Blending</h3>
    <ul className="space-y-2 text-sm">
      <li>Lube Oil Blending</li>
      <li>Grease Blending Plant</li>
      <li>Petroleum Jelly Blending Plant</li>
      <li>Speciality Additives Plant</li>
    </ul>
  </div>

  {/* 🔹 Quick Links */}
  <div>
  <h3 className="text-xl font-semibold mb-4">Quick Link</h3>
  <ul className="space-y-2 text-sm">
    <li>
      <Link to="/" className="hover:text-orange-600">
        Home
      </Link>
    </li>
    <li>
      <Link to="/About" className="hover:text-orange-600">
        About
      </Link>
    </li>
    <li>
      <Link to="/Services" className="hover:text-orange-600">
        Services
      </Link>
    </li>
    <li>
      <Link to="/Contact" className="hover:text-orange-600">
        Contact Us
      </Link>
    </li>
  </ul>
</div>  
</div>

      {/* Copyright */}
      <div className="bg-orange-200 text-center py-4">
        <p className="text-sm font-medium">
          All Copyright © 2026 Global Reprocess technologies. All Rights Reserved.
         <p> Made by Mubin Mulla</p>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
