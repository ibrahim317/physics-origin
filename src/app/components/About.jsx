import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <section className='h-screen w-full bg-cover bg-center flex justify-center items-center' style={{backgroundImage: "url('/assets/bgmirrored.png')"}}>
        
        <div className=' w-5/12 flex justify-center'>
          <Image
          src={"/assets/user.png"}
          width={300}
          height={300}
          />
        </div>


        <div className='w-5/12'>
          <h1 className='text-6xl w-full text-right p-5'><span className='text-[#F9C500]'>عن</span> الأستاذ</h1>

          <p className='w-full text-right'>
          المستر وشغله وصفاته وخصاله الي اخره,المستر وشغله وصفاته وخصاله الي اخره,المستر وشغله وصفاته وخصاله الي اخره,المستر وشغله وصفاته وخصاله الي اخره,المستر وشغله وصفاته وخصاله الي اخره,المستر وشغله وصفاته وخصاله الي اخره,المستر وشغله وصفاته وخصاله الي اخره,المستر وشغله وصفاته وخصاله الي اخره,المستر وشغله وصفاته وخصاله الي اخره,المستر وشغله وصفاته وخصاله الي اخره, 
          </p>
        </div>

    </section>
  )
}

export default About