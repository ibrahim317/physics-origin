"use client";
import React from "react";
import payment from "@/src/lib/payment";

const PayButton = (props: any) => {
  if (props.free === 1) {
    return (
      <button
        onClick={async () => {
          const a = await payment("");
          console.log(a);
        }}
        className="text-yellow-400 b-5 border-white border-soild border-2 self-center p-3  rounded-lg"
      >
        شراء
      </button>
    );
  } else {
    return (
      <button className="text-yellow-400 text-base font-bold border-white border-soild border-2 self-center p-3  rounded-[20px]">
        اشترك مجاناً
      </button>
    );
  }
};

export default PayButton;
