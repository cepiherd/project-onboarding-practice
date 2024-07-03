'use client'
export const Footer = () => {
    return (
        <div className="bg-[#F6F6F6] w-[480px] h-auto t-[2976px]">
            <div className="p-[32px]">
                <div>
                    <div className="flex flex-col items-center justify-center gap-[16px]">
                        <label className="text-[20px] font-[500] w-[287px] h-[28px]">Download Rumah Zakat Apps!</label>
                        <p className="text-[14px] font-[400] text-[#707070] w-[416px] h-[44px] text-center">
                            Semua Tentang Laporan Donasi Anda, Tatakelola Kami, Dan Kebahagiaan Mereka. Download Aplikasinya di:
                        </p>
                    </div>
                    <div className="flex items-center justify-center gap-[22px] pt-[30px]">
                        <img src="/Google Play.png" width={155} height={46} alt="Google Play"/>
                        <img src="/App Store.png" width={155} height={46} alt="App Store"/>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-[16px]">
                        <label className="text-[20px] font-[500] pt-[30px]">Follow akun media sosial kami :</label>
                        <div className="flex justify-center items-center gap-[16px]">
                            <img src="/Facebook.svg" width={24} height={24} alt="Facebook"/>
                            <img src="/Twitter.svg" width={24} height={24} alt="Twitter"/>
                            <img src="/Instagram.svg" width={24} height={24} alt="Instagram"/>
                            <img src="/Youtube.svg" width={24} height={24} alt="Youtube"/>
                            <img src="/Tiktok.svg" width={24} height={24} alt="Tiktok"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#191919] border-b-[3px] border-b-[#F26522] text-center py-[10px] w-full">
                <label className="text-[14px] text-[#ffffff]">Copyright © 2024 Rumah Zakat</label>
            </div>
        </div>
    )
}

export default Footer;
