import React from 'react'

const NavBar = () => {
  return (
    <nav className='fixed flex items-center w-full h-24'>

        <div className='container flex w-fit justify-around mx-10'> {/*/SignUp LogIn side (left side)/*/}
            
            <a href="#" className='px-10 py-4 mx-4 min-w-max'>سجل الدخول</a>
            <a href="#" className='px-10 py-4 mx-4 min-w-max text-black bg-[#F9C500] rounded-[25px]'>اشترك الان!</a>

        </div>

        <div className='container flex items-center'> {/*/(right side) #F9C500/*/}
            <ul className='container flex justify-around'>
                <li><a href="#" className='hover:text-[#F9C500] transition ease-in-out duration-300'>About</a></li>
                <li><a href="#" className='hover:text-[#F9C500] transition ease-in-out duration-300'>Courses</a></li>
                <li><a href="#" className='hover:text-[#F9C500] transition ease-in-out duration-300'>Contact</a></li>
                <li><a href="#" className='hover:text-[#F9C500] transition ease-in-out duration-300'>Home</a></li>
            </ul>
        </div>

    </nav>
  )
}

export default NavBar