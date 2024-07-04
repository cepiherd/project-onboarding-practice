'use client'

import { useState } from 'react';

export const Program = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowTooltip(false);
  };

  
  return (
    <div
      className="relative flex flex-col gap-4 rounded-none border border-white bg-gradient-to-r from-[#FC9868] to-[#F26522] p-5 shadow-md cursor-pointer" 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center gap-2 ">
        <h2 className="text-white font-sans text-lg ">Program Mendesak </h2> <img src="image 166.png"></img>
      </div>
      <p className="text-white text-sm ">Sahabat, mereka butuh kita! yuk Bantu!</p>

      {/* First Product */}
      <div className="relative flex items-center gap-4 rounded-md bg-white shadow-md p-0 top-1">
        <img src="image.png" alt="Zakat untuk kemanusiaan Palestina" className="w-157 h-110 object-cover rounded-none" />
        <div className="flex flex-col justify-between">
          <p className="text-lg font-sans text-black">Zakat untuk kemanusiaan Palestina</p>
          <div className="flex items-center gap-2 mt-6">
            <img src="currency-rupiah.png" className='mb-4' />
            <p className="font-sans text-gray-500 text-xs mb-4 ">Rp 1.234.567.789</p>
            <img src="user-group.png" className="mb-4" />
            <p className="text-xs font-sans text-gray-600 mb-4">3k Donatur</p>
          </div>
        </div>
      </div>

      {/* Second Product */}
      <div className="relative flex items-center gap-4 rounded-md bg-white shadow-md p-0">
        <img src="image (1).png" alt="Syiar Quran Palestina" className="w-158 h-110 object-cover rounded-none" />
        <div className="flex flex-col justify-between">
          <p className="text-lg font-sans text-black">Syiar Quran Palestina</p>
          <div className="flex items-center gap-2 mt-12">
            <img src="currency-rupiah.png" className="mb-3"/>
            <p className="text-xs font-sans text-gray-600 mb-3">Rp 1.234.567.789</p>
            <img src="user-group.png" className="mb-3"/>
            <p className="text-xs font-sans text-gray-600 mb-3">3k Donatur</p>
          </div>
        </div>
      </div>

      {/* Tooltip (if any) */}
      {showTooltip && (
        <div
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm font-bold p-2 rounded-md shadow-md"
          style={{ transformOrigin: 'bottom center' }}
        >
          Tooltip!
        </div>
      )}
    </div>
  );
};