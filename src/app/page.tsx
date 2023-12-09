import HeroSection from "@/src/components/HeroSection";
import CoursesSection from "@/src/components/CoursesSection";
import Devider from "@/src/components/Devider";
import Footer from "../components/footer";
import LecturesSection from "../components/LecturesSection";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <Devider />
      <CoursesSection />
      <LecturesSection />
      <Footer />
    </>
  );
}
