"use client";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const PayButton = (props: any) => {
  const payment = async (course: any, user: any) => {
    const data = { course, user };
    try {
      const res = await axios.post("/api/paytabs", data);
      console.log(res);
      window.open(res.data, "_self");
    } catch (err) {
      console.error("Error :", err);
    }
  };

  return (
    <button
      onClick={async () => {
        await payment(props.course, props.user);
      }}
      className=" text-lg px-4 py-2 self-center mx-4 max-md:self-start min-w-max text-black bg-[#F9C500] rounded-[25px] hover:bg-[#ffffff] transition ease-in-out duration-300"
    >
      اشترك
    </button>
  );
};

export default PayButton;
