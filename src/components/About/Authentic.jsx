import React from 'react'
import { FaPlay } from 'react-icons/fa'

const Authentic = () => {
    const multi = [
        {id: 1, name: "", text: "", icon: ""},
        {id: 2, name: "", text: "", icon: ""},
        {id: 3, name: "", text: "", icon: ""},
    ]
    return (
        <div className='flex flex-col items-center w-full mt-10'>
            <div className='bg-[url("/video.svg")] bg-no-repeat bg-cover h-[650px] w-full flex flex-col gap-4 items-center justify-center'>
                <span className='bg-[#FFFFFF] h-[106px] flex items-center justify-center w-[106px] rounded-full'>
                    <FaPlay size={30} color='#AD343E' />
                </span>
                <h2 className='text-[55px] font-medium font-playfair text-white text-center leading-15 w-[596px]'>
                    Feel the authentic & original taste from us
                </h2>
            </div>
        </div>
    )
}

export default Authentic