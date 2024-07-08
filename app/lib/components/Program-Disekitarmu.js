'use client'
export const ProgramDisekitarmu = () => {
    return (
        <div className="flex-col">
            <div className="flex justify-between w-[462px] mb-[10px]">
                <div className="flex flex-col mx-[17px]">
                    <label className="text-[#191919] text-[18px] font-[500] ">Program Disekitar mu</label>
                    <label className="text-[14px] font-[400] text-[#707070]">Pilih dan lihat program di daerahmu</label>
                </div>
                    <div className="flex border-[1.5px] border-[#E3E3E3] rounded-[8px] gap-[8px] items-center px-[15px]">
                        <img src="/Lokasi.svg" width={16} height={16}/>
                        <label className="text-[#F26522] text-[14px] font-[500]">Bandung</label>
                        <img src="/Dropdown.svg" width={16} height={16}/>
                    </div>
            </div>
            <div className="relative bg-[#68C6F0] rounded-[10.55px]  mt-[14px] w-[448px] overflow-hidden mx-[16px]">
                <img src="/Bg Program Disekitarmu.svg" className="absolute inset-0 w-[234px] h-[auto] ml-[139px] object-cover z-0"/>
                <div className="flex items-center relative z-10">
                    <img src="/Air.svg" width={100} height={100} className="w-[153.39px] h-[124px] justify-between"/>
                    <div className="flex flex-col justify-center gap-[1.32px]">
                        <label className="text-[#ffffff] text-[18.47px] font-[600]">📣Wakaf Sumber Air</label>
                        <label className="text-[#ffffff] text-[13.19px] font-[500]">Wakaf Sumber Air Dusun Sukamaju</label>
                        <label className="italic text-[#f5f5f5] text-[10.55px] font-[400] mt-[4px]">Yuk bantu santri dan warga mendapat air bersih</label>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-[10px]">
                <img src="/Slide.svg" width={58} height={8}/>
            </div>
        </div>
    )
}

export default ProgramDisekitarmu;
