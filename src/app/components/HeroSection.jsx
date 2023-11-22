import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className='flex justify-center items-center h-screen w-full bg-cover bg-center' style={{backgroundImage: "url('/assets/bg.png')"}}>
      <div>
        <Image
          src={"/assets/design.png"}
          alt='Physics Origin'
          width={450}
          height={450}
        />
      </div>
    </section>
  )
}

export default HeroSection