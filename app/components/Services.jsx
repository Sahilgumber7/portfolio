import { assets, serviceData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Services =  ({isDarkMode, setIsDarkMode }) => {
  return (
    <div id= "services" className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg '>
        What I offer?
      </h4>
      <h2 className=' text-center text-5xl '>
        Services
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint laboriosam quod libero dolorum rem. Voluptate facilis eius, totam, a aperiam enim tenetur quos, accusantium deleniti perspiciatis doloribus aspernatur cumque delectus?
      </p>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-10'> 
        {serviceData.map(({icon, title, description, link} ,index)=> (
            <div key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black cursor-pointer dark:hover:shadow-white dark:hover:bg-darkHover/50'>
                <Image src={icon} alt='' className='w-10'  />
                <h3 className=' text-lg my-4 text-gray-700 dark:text-gray-200'>{title}</h3>
                <p className=' text-sm text-gray-600 leading-5 dark:text-gray-200'>{description}</p>
                <a href={link} className=' flex items-center gap-2 text-sm mt-5 ' > Read more. <Image src={assets.right_arrow} alt=' ' className=" w-4" /> </a>
            </div>
        ))}

    </div>

    </div>
    
  )
}

export default Services
