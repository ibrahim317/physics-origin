import HeroSection from "@/src/components/HeroSection";
import CoursesSection from "@/src/components/CoursesSection";
import Devider from "@/src/components/Devider";
import Footer from "../components/footer";
// import asd from "../../lib/test";
// import { redirect } from "next/navigation";

export default async function Home() {
  // const re = await asd();
  // redirect(re);

  return (
    <>
      <HeroSection />
      <Devider />
      <CoursesSection />
      <Footer />
    </>
  );
}