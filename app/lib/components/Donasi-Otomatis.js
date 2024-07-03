export const DonasiOtomatis = () => {
    return (
        <div className="">
            <label className="text-[#191919] text-[18px] font-[500] ml-[17px]">Donasi Otomatis</label>
            <div className="relative bg-[#08CA95] rounded-[10.55px] p-3 mt-[14px] w-[448px] overflow-hidden mx-[16px]">
                <img src="/Bg Donasi Otomatis.svg" className="absolute inset-0 w-[234px] h-[auto] ml-[139px] object-cover z-0"/>
                <div className="flex justify-center items-center relative z-10">
                    <img src="/Kalendar.svg" width={100} height={100} className="mr-[10px]"/>
                    <div className="flex flex-col justify-center gap-[1.32px]">
                        <label className="text-[#ffffff] text-[18.47px] font-[600] mr-[15px]">📣Buat Donasimu Otomatis!</label>
                        <label className="text-[#ffffff] text-[13.19px] font-[500]">Sekarang, beramal baik jadi lebih mudah</label>
                        <label className="italic text-[#f5f5f5] text-[10.55px] font-[400] mt-[4px]">Atur jadwal donasi untuk program pilihan sahabat</label>
                    </div>
                    <img src="/Panah Kanan.svg" width={24} height={24} className="ml-[10px]"/>
                </div>
            </div>
        </div>
    )
}

export default DonasiOtomatis;
