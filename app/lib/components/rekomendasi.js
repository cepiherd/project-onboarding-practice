// Muhammad Kasyaf Anugrah
'use strict'
import React from 'react';

const Program = () => {
  // Array URL gambar
  const images = [
    '/Sedekah.png', // Gambar 1
    '/Sedekah-subuh.png', // Gambar 2
    '/Sedekah-jariyah.png', // Gambar 3
    '/Sedekah-pangan.png', // Gambar 4
    '/Sedekah-quran.png', // Gambar 5
    '/Sangan-indonesia.png', // Gambar 6
  ];

  // Array teks program
  const programTexts = [
    'Infaq', // Teks 1
    'Sedekah Subuh Renovasi Masjid Sagu', // Teks 2
    'Sedekah Air Bersih', // Teks 3
    'Sedekah Pangan Yatim', // Teks 4
    'Syiar Quran', // Teks 5
    'Sedekah Pangan Indonesia Timur', // Teks 6
  ];

  return (
    <div className="w-[480px] h-[948.5px] p-4 pb-6 gap-3 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Rekomendasi Program Lainnya</h2>
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-md overflow-hidden"
          >
            <div className="flex items-center justify-center h-[128.65px] w-[216.37px]">
              <img src={image} alt={`Box ${index + 1}`} className="h-full w-full object-cover" />
            </div>
            <div className="p-2 flex flex-col items-start bg-neutral-100">
              <p
                className="w-[184px] h-[48px] text-black gap-0 font-bold flex items-center"
                style={{ 
                  fontFamily: 'Noto Sans', 
                  fontSize: '16px', 
                  fontWeight: 500, 
                  lineHeight: '24px', 
                  textAlign: 'left',
                  color: 'var(--color-neutral-100, #191919)'
                }}
              >
                {programTexts[index]}
              </p>
              <p
                className="w-[184px] h-[20px] text-left gap-0 flex items-center"
                style={{ 
                  fontFamily: 'Noto Sans', 
                  fontSize: '12px', 
                  fontWeight: 400, 
                  lineHeight: '20px', 
                  color: 'var(--color-neutral-70, #838383)' 
                }}
              >
                <img src="/Rp.png" alt="icon" className="mr-2 h-4 w-4 rounded-full" /> Rp 1.234.567.789
              </p>
              <p
                className="w-[184px] h-[20px] text-left gap-0 flex items-center"
                style={{ 
                  fontFamily: 'Noto Sans', 
                  fontSize: '12px', 
                  fontWeight: 400, 
                  lineHeight: '20px', 
                  color: 'var(--color-neutral-70, #838383)' 
                }}
              >
                <img src="/Vector.png" alt="icon" className="mr-2 h-4 w-4 rounded-full" /> 3k Donatur
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="w-[185px] h-[46px] text-center border rounded-md"
          style={{ 
            padding: '12px 24px', 
            gap: '20px', 
            borderRadius: '8px', 
            borderWidth: '1px', 
            borderColor: 'var(--color-neutral-70, #838383)', 
            opacity: '1', 
            backgroundColor: 'var(--color-neutral-10, #FFFFFF)',
            fontFamily: 'Noto Sans',
            fontSize: '16px',
            fontWeight: 500,
            lineHeight: '24px',
            textAlign: 'center',
            color: '#F26522'
          }}
        >
          Lihat Lebih Banyak
        </button>
      </div>
    </div>
  );
};

export default Program;
