import ProfileNavBar from "@/src/components/ProfileNavBar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ProfileNavBar />
      {children}
    </>
  );
};

export default layout;
