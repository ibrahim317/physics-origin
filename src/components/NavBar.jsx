import React from 'react'

const NavBar = () => {
  return (
    <nav className='fixed flex items-center w-full h-28 px-20 drop-shadow-md shadow-lg rounded-bl-[50px] rounded-br-[50px] bg-black bg-opacity-20'>

        <div className='container flex w-fit justify-around mx-10'> {/*/SignUp LogIn side (left side)/*/}
            
            <a href="#" className='px-10 py-4 mx-4 min-w-max hover:text-[#F9C500] transition ease-in-out duration-300'>سجل الدخول</a>
            <a href="#" className='px-10 py-4 mx-4 min-w-max text-black bg-[#F9C500] rounded-[25px] hover:bg-[#ffffff] transition ease-in-out duration-300'>!اشترك الان</a>

        </div>

        <div className='container flex items-center'> {/*/(right side) #F9C500/*/}
            <ul className='container flex justify-around'>
                <li><a href="#" className='hover:text-[#F9C500] transition ease-in-out duration-300'>تواصل | دعم </a></li>
                <li><a href="#" className='hover:text-[#F9C500] transition ease-in-out duration-300'>الكورسات</a></li>
                <li><a href="#" className='hover:text-[#F9C500] transition ease-in-out duration-300'>عن الأستاذ</a></li>
                <li><a href="#" className='hover:text-[#F9C500] transition ease-in-out duration-300'>الصفحة الرئيسية</a></li>
            </ul>
        </div>

    </nav>
  )
}

export default NavBar