import React from "react";

const Devider = () => {
  return (
    <div className="inset-x-0 -bottom-1 bg-[#F9C500] dark:bg-cyan-900 smooth h-1 transform  translate-y-0">
      <div
        className=" bg-[#F9C500] h-full left-0 absolute transition-colors duration-300"
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default Devider;
