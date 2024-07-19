"use client";
import { useState, useEffect } from "react";
import Home from "./Home/Home";
// import Loader from "@/Components/Loader";
import "@/app/globals.css";
// import { Analytics } from "@vercel/analytics/react";
import { useSearchParams } from 'next/navigation';
import axios from "axios";
import TransferCrypto from "./components/Transfer";
import MintToken from "./components/Mint";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [wink, setWink] = useState(false)
  const [setType, setSetType] = useState(0)
  const searchParams = useSearchParams();
  const [data, setData] = useState()
  const search = searchParams.get("search");
  useEffect(() => {
    const handleComplete = () => {
      setTimeout(() => {
        setLoading(false);
      }, 0);
    };

    if (document.readyState === "complete") {
      handleComplete();
    } else {
      window.addEventListener("load", handleComplete);
      return () => window.removeEventListener("load", handleComplete);
    }
  }, []);


  const getWink = async(search)=> {
    console.log("sea", search);
    try {
      const res  = await axios.get(`http://localhost:8080/winks/getWink/${search}`,{
        uniqueId:search
      })

      if(res.status === 200){
        console.log(res.data);
        setData(res.data)
        if(res.data.type === 1){
          setSetType(1)
        }else if(res.data.type === 2){
          setSetType(2)
        } else if(res.data.type === 3){
          setSetType(3)
        }
      }
    } catch (error) {
      console.log("error egging the wink",error);
    }
  }
  useEffect(() => {
    if (search) {
      // router.push(`/search?search=${search}`);

      console.log("search", search);
      setWink(true)
      getWink(search);




    }
  }, [search]);

  return (
    <main className="">
      {/* <Analytics /> */}
      {/* {loading && <Loader />} */}
      <div className={loading ? "blur-sm" : ""}>
      {wink ? setType === 1 && <TransferCrypto data={data} /> || setType === 2 && <MintToken data={data} /> :   <Home />}
      </div>
    </main>
  );
}