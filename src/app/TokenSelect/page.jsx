"use client"
import { useRouter } from "next/navigation";
import HeaderLogo from "../../components/HeaderLogo";
import Footer from "@/components/Footer";


const TokenSelect = () => {
  const router = useRouter();

  return (
    <div className="bg-gradient-to-t from-customStart via-customStart to-blue-950 min-h-screen">
      <HeaderLogo />
      <div className="items-center mx-auto pt-[16px]">
        <div className="text-center">
          <p className=" text-[24px] text-white md:text-[30px] font-bold">
            Select Token
          </p>
          <div className=" space-x-0 space-y-10 md:space-y-0 md:space-x-20 pt-10 text-2xl items-center font-semibold flex-row md:flex-col">
            <button className=" w-[250px] h-[100px] md:h-[200px] bg-gradient-to-br hover:bg-gradient-to-tl from-customStart1 to-customEnd2 rounded hover:scale-95"
            onClick={() => router.push("/TransferCrypto")}
            >
                Native Token
            </button>
            <button className=" w-[250px] h-[100px] md:h-[200px] bg-gradient-to-br hover:bg-gradient-to-tl from-customStart1 to-customEnd2 rounded hover:scale-95"
            onClick={() => router.push("/TransferCrypto")}
            >
                Non-native Token
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TokenSelect;
