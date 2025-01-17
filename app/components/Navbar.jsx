import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { useRef } from 'react';

const Navbar = () => {

    const sideMenuRef = useRef();

    const openMenu = ()=>{
        sideMenuRef.current.style.transform =" translateX(-16rem) "
    }
    const closeMenu = ()=>{
        sideMenuRef.current.style.transform =" translateX(16rem) "
    }


  return (
    <div>
        <nav className=" w-full fixed px-5 lg:px-8 xl;px-[8%] py-4 flex items-center justify-between z-50 ">
            <a href="">
                <Image src={assets.logo} alt=" " className="w-28 cursor-pointer mr-14" />
            </a>

            <ul className=" hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 "  >

                <li><a href="#top">HOME</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#services">SERVICES</a></li>
                <li><a href="#project">PROJECTS</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>

            <div className=" flex items-center gap-4">
                <button>
                    <Image src={assets.moon_icon} alt='' className=" w-6 " />
                </button>

                <a className=" hidden lg:flex items-center gap-3 px-10 py-2 border border-gray-500 rounded-full ml-4 " href =" #contact "> Contact <Image src= { assets.arrow_icon } alt=" " className=" w-3 "  /></a>
                <button className=' block md:hidden ml-0' onClick={openMenu}> 
                    <Image src={assets.menu_black} alt='' className='w-6' />
                </button>
            </div>

            {/*--------mobile menu-------*/}

            <ul ref={sideMenuRef} className=" flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 z-50 w-64 h-screen bg-gray-300 transition duration-500 "  >
                <div className= 'absolute right-6 top-6' onClick={closeMenu} >
                    <Image src={assets.close_black} alt='' className=" w-5 cursor-pointer"  />
                </div>
                <li><a onClick={closeMenu} href="#top">HOME</a></li>
                <li><a onClick={closeMenu} href="#about">ABOUT</a></li>
                <li><a onClick={closeMenu} href="#services">SERVICES</a></li>
                <li><a onClick={closeMenu} href="#project">PROJECTS</a></li>
                <li><a onClick={closeMenu} href="#contact">CONTACT</a></li>
            </ul>



        </nav>
      
    </div>
  )
}

export default Navbar