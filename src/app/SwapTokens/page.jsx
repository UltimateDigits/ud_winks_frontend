"use client";
import HeaderLogo from "../../components/HeaderLogo";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";

const MintToken = () => {
  const router = useRouter();

  const [tokenB, setTokenB] = useState();
  const [tokenA, setTokenA] = useState();
  const [blockchain, setBlockchain] = useState();

  return (
    <div className="bg-gradient-to-t from-customStart via-customStart to-blue-950 min-h-screen">
      <HeaderLogo />
      <div className="items-center mx-auto pt-[16px]">
        <div className="text-center">
          <p className=" text-[24px] md:text-[30px] font-bold">Swap Tokens</p>
          <p className="pt-[8px] text-customFontColor">
            Exchange one type of cryptocurrency for another. Choose from popular
            blockchains and swap efficiently with real-time conversion rates.
          </p>
        </div>
        <div className=" w-[350px] md:w-[455px] mx-auto pt-[34px] space-y-4 text-[16px]">
          <div className="">
            <label className="block text-sm font-medium" htmlFor="blockchain">
              From Blockchain
            </label>
            <select
              id="community"
              className="bg-gray-800 border border-gray-700 rounded w-full h-[44px] p-2 text-white"
              value={blockchain}
              onChange={(e) => setBlockchain(e.target.value)}
              required
              defaultValue=" Ethereum"
            >
              <option value="" disabled>
                From Blockchain
              </option>
              <option value="Community1">Ethereum</option>
              <option value="Community2">Ethereum</option>
              <option value="Community3">Ethereum</option>
              <option value="Community4">Ethereum</option>
            </select>
          </div>
          <div className="">
            <label
              className="block text-sm font-medium"
              htmlFor="contractaddress"
            >
              Token A
            </label>
            <input
              type="text"
              id="walletaddress"
              className="bg-gray-800 border border-gray-700 rounded w-full h-[44px] p-2 text-white"
              placeholder="0x123abc456def789ghi012jkl345mno678pqr901s"
              value={tokenA}
              required
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="">
            <label
              className="block text-sm font-medium"
              htmlFor="contractaddress"
            >
              Token B
            </label>
            <input
              type="text"
              id="walletaddress"
              className="bg-gray-800 border border-gray-700 rounded w-full h-[44px] p-2 text-white"
              placeholder="0x123abc456def789ghi012jkl345mno678pqr901s"
              value={tokenB}
              required
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        
          <div className=" py-3">
            <button
              className=" w-[350px] md:w-[455px] h-[48px] bg-customBorder border-2 border-customButtonStroke font-bold hover:bg-blue-900 rounded-[32px] flex justify-center items-center"
              onClick={() => router.push("/SuccessLink")}
            >
              Create Wink
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6 ml-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MintToken;
