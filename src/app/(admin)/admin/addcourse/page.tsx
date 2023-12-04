import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <section>
      <Link href={"/admin"} className='text-4xl bg-green-500 px-10 py-7 rounded-[25px] m-5 hover:opacity-70 transition ease-in-out'>
              رجوع
      </Link>
    </section>
  )
}

export default page