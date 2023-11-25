"use client";
import ProfileNavBar from "@/src/components/ProfileNavBar";

const profile = () => {
  return (
    // if logged in
    // bad practice
    <>
      <div
        className="w-full bg-cover h-screen"
        style={{ backgroundImage: "url('/assets/bg2.jpg')" }}
      >
        <ProfileNavBar start="start-myhistory"/>
      </div>
    </>
  );
};

export default profile;
