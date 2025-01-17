import { assets, infoList, toolsData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'


const About = ( isDarkMode ) => {
  return (
    <div id="about" className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg '>
        Introduction
      </h4>
      <h2 className=' text-center text-5xl '>
        About me
      </h2>

      <div className =' flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className=' w-64  sm:w-80 rounded-3xl max-w-none'>
            <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
        </div>
        <div className=''>
            <p className=' mb-10 max-w-2xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illo perspiciatis dolore vel animi veritatis temporibus, natus, sunt ratione distinctio, consequatur maxime mollitia asperiores nihil at quae. Et, voluptatum nam?
            </p>
            <ul className=' grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                {infoList.map(({icon, iconDark, title, description },index)=>(
                    <li key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white dark:hover:bg-darkHover/50'>   
                        <Image src={ isDarkMode ? iconDark : icon} alt={title} className=" w-10 mt-3" />
                        <h3 className='my-4 font-semibold text-gray-700 dark:text-gray-200'> {title} </h3>
                        <p className=' text-gray-600 text-sm dark:text-gray-200'>{description}</p>
                    </li>
                ))}
            </ul>
            <h4 className=' my-6 text-gray-700 dark:text-gray-200 '> Tools I use </h4>
            <ul className='flex items-center gap-4 sm:gap-5 '>
                {toolsData.map((tool, index)=>(
                    <li key={index} className = 'justify-center items-center flex w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-black' >
                        <Image src={tool} alt='Tool' className='w-5 sm:w-7' />

                    </li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default About
