import { Locate, Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='bg-[#F9F9F7] inset-0 min-h-185 md:py-0 py-20 flex items-center justify-center w-full'>
        <div className='flex md:flex-row flex-col-reverse md:px-0 px-7 items-center gap-35'>
            <div className='w-full flex'>
                <Image height={566} width={599} src={"/shawarma.png"} alt='image' className=''/>
                <div className='absolute flex flex-col gap-3.5 rounded-2xl justify-center px-5 md:left-90 md:mt-0  md:ml-0 ml-5 mt-50 md:top-440 -md:right-0 bg-[#474747] w-102.75 h-80.25'>
                    <h2 className='text-[20px] font-dm-sans font-bold text-white'>
                        Come and visit us
                    </h2>
                    <div className='flex items-center gap-2.5 text-white'>
                        <Phone />
                        <h2 className='text-[16px] font-dm-sans font-medium'>(414) 857 - 0107</h2>
                    </div>
                    <div className='flex items-center gap-2.5 text-white'>
                        <Mail />
                        <h2 className='text-[16px] font-dm-sans font-medium'>happytummy@restaurant.com</h2>
                    </div>
                    <div className='flex items-center gap-2.5 text-white'>
                        <Locate />
                        <h2 className='text-[16px] font-dm-sans font-medium'>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</h2>
                    </div>
                </div>
            </div>
            <div className='w-full space-y-4'>
                <h2 className='text-[55px] font-playfair font-medium leading-15 md:w-139.25 w-full'>
                    We provide healthy food for your family.
                </h2>
                <p className='text-[18px] font-dm-sans font-medium md:w-139.25 w-full'>
                    Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.
                </p>
                <p className='text-[16px] font-dm-sans font-normal md:w-139.25 w-full'>
                    At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
                </p>
                <button className='h-14 w-40.75 rounded-full border border-[#2C2F24] font-medium'>
                    More About Us
                </button>
            </div>
        </div>
    </div>
  )
}

export default About