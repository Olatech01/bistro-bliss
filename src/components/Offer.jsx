import Image from 'next/image'
import React from 'react'

const Offer = () => {
    const offers = [
        {id: 1, name: "Caterings", desc: "In the new era of technology we look in the future with certainty for life.", image: "/cater.svg"},
        {id: 2, name: "Birthdays", desc: "In the new era of technology we look in the future with certainty for life.", image: "/birth.svg"},
        {id: 3, name: "Weddings", desc: "In the new era of technology we look in the future with certainty for life.", image: "/wed.svg"},
        {id: 4, name: "Events", desc: "In the new era of technology we look in the future with certainty for life.", image: "/event.svg"},
    ]
  return (
    <div className='py-15 md:px-29 px-7'>
        <h2 className='md:text-[55px] text-[45px] font-playfair font-medium leading-15 '>
            We also offer unique <br className='md:block hidden'/> services for your events
        </h2>

        <div className='grid md:grid-cols-4 grid-cols-1 w-full md:gap-4 gap-20 mt-16'>
            {offers.map((item) => (
                <div key={item.id} className='flex flex-col w-full gap-2.5'>
                    <Image height={320} width={306} src={item.image} alt='images' className='md:w-[306px] w-full'/>
                    <h2 className='text-[24px] font-playfair font-bold'>
                        {item.name}
                    </h2>

                    <p className='text-[16px] font-dm-sans font-normal'>
                        {item.desc}
                    </p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Offer