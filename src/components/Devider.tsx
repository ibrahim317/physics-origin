import React from "react";

const Devider = () => {
  return (
    <div
      id="#DIV"
      className="smooth inset-x-0 -bottom-1 h-1 translate-y-0 transform bg-[#F9C500]  dark:bg-cyan-900"
    >
      <div
        className=" absolute left-0 h-full bg-[#F9C500] transition-colors duration-300"
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default Devider;
