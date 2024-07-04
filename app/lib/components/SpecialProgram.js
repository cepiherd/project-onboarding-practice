'use client'
export const SpecialProgram = () => {
  return (
    <div className="container mx-auto p-1">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="text-left md:text-left">
        <h1 className="text-lg font-medium font-noto-sans mb-1" style={{ fontSize: '18px', fontWeight: 500, lineHeight: '26px', textAlign: 'left', color: '#191919' }}>
  Program Spesial Pekanan
  </h1>
  <h1 className="text-sm font-normal font-noto-sans mb-1" style={{ fontSize: '14px', fontWeight: 400, lineHeight: '22px', textAlign: 'left', color: '#707070' }}>
  Jangan terlewat! Daftar direset setiap pekan!
</h1>
        </div>
        <div>
        <h1 className="text-xs font-medium font-noto-sans" style={{ fontSize: '12px', fontWeight: 500, lineHeight: '20px', textAlign: 'left', color: '#191919' }}>
        Direset Dalam :
</h1>
<h1 className="text-xs font-normal font-noto-sans text-center" style={{ fontSize: '12px', fontWeight: 400, lineHeight: '20px', textAlign: 'center', fontFamily: 'Noto Sans', color: '#CB2C2C' }}>
  <span className="border border-red-500 rounded px-1">5 Hari</span>
  : 
  <span className="border border-red-500 rounded px-1">18</span>
  : 
  <span className="border border-red-500 rounded px-1">30</span>
  : 
  <span className="border border-red-500 rounded px-1">59</span>
</h1>
        </div>
      </div>
      <div className="mt-4">
      <div className="flex flex-col md:flex-row md:flex-wrap -mx-4">
    {/* Card 1 */}
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-0 mb-4 flex md:flex-row items-center">
        <div className="md:w-1/3">
            <img className="w-full h-full object-cover rounded-l-lg" src="specialprogram1.png" alt="Image" style={{ fontSize: '12px', fontWeight: 400, lineHeight: '20px', textAlign: 'center', fontFamily: 'Noto Sans', color: '#CB2C2C' }} />
        </div>
        <div className="md:w-2/3 md:ml-4 mt-4 md:mt-0">
            <h1 className="text-md font-sans font-semibold text-gray-800 mb-2">Infak Masjid Islamic Center Tunanetra</h1>
            <div className="flex items-center justify-between">
            <img src="Group 43.png" className=""></img><p className="text-sm text-gray-600 mr-auto ml-1" >1.234.567.789</p>
                
                <div className="flex items-center ml-1">
                    <img src="Vector.png" alt="Logo" className="w-4 h-4 mr-1" />
                    <p className="text-sm text-gray-600 mr-10">3k Donatur</p>
                </div>
            </div>
        </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-0 mb-4 flex md:flex-row items-center">
        <div className="md:w-1/3">
            <img className="w-full h-full object-cover rounded-l-lg" src="specialprogram2.png" alt="Image" style={{ fontSize: '12px', fontWeight: 400, lineHeight: '20px', textAlign: 'center', fontFamily: 'Noto Sans', color: '#CB2C2C' }} />
        </div>
        <div className="md:w-2/3 md:ml-4 mt-4 md:mt-0">
            <h1 className="text-md font-sans font-semibold text-gray-800 mb-2">Infak Sumber Air Jayapura</h1>
            <div className="flex items-center justify-between">
            <img src="Group 43.png" className=""></img><p className="text-sm text-gray-600 mr-auto ml-1" >1.234.567.789</p>
                
                <div className="flex items-center ml-1">
                    <img src="Vector.png" alt="Logo" className="w-4 h-4 mr-1" />
                    <p className="text-sm text-gray-600 mr-10">3k Donatur</p>
                </div>
            </div>
        </div>
    </div>

    {/* Card 3 */}
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-0 mb-4 flex md:flex-row items-center">
        <div className="md:w-1/3">
            <img className="w-full h-full object-cover rounded-l-lg" src="specialprogram3.png" alt="Image" style={{ fontSize: '12px', fontWeight: 400, lineHeight: '20px', textAlign: 'center', fontFamily: 'Noto Sans', color: '#CB2C2C' }} />
        </div>
        <div className="md:w-2/3 md:ml-4 mt-4 md:mt-0">
            <h1 className="text-md font-sans font-semibold text-gray-800 mb-2">Wakaf Kendaraan Pejuang Pedalaman</h1>
            <div className="flex items-center justify-between left-3">
            <img src="Group 43.png" className=""></img><p className="text-sm text-gray-600 mr-auto ml-1" >1.234.567.789</p>
                
                <div className="flex items-center ml-1">
                    <img src="Vector.png" alt="Logo" className="w-4 h-4 mr-1" />
                    <p className="text-sm text-gray-600 mr-10">3k Donatur</p>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

    </div>
  );
};
