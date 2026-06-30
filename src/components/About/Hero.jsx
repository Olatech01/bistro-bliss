import { Locate, Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='bg-[#F9F9F7] min-h-screen py-20 flex items-center justify-center w-full'>
            <div className='flex items-center gap-20 max-w-7xl mt-25 mx-auto px-8'>
                {/* Image Section with Overlay Card */}
                <div className='relative shrink-0'>
                    <Image
                        height={566}
                        width={599}
                        src={"/shawarma.png"}
                        alt='Food image'
                        className='rounded-2xl object-cover'
                    />
                    {/* Overlay Card - Positioned at bottom of image */}
                    <div className='absolute -bottom-10 right-[-50%] -translate-x-1/2 w-[90%] h-70.25 flex flex-col gap-3.5 rounded-2xl justify-center p-6 bg-[#474747] shadow-xl'>
                        <h2 className='text-xl font-dm-sans font-bold text-white'>
                            Come and visit us
                        </h2>
                        <div className='flex items-center gap-3 text-white'>
                            <Phone size={20} />
                            <span className='text-[16px] font-dm-sans font-medium'>(414) 857 - 0107</span>
                        </div>
                        <div className='flex items-center gap-3 text-white'>
                            <Mail size={20} />
                            <span className='text-[16px] font-dm-sans font-medium'>happytummy@restaurant.com</span>
                        </div>
                        <div className='flex items-start gap-3  text-white'>
                            <Locate size={20} className='mt-0.5 shrink-0' />
                            <span className='text-[16px] font-dm-sans font-medium'>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</span>
                        </div>
                    </div>
                </div>

                {/* Text Content Section */}
                <div className='flex-1 space-y-6'>
                    <h2 className='text-5xl font-medium font-playfair leading-[1.2] max-w-2xl'>
                        We provide healthy food for your family.
                    </h2>
                    <p className='text-lg font-medium font-dm-sans max-w-2xl text-gray-700'>
                        Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.
                    </p>
                    <p className='text-base max-w-2xl font-dm-sans text-gray-600'>
                        At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero