import Image from 'next/image'
import React from 'react'

const Information = () => {
    return (
        <div className='flex md:flex-row flex-col items-center gap-20 md:px-0 px-7 justify-center bg-[#F9F9F7] py-25'>
            <div className='flex flex-col gap-5'>
                <h2 className='w-[553px] font-playfair font-medium leading-14.5 text-[55px]'>
                    A little information for our valuable guest
                </h2>
                <p className='w-[556px] text-[16px] font-normal font-dm-sans'>
                    At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
                </p>
                <div className='grid grid-cols-2 md:gap-3 gap-6'>
                    <div className='md:w-73.25 w-full h-43.5 flex flex-col items-center justify-center border border-[#DBDFD0] bg-white rounded-lg'>
                        <h2 className='text-[#2C2F24] font-medium text-[55px] font-playfair'>
                            3
                        </h2>
                        <p className='text-[#2C2F24] font-medium text-[16px] font-dm-sans'>
                            Locations
                        </p>
                    </div>
                    <div className='md:w-73.25 w-full h-43.5 flex flex-col items-center justify-center border border-[#DBDFD0] bg-white rounded-lg'>
                        <h2 className='text-[#2C2F24] font-medium text-[55px] font-playfair'>
                            1995
                        </h2>
                        <p className='text-[#2C2F24] font-medium text-[16px] font-dm-sans'>
                            Founded
                        </p>
                    </div>
                    <div className='md:w-73.25 w-full h-43.5 flex flex-col items-center justify-center border border-[#DBDFD0] bg-white rounded-lg'>
                        <h2 className='text-[#2C2F24] font-medium text-[55px] font-playfair'>
                            65+
                        </h2>
                        <p className='text-[#2C2F24] font-medium text-[16px] font-dm-sans'>
                            Staff Members
                        </p>
                    </div>
                    <div className='md:w-73.25 w-full h-43.5 flex flex-col items-center justify-center border border-[#DBDFD0] bg-white rounded-lg'>
                        <h2 className='text-[#2C2F24] font-medium text-[55px] font-playfair'>
                            100%
                        </h2>
                        <p className='text-[#2C2F24] font-medium text-[16px] font-dm-sans'>
                            Satisfied Customers
                        </p>
                    </div>
                </div>
            </div>
            <Image height={680} width={555} src={"/veges.png"} alt='Veges' />
        </div>
    )
}

export default Information