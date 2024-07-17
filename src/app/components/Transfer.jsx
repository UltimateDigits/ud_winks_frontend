// /src/app/TransferCrypto/page.jsx

"use client";
import HeaderLogo from "../../components/HeaderLogo";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";
import axios from "axios";
import { setUserData } from "../UserSlice";
import { useSelector, useDispatch } from "react-redux";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { useAccount, useEnsName } from 'wagmi'
import { ethers } from "ethers";

import {
    useConnectModal,
    useAccountModal,
    useChainModal,
  } from '@rainbow-me/rainbowkit';
const TransferCrypto = (data) => {
    const { openConnectModal } = useConnectModal();
    const { openAccountModal } = useAccountModal();
    const { openChainModal } = useChainModal();
  const router = useRouter();
  const userr = useSelector((state) => state.userdata);
  const dispatch = useDispatch();
//   const [address, setAddress] = useState();
  const [amount, setAmount] = useState();
  const [blockchain, setBlockchain] = useState();
  const { address } = useAccount()

console.log("data",data);
  const createWink =async () => {
console.log("Address", data.data.walletAddress);
console.log("amount", data.data.amount);
console.log("chain", data.data.blockchain);

try {
    try {
        if(!address){
            openConnectModal()

        }
    } catch (error) {
        console.log("error");
    }

    const provider = window.ethereum != null ? new ethers.providers.Web3Provider(window.ethereum) : ethers.providers.getDefaultProvider();
    console.log("provider",provider)
    
        //signer
    
        const signer = provider.getSigner();
    
    console.log("signer",signer)

    const tx = await signer.sendTransaction({
        to: data.data.walletAddress,
        value: ethers.utils.parseEther(data.data.amount.toFixed(10).toString()),
      });

      console.log("tx",tx);
      await tx.wait();
      
} catch (error) {
  console.log("error in creating link" , error);
}
  }

  return (
    <div className="bg-gradient-to-t from-customStart via-customStart to-blue-950 min-h-screen">
      <HeaderLogo />
      <div className="items-center mx-auto pt-[16px]">
        <div className="text-center">
          <p className=" text-[24px] md:text-[30px] font-bold">Transfer</p>
          <p className="pt-[8px] text-customFontColor">
            Send cryptocurrency securely to any wallet address. Choose the
            blockchain, specify the amount, and transfer instantly.
          </p>
        </div>
        {/* <div className="flex justify-center px-0 py-4">      <ConnectButton />
</div> */}
        <div className="w-[350px] md:w-[455px] mx-auto pt-[34px] space-y-4 text-[16px]">
          <div className="">
            <label
              className="block text-sm font-medium"
              htmlFor="walletaddress"
            >
              Recipient&apos;s Wallet Address
            </label>
            <input
              type="text"
              id="walletaddress"
              className="bg-gray-800 border border-gray-700 rounded w-full h-[44px] p-2 text-white"
              placeholder="john@gmail.com"
              value={data.data.walletAddress}

              required
readonlu            />
          </div>
          <div className="">
            <label className="block text-sm font-medium" htmlFor="community">
              Select Blockchain
            </label>
            <select
              id="community"
              className="bg-gray-800 border border-gray-700 rounded w-full h-[44px] p-2 text-white"
              value={blockchain}
              onChange={(e) => setBlockchain(e.target.value)}
              defaultValue=" Ethereum"
              required
            >
              <option value="" disabled>
                Select Blockchain
              </option>
              <option value="Base">Base</option>
              <option value="Ethereum">Ethereum</option>
              <option value="Polygon">Polygon</option>
              <option value="Degen">Degen</option>
            </select>
          </div>
          <div className="">
            <label className="block text-sm font-medium" htmlFor="amount">
              Amount to Send
            </label>
            <input
              type="text"
              id="amount"
              className="bg-gray-800 border border-gray-700 rounded w-full h-[44px] p-2 text-white"
              placeholder="00"
              value={data.data.amount}
              required
            //   onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className=" py-3">
            <button
              className="w-[350px] md:w-[455px] h-[48px] bg-customBorder border-2 border-customButtonStroke font-bold hover:bg-blue-900 rounded-[32px] flex justify-center items-center"
              onClick={() => createWink()}
            >
Transfer              <svg
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

export default TransferCrypto;
