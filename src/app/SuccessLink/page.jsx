"use client";
import { useRouter } from "next/navigation";
import HeaderLogo from "../../components/HeaderLogo";
import HeadLogo from "../../assets/HeaderLogo.png";
import Image from "next/image";
import React from "react";
import Footer from "@/components/Footer";

const SuccessLink = () => {
  const router = useRouter();

  const handleShareLink = () => {
    const linkToCopy = "https://ultimatewinks/000001"; // Replace with your actual link
    navigator.clipboard.writeText(linkToCopy)
      .then(() => {
        console.log('Link copied to clipboard:', linkToCopy);
        alert('Link copied to clipboard!');
        router.push("/SuccessLink"); // Redirect to the same page or another page
      })
      .catch((err) => {
        console.error('Failed to copy link:', err);
        alert('Failed to copy link. Please try again.');
      });
  };

  return (
    <div className="bg-gradient-to-t from-customStart via-customStart to-blue-950 min-h-screen">
      <HeaderLogo />
      <div className="items-center mx-auto pt-[16px]">
        <div className="text-center">
          <p className=" text-[24px] md:text-[30px] font-bold">Link Created Successfully!</p>
          <p className="pt-[8px] text-customFontColor md:w-[455px] mx-auto">
            Your link is ready to share. Click on one of the platforms below to
            start sharing:
          </p>
        </div>
        <div className="w-[350px] md:w-[455px] mt-[34px] bg-gradient-to-br from-customStart1 to-customEnd2 rounded mx-auto">
          <div className=" p-6">
            <Image className=" w-[118px] h-[18px]" src={HeadLogo} />
            <p className=" text-[16px] font-bold pt-[30px]">
              https://ultimatewinks/000001
            </p>
          </div>
        </div>
        <div className=" py-6">
          <button
            className="w-[350px] md:w-[455px] h-[48px] bg-customBorder border-2 border-customButtonStroke font-bold hover:bg-blue-900 rounded-[32px] flex justify-center items-center mx-auto"
            onClick={handleShareLink}
          >
            Share Link
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SuccessLink;
