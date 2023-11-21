import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"
import Image from "next/image"

export default function Home() {
  return (
    <main className='flex flex-col h-screen w-full bg-cover bg-center' style={{backgroundImage: "url('/assets/bg.jpg')"}}>
      <NavBar />
      <HeroSection />
    </main>
  )
}
