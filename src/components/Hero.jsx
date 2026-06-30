import React from 'react'

const Hero = () => {
    return (
        <div className='h-[90vh] mt-20 bg-[url("/banner.svg")] flex items-center justify-center'>
            <div className='flex flex-col items-center gap-10'>
                <h2 className='text-center font-playfair text-[100px] font-normal leading-22 capitalize'>
                    Best food for <br />
                    your taste
                </h2>
                <p className='text-center font-dm-sans leading-6 text-[20px] font-normal'>
                    Discover delectable cuisine and unforgettable moments <br /> in our welcoming, culinary haven.
                </p>
                <div className='flex gap-6'>
                    <button className='bg-[#AD343E] h-16 w-40.75 rounded-full text-white font-medium'>
                        Book A Table
                    </button>
                    <button className='h-16 w-40.75 rounded-full border border-[#2C2F24] font-medium'>
                        Explore
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero