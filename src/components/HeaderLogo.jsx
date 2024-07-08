import HeadLogo from "@/assets/HeaderLogo.png";
import Logo from "@/assets/logo.png";
import Image from "next/image";


const HeaderLogo = () => {
  return (
    <div>
      <div className="pt-16">
        <Image
          src={HeadLogo}
          alt="Header Logo"
          className="mx-auto h-[36px] w-[228px]"
        />
      </div>
      <div className="pt-[64px]">
        <Image src={Logo} alt="Logo" className="h-[48px] w-[48px] mx-auto" />
      </div>
    </div>
  );
};

export default HeaderLogo;
