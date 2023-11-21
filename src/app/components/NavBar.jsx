import React from 'react'
import Image from 'next/image'

const NavBar = () => {
  return (
    <nav>
        <div className='items-center justify-left flex p-8'>
            <a href={"/"}><Image src='/assets/po_logo.png' alt='LOGO' width={80} height={80}/></a>
            <h3 className='mx-auto font-thin text-xl'>E n g i n e e r . A h m e d  Y o u s e f</h3>
        </div>
    </nav>
  )
}

export default NavBar