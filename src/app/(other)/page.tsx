<<<<<<< HEAD:src/app/page.tsx
import HeroSection from "../components/HeroSection";
import CoursesSection from "../components/CoursesSection";
import Devider from "../components/Devider";
// import asd from "../lib/test";
// import { redirect } from "next/navigation";

=======
import HeroSection from "../../components/HeroSection";
import CoursesSection from "../../components/CoursesSection";
import Devider from "../../components/Devider";
import asd from "../../lib/test";
import { redirect } from "next/navigation";
>>>>>>> a09f5b712203225f6958ad7dbce65bdf1d29abde:src/app/(other)/page.tsx
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