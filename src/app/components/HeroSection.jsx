import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className='container flex flex-col justify-around items-center h-screen w-100%'>
    
      <Image
        className='-my-10'
        src='/assets/po_design.png'
        alt='main design'
        width={600}
        height={600}
      />
    
      <div className='flex items-center'>
        <button className='px-10 py-5 mx-2 border border-gray-500 rounded-md hover:border-[#F5C500] transition duration-300 ease-in-out r'>أنشء حسابك</button>
        <button className='px-10 py-5 mx-2 border border-gray-500 rounded-md hover:border-[#F5C500] transition duration-300 ease-in-out'>سجل الدخول</button>
      </div>
    </section>
  )
}

export default HeroSection