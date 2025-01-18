import { contactList } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { useState } from 'react'


const Contact = ({isDarkMode}) => {

    const [result , setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "1b72a3b6-1fb1-4bd5-8c8e-9bbe21ed9995");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };

  return (
    <div id='connect' className='w-full px-[12%] py-10 scroll-mt-20'> 
        <h2 className=' text-center text-5xl '>
        Connect with me
        </h2>
        <div className=' flex flex-col items-center my-10 gap-8'>
        <div>
            <ul className='flex items-center gap-4 sm:gap-5 '>
                            {contactList.map(({icon, iconDark, link }, index)=>(
                                <li key={index} className = 'justify-center items-center flex w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white' >
                                    <a href={link} target="_blank" rel="noopener noreferrer">
                                    <Image src={isDarkMode ? iconDark : icon} alt='icon' className='w-5 sm:w-7' />
                                    </a>
            
                                </li>
                            ))}
            </ul>
        </div>
        <div id='contact' className='flex items-center gap-4 sm:gap-5'>
            <form onSubmit={onSubmit} className='max-w-2xl mx-auto'> 
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10 mb-8 '>
                    <input type='text' placeholder='Name' className='flex-1 border border-gray-400 rounded-lg p-3 outline-none dark:text-black bg-white w-80'  required name='name' />
                    <input type='email' placeholder='E-mail' className='border border-gray-400 rounded-lg p-3 bg-white dark:text-black outline-none  w-80' required name='email' />
                </div>
                <textarea placeholder='Message' rows='6' className=' w-full p-4 outline-none border dark:text-black border-gray-400 rounded-md bg-white mb-6 ' required name="message" ></textarea>
                <button type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black hover:bg-black/70 dark:text-black dark:bg-white dark:hover:bg-white/70  text-white rounded-full mx-auto  duration-500 '>Submit
                <Image src={ isDarkMode ?  assets.right_arrow_bold : assets.right_arrow_white} alt=' ' className=' w-4' /> </button>
            </form>    
        </div>
        <p className='mt-4'>{result}</p>
        </div>
      
    </div>
  )
}

export default Contact
