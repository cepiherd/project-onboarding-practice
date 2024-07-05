'use client'

export const Menu = () => {
    return (
        <div className="pt-[8px] grid grid-cols-4 gap-5">
            <div className="flex flex-col items-center gap-[8px]">
                <img src="/Zakat.svg" width={48} height={48} className="pb-[2px]"/>
                <label className="text-[12px] text-[#191919] font-[500]">Zakat</label>
            </div>
            <div className="flex flex-col items-center gap-[8px]">
                <img src="/Superqurban.svg" width={48} height={48} className="pb-[2px]"/>
                <label className="text-[12px] text-[#191919] font-[500]">Superqurban</label>
            </div>
            <div className="flex flex-col items-center gap-[8px]">
                <img src="/Desaku Berqurban.svg" width={48} height={48} className="pb-[2px]"/>
                <label className="text-[12px] text-[#191919] font-[500] whitespace-nowrap">Desaku Berqurban</label>
            </div>
            <div className="flex flex-col items-center gap-[8px]">
                <img src="/Sedekah Subuh.svg" width={48} height={48} className="pb-[2px]"/>
                <label className="text-[12px] text-[#191919] font-[500]">Sedekah Subuh</label>
            </div>
            <div className="flex flex-col items-center gap-[8px]">
                <img src="/Wakaf.svg" width={48} height={48} className="pb-[2px]"/>
                <label className="text-[12px] text-[#191919] font-[500]">Wakaf</label>
            </div>
            <div className="flex flex-col items-center gap-[8px]">
                <img src="/Insidental.svg" width={48} height={48} className="pb-[2px]"/>
                <label className="text-[12px] text-[#191919] font-[500]">Insidental</label>
            </div>
            <div className="flex flex-col items-center gap-[8px]">
                <img src="/Beasiswa Baik.svg" width={48} height={48} className="pb-[2px]"/>
                <label className="text-[12px] text-[#191919] font-[500]">Beasiswa Baik</label>
            </div>
            <div className="flex flex-col items-center gap-[8px]">
                <img src="/Lainnya.svg" width={48} height={48} className="pb-[2px]"/>
                <label className="text-[12px] text-[#191919] font-[500]">Lainnya</label>
            </div>
        </div>
    );
};

export default Menu;
