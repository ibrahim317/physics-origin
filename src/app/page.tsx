import HeroSection from "@/src/components/rootPage/HeroSection";
import CoursesSection from "@/src/components/rootPage/CoursesSection";
import Devider from "@/src/components/Devider";
import LecturesSection from "../components/rootPage/LecturesSection";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <Devider />
      <CoursesSection />
      <LecturesSection />
    </>
  );
}
