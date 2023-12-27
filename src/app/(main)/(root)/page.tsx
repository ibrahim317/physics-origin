import HeroSection from "@/src/components/root-sections/HeroSection";
import CoursesSection from "@/src/components/root-sections/CoursesSection";
import Devider from "@/src/components/Devider";
import LecturesSection from "@/src/components/root-sections/LecturesSection";

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
