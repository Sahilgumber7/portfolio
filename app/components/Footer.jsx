import React from 'react'
import Image from "next/image"
import { assets } from '@/assets/assets'

const footer = ({isDarkMode}) => {
  return (
    <div className="mt-10">
        <div className="items-center">
      <Image src={ isDarkMode ? assets.logo_dark : assets.logo } alt=" " className="w-36 mx-auto mb-2" />
            <div className="flex items-center mx-auto gap-2 w-max ">
                <Image src={assets.mail_icon} alt=" " className="w-6" />
                sahilgumber13418@gmail.com
            </div>
        </div>

        <div className=' text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6 '> 
            <p>Copyright 2025 Sahil Gumber. All rights reserved.</p> 
            <ul className='flex gap-8 items-center justify-center mt-4 sm:mt-0'>
                <li><a target= "_blank" href="https://github.com/Sahilgumber7" className="text-gray-400 hover:text-gray-600 ">Github</a></li>
                <li><a target= "_blank" href="https://www.linkedin.com/in/sahilgumber7/" className="text-gray-400 hover:text-gray-600 ">LinkedIn</a></li>
                <li><a target= "_blank" href="https://x.com/SahilGumber7_" className="text-gray-400 hover:text-gray-600 "> X </a></li>

            </ul>
        </div> 

    </div>
  )
}

export default footer
