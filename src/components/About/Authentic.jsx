import Image from 'next/image'
import React from 'react'
import { FaPlay } from 'react-icons/fa'

const Authentic = () => {
    const multi = [
        {id: 1, name: "Multi Cuisine", text: "In the new era of technology we look in the future with certainty life.", icon: "/menu.svg"},
        {id: 2, name: "Easy To Order", text: "In the new era of technology we look in the future with certainty life.", icon: "/order.svg"},
        {id: 3, name: "Fast Delivery", text: "In the new era of technology we look in the future with certainty life.", icon: "/timer.svg"},
    ]
    return (
        <div className='flex flex-col items-center w-full my-10'>
            <div className='bg-[url("/video.svg")] bg-no-repeat bg-cover h-[650px] w-full flex flex-col gap-4 items-center justify-center'>
                <span className='bg-[#FFFFFF] h-[106px] flex items-center justify-center w-[106px] rounded-full'>
                    <FaPlay size={30} color='#AD343E' />
                </span>
                <h2 className='text-[55px] font-medium font-playfair text-white text-center leading-15 w-[596px]'>
                    Feel the authentic & original taste from us
                </h2>
            </div>

            <div className='grid grid-cols-3 w-[80%] my-20'>
                {multi.map((item) => (
                    <div key={item.id} className='flex items-center gap-4'>
                        <Image height={48} width={48} src={item.icon} alt='imges'/>
                        <div>
                            <h2 className='text-[20px] font-medium font-playfair text-[#AD343E]'>
                                {item.name}
                            </h2>
                            <p className='text-[14px] w-[80%] text-[#333333] font-dm-sans font-black'>
                                {item.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Authentic