'use client'
export const NavbarBottom = () => {
    return (
        <div className="pt-[8px] pl-[32px] flex justify-between items-center">
            <div className="flex flex-col items-center gap-[4px]">
                <img src="/Home.svg" width={22} height={22} className="pb-[2px]"/>
                <div className="text-[12px] text-[#838383]">
                    <label>Home</label>
                </div>
            </div>
            <div className="flex flex-col items-center ">
                <img src="/Hati.svg" width={21} height={21}/>
                <div className="text-[12px] pt-[8px] text-[#838383]">
                    <label>Donasi Saya</label>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <img src="/Kalkulator.svg" width={15} height={19.5}/>
                <div className="text-[12px] pt-[8px] text-[#838383]">
                    <label>Kalkulator Zakat</label>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <img src="/Keranjang.svg" width={19.5} height={19.5}/>
                <div className="text-[12px] pt-[8px] text-[#838383]">
                    <label>Keranjang</label>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <img src="/Profile.svg" width={19.5} height={19.5}/>
                <div className="text-[12px] pt-[8px] text-[#838383]">
                    <label>Profile</label>
                </div>
            </div>
        </div>
    )
}

export default NavbarBottom;