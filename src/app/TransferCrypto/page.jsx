// /src/app/TransferCrypto/page.jsx

"use client";
import HeaderLogo from "../../components/HeaderLogo";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";
import axios from "axios";
import { setUserData } from "../UserSlice";
import { useSelector, useDispatch } from "react-redux";

const TransferCrypto = () => {
  const router = useRouter();
  const userr = useSelector((state) => state.userdata);
  const dispatch = useDispatch();
  const [address, setAddress] = useState();
  const [amount, setAmount] = useState();
  const [blockchain, setBlockchain] = useState();
  const [showPopup, setShowPopup] = useState(false);


  const tokens = {
    base:{
      usdc:"asfas",
      usdt:"asdfsaf"
    },
    eth:{

    }
  }

  const handleClosePopup = () => {
    setShowPopup(false);
    router.push("/"); // Redirect to home after closing popup
  };

  const createWink = async () => {
    console.log("Address", address);
    console.log("amount", amount);
    console.log("chain", blockchain);

    try {
      const res = await axios.post("http://localhost:8080/winks/createWink", {
        walletAddress: address,
        amount: amount,
        chainDetails: blockchain,
        type: "1",
      });

      console.log(res);
      if (res.status === 200) {
        console.log(res.data);
        dispatch(
          setUserData({
            address: "SDgwegwefgwe", // Example data, replace with actual data from res.data if needed
            link: res.data.link,
            type: "sdfsdfsdf", // Example type, replace with actual type from res.data if needed
          })
        );

        router.push("/SuccessLink")
        // setShowPopup(true); // Show the success popup
      }
    } catch (error) {
      console.log("error in creating link");
    }
  };

  return (
    <div className="bg-gradient-to-t from-customStart via-customStart to-blue-950 min-h-screen">
      <HeaderLogo />
      <div className="items-center mx-auto pt-[16px]">
        <div className="text-center">
          <p className="text-[24px] text-white md:text-[30px] font-bold">
            Transfer
          </p>
          <p className="pt-[8px] text-customFontColor">
            Send cryptocurrency securely to any wallet address. Choose the
            blockchain, specify the amount, and transfer instantly.
          </p>
        </div>
        <div className="w-[350px] md:w-[455px] mx-auto pt-[34px] text-white space-y-4 text-[16px]">
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
              placeholder="0x0000000000000000000000000000000000000000"
              value={address}
              required
              onChange={(e) => setAddress(e.target.value)}
            />
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
              value={amount}
              required
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className=" py-3">
            <button
              className="w-[350px] md:w-[455px] h-[48px] bg-customBorder border-2 border-customButtonStroke font-bold hover:bg-blue-900 rounded-[32px] flex justify-center items-center"
              onClick={() => createWink()}
            >
              Create Wink
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
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Footer />
      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gradient-to-br from-customStart1 to-customEnd2 rounded p-8 text-center">
            <p className="text-xl text-white flex items-center font-semibold mb-4">
              Successfully transferred!
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-12 pl-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                />
              </svg>
            </p>
            <button
              className="text-white bg-customBorder border-2 border-customButtonStroke font-bold hover:bg-blue-900 rounded-[32px] flex justify-center items-center p-2 w-full"
              onClick={handleClosePopup}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-8 pr-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
              Go back home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransferCrypto;
