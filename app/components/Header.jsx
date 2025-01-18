import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = ( isDarkMode ) => {
  return (
    <div className=' w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 '>
        <div>
            <Image src={assets.profile_img} alt='' className='w-32 rounded-full' />
        </div> 
        <h3 className=' text-xl md:text-2xl mb-3 '>
            Hello! I am Sahil Gumber.
        </h3>

        <h1 className=' text-3xl sm:text-6xl lg:text-[66px] '>Developer and Designer</h1>
        <p className= 'max-w-2xl mx-auto'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nemo nisi enim optio saepe sed accusamus minima repudiandae voluptatum. Nihil incidunt laborum explicabo quaerat. Omnis nisi minus eos dolorem nobis!</p>
        <div className=' flex flex-col sm:flex-row items-center gap-4 mt-4 '>  
            <a className=" px-10 py-3 bg-black text-white border border-gray-500 rounded-full flex items-center gap-2 dark:bg-transparent" href =" #contact "> Contact me <Image src= { isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_white } alt=" " className=" w-3 "  /></a>

            <a className=" px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2 dark:bg-white  dark:text-black" href =" /sahilresumereal.pdf "> My Resume <Image src= { isDarkMode ? assets.download_icon : assets.download_icon } alt=" " className=" w-3 "  /></a>

        </div>
    </div>
  )
}

export default Header
