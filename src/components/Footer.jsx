import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="lg:px-20 mdx:px-8 mx-auto w-full">
        <div className="flex items-center py-4 mdx:flex-col">
          <div>
            <ul className="flex items-center flex-wrap gap-2 font-semibold">
              <li>Help</li>
              <li>Rental information</li>
              <li>SIXT fir business</li>
              <li>Travel agencies</li>
              <li>SIXT partners</li>
              <li>SIXT NEWS</li>
              <li>imprint privacy</li>
              <li>Do not sell my personal information</li>
              <li>Terms & conditions</li>
            </ul>
          </div>
          <div className="text-xs text-[#B1B5BE]">&#169;	SIXT 2024</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
