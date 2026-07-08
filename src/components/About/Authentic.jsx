"use client"
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { FaPause, FaPlay } from 'react-icons/fa'

const Authentic = () => {
    const multi = [
        {id: 1, name: "Multi Cuisine", text: "In the new era of technology we look in the future with certainty life.", icon: "/menu.svg"},
        {id: 2, name: "Easy To Order", text: "In the new era of technology we look in the future with certainty life.", icon: "/order.svg"},
        {id: 3, name: "Fast Delivery", text: "In the new era of technology we look in the future with certainty life.", icon: "/timer.svg"},
    ]

    const videoRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(true)

    const toggleVideo = () => {
        if (videoRef.current?.paused) {
            videoRef.current.play()
            setIsPlaying(true)
        } else {
            videoRef.current?.pause()
            setIsPlaying(false)
        }
    }

    return (
        <div className='flex flex-col items-center w-full my-10'>
            <div className='relative overflow-hidden h-[650px] w-full flex flex-col gap-4 items-center justify-center'>
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster='/video.svg'
                    className='absolute inset-0 h-full w-full object-cover'
                >
                    <source src='/ads.mp4' type='video/mp4' />
                </video>
                <div className='absolute inset-0 bg-black/40' />
                <div className='relative z-10 flex flex-col items-center justify-center gap-4'>
                    <button
                        type='button'
                        onClick={toggleVideo}
                        aria-label={isPlaying ? 'Pause video' : 'Play video'}
                        className='bg-[#FFFFFF] h-[106px] flex items-center justify-center w-[106px] rounded-full cursor-pointer shadow-lg transition hover:scale-105'
                    >
                        {isPlaying ? <FaPause size={30} color='#AD343E' /> : <FaPlay size={30} color='#AD343E' />}
                    </button>
                    <h2 className='text-[55px] font-medium font-playfair text-white text-center leading-15 w-[596px]'>
                        Feel the authentic & original taste from us
                    </h2>
                </div>
            </div>

            <div className='grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-10 md:w-[80%] w-full md:px-0 px-7 my-20'>
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