"use client"
import React from "react";

const Footer = () => {
    const date  = new Date();

  return (
    <footer>
      <div className="bg-black text-gray-500 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-2 sm:px-6 lg:px-8">
          <div>1</div>
          <div>2</div>
          <div>3 </div>
        </div>
      </div>
      <p className="text-center text-xs pt-8">
        © {date.getFullYear()} Music School. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
