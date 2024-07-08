import { useRouter } from "next/navigation";
import HeaderLogo from '../../components/HeaderLogo'

const Home = () => {
  const router = useRouter();

  return (
    <div className="bg-gradient-to-t from-customStart via-customStart to-blue-950 min-h-screen">
        <HeaderLogo />
      <div className="items-center mx-auto pt-[16px]">
        <div className="text-center">
          <p className="text-[30px] font-bold">Create your shareable link</p>
          <p className="pt-[8px]">Welcome back to Ultimate Winks</p>
        </div>
        <div className="w-[455px] mx-auto pt-[34px] space-y-4 text-[16px] font-bold">
          <button
            className="w-[455px] h-[48px] border-2 border-customBorder hover:bg-blue-950 rounded-[32px]"
            onClick={() => router.push("/TransferCrypto")}
          >
            Transfer Crypto
          </button>
          <button
            className="w-[455px] h-[48px] border-2 border-customBorder hover:bg-blue-950 rounded-[32px]"
            onClick={() => router.push("/MintTokens")}
          >
            Mint Tokens
          </button>
          <button
            className="w-[455px] h-[48px] border-2 border-customBorder hover:bg-blue-950 rounded-[32px]"
            onClick={() => navigateTo("/SwapTokens")}
          >
            Swap Tokens
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
