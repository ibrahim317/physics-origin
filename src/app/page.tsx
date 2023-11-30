import HeroSection from "../components/HeroSection";
import CoursesSection from "../components/CoursesSection";
import Devider from "../components/Devider";
// import asd from "../lib/test";
// import { redirect } from "next/navigation";

export default async function Home() {
  // const re = await asd();
  // redirect(re);
  return (
    <>
      <HeroSection />
      <Devider />
      <CoursesSection />
    </>
  );
}