"use client";
import { useRouter } from "next/navigation";
import HeaderLogo from "../../components/HeaderLogo";
import Footer from "@/components/Footer";

const TransferError = () => {
  const router = useRouter();

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
        <div className=" w-[350px] md:w-[455px] mt-[34px] bg-customGrayFill border-2 border-customGrayStroke text-center rounded mx-auto">
          <div className=" p-6">
            <p className=" flex justify-center items-center gap-2 font-medium text-[20px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                  clip-rule="evenodd"
                />
              </svg>
              Payment Failed
            </p>
            <p className=" pt-2 text-customFontColor">
              Not enough funds to complete the transaction. <br /> Please check
              your balance and try again.
            </p>
          </div>
        </div>
        <div className=" py-6">
          <button
            className="w-[350px] md:w-[455px] h-[48px] bg-customBorder border-2 border-customButtonStroke font-bold hover:bg-blue-900 rounded-[32px] flex justify-center mx-auto items-center"
            onClick={() => router.push("/TransferCrypto")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            Go Back
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TransferError;
