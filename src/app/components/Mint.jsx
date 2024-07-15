"use client";
import HeaderLogo from "../../components/HeaderLogo";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { setUserData } from "../UserSlice";
import { useSelector, useDispatch } from "react-redux";
import { ethers } from "ethers";
import { useAccount, useEnsName } from 'wagmi'
import {
    useConnectModal,
    useAccountModal,
    useChainModal,
  } from '@rainbow-me/rainbowkit';
const MintToken = (data) => {

    const { openConnectModal } = useConnectModal();
    const { openAccountModal } = useAccountModal();
    const { openChainModal } = useChainModal();
  const router = useRouter();
  const userr = useSelector((state) => state.userdata);
  const dispatch = useDispatch();
  const [address, setAddress] = useState();
  const [abi, setAbi] = useState();
  const [functionName, setFunctionName] = useState();
  const [blockchain, setBlockchain] = useState();

  console.log("data",data);

  const createWink =async () => {
    console.log("Address", data.data.contractAddress);
    console.log("amount", abi);
    console.log("chain", data.data.blockchain);
    console.log("name",data.data.functionName);
    const func = data.data.functionName;
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
    
    

        const contract = new ethers.Contract(data.data.contractAddress, data.data.abi, signer);
console.log("con",contract);

try {
    const tx = await contract[func]("https://gateway.pinata.cloud/ipfs/QmUUaGU6c8H4mYdkGMJKRBMsaTg1A8HFHV15j6mLPPDWd9");

    console.log("tx",tx);
    await tx.wait();
    alert("Transaction successful!");
} catch (error) {
    console.log("calleing eerror", error);
}

    } catch (error) {
      console.log("error in creating link" , error);
    }
      }

  return (
    <div className="bg-gradient-to-t from-customStart via-customStart to-blue-950 min-h-screen">
      <HeaderLogo />
      <div className="items-center mx-auto pt-[16px]">
        <div className="text-center">
          <p className=" text-[24px] md:text-[30px] font-bold">Mint Tokens</p>
          <p className="pt-[8px] text-customFontColor">
            Create your own tokens by specifying a contract address and ABI
            details. <br className=" hidden md:flex lg:hidden" /> Select your preferred blockchain to mint tokens.
          </p>
        </div>
        <div className="w-[350px] md:w-[455px] mx-auto pt-[34px] space-y-4 text-[16px]">
          <div className="">
            <label
              className="block text-sm font-medium"
              htmlFor="contractaddress"
            >
              Contract Address
            </label>
            <input
              type="text"
              id="walletaddress"
              className="bg-gray-800 border border-gray-700 rounded w-full h-[44px] p-2 text-white"
              placeholder="0x123abc456def789ghi012jkl345mno678pqr901s"
              value={data.data.contractAddress}
              required
              readonly

            />
          </div>
          <div className="">
            <label className="block text-sm font-medium" htmlFor="message">
              ABI
            </label>
            <textarea
              id="amount"
              className="bg-gray-800 border border-gray-700 rounded w-full h-[120px] p-2 text-white"
              value={data.data.abi}
              required
            readonly
            />
          </div>
          <div className="">
            <label className="block text-sm font-medium" htmlFor="functionname">
              Function Name
            </label>
            <input
              type="text"
              id="amount"
              className="bg-gray-800 border border-gray-700 rounded w-full h-[44px] p-2 text-white"
              placeholder="00"
              value={data.data.functionName}
              required
              readonly
            />
          </div>
          <div className="">
            <label className="block text-sm font-medium" htmlFor="community">
              Select Blockchain
            </label>
            <select
              id="community"
              className="bg-gray-800 border border-gray-700 rounded w-full h-[44px] p-2 text-white"
              value={data.data.chainDetails}
              required
              defaultValue=" Ethereum"
              readonly
            >
              <option value="" disabled>
                Select Blockchain
              </option>
              <option value="Ethereum">Ethereum</option>
              <option value="Base">Base</option>
              <option value="Polygon">Polygon</option>
              <option value="Degen">Degen</option>
              <option value="Base Sepolia">Base Sepolia</option>

            </select>
          </div>
          <div className=" py-3">
            <button
              className="w-[350px] md:w-[455px] h-[48px] bg-customBorder border-2 border-customButtonStroke font-bold hover:bg-blue-900 rounded-[32px] flex justify-center items-center"
              onClick={() => createWink()}
            >
            Mint
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
      <div className=" text-center p-2 md:p-5 opacity-70">
        <p className="text-customFontColor">© Ultimate Digits 2024</p>
      </div>
    </div>
  );
};

export default MintToken;
