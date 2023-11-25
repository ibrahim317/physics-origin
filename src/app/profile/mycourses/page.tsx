"use client"; // may change
import ProfileNavBar from "@/src/components/ProfileNavBar";

const profile = () => {
  return (
    // if logged in
    <>
      <div
        className="w-full bg-cover h-screen"
        style={{ backgroundImage: "url('/assets/bg2.jpg')" }}
      >
        <ProfileNavBar start="start-mycourses"/>
      </div>
    </>
  );
};

export default profile;
