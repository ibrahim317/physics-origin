import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"
import About from "./components/About"

import Image from "next/image"

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <About />
    </main>
  )
}
