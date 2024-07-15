import HeadLogo from "@/assets/HeaderLogo.png";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HeaderLogo = () => {
  const router = useRouter();

  return (
    <div>
      <div className="pt-10 mx-auto flex justify-center">
        <button
          onClick={() => router.push("/")}
        >
          <Image
            src={HeadLogo}
            alt="Header Logo"
            className=" h-[36px] w-[228px]"
          />
        </button>
      </div>
      <div className="pt-[64px]">
        <Image src={Logo} alt="Logo" className="h-[48px] w-[48px] mx-auto" />
      </div>
    </div>
  );
};

export default HeaderLogo;
