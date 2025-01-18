import { workData } from '@/assets/assets'
import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Work = () => {
  return (
    <div id="project" className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg '>
        Portfolio
      </h4>
      <h2 className=' text-center text-5xl '>
        My Works
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint laboriosam quod libero dolorum rem. Voluptate facilis eius, totam, a aperiam enim tenetur quos, accusantium deleniti perspiciatis doloribus aspernatur cumque delectus?
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10'> 
              {workData.map(( project ,index)=> (
                  <div key={index} style={{backgroundImage: `url(${project.bgImage})`}} className=' aspect-square bg-no-repeat bg-cover bg-center relative border border-gray-400 rounded-lg px-8 py-12 hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black cursor-pointer group  '>
                    
                    <div className='bg-white w-10/12 justify-between rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center duration-500 group  '>
                        <div>
                            <h2 className='font-semibold'>{project.title}</h2>
                            <p className=' text-sm text-gray-700 ' >{project.description}</p>
                        </div>
                        <div className='border border-black rounded-full w-9 aspect-square flex items-center justify-center group-hover:bg-lime-300 transition'>
                            <Image src={assets.send_icon} alt='send icon' className='w-5'  />
                        </div>
                    </div>
                    </div>   
              ))}
        </div>
        <a href='' className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover hover:-translate-y-1 duration-500'>
            Show more
            <Image src={assets.right_arrow_bold} alt='' className='w-4'/>
        </a>


      
    </div>
  )
}

export default Work
