import { Clock, ShoppingCart, SquarePercent } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Fastest = () => {
    const list = [
        { id: 1, name: "Delivery within 30 minutes", icon: <Clock size={15}/> },
        { id: 2, name: "Best Offer & Prices", icon: <SquarePercent size={15}/> },
        { id: 3, name: "Online Services Available", icon: <ShoppingCart size={15}/> },
    ]
    return (
        <div className='flex md:flex-row flex-col-reverse items-center justify-center md:gap-30 gap-10 bg-[#F9F9F7] py-20'>
            <div className='flex items-center gap-4'>
                <Image height={600} width={431} src={"/chef.svg"} alt='chef' className='md:w-[431px] w-full'/>
                <div className='mt-28 md:block hidden flex-col gap-2.5 space-y-3'>
                    <Image height={333} width={290} src={"/sauce.svg"} alt='sauce' />
                    <Image height={333} width={290} src={"/protein.svg"} alt='sauce' />
                </div>
            </div>
            <div className='md:px-0 px-7 w-full md:w-fit'>
                <h2 className='text-[55px] font-playfair font-medium leading-[60.5px]'>
                    Fastest Food <br /> Delivery in City
                </h2>
                <p className='text-[#414536] font-dm-sans text-[16px] font-normal'>
                    Our visual designer lets you quickly and of drag a down <br /> your way to customapps for both keep desktop.
                </p>
                <div className='flex flex-col gap-4 mt-10'>
                    {list.map((item) => (
                        <div key={item.id} className='flex items-center gap-2'>
                            <span className='bg-[#AD343E] flex items-center justify-center text-white h-7.5 w-7.5 rounded-full'>
                                {item.icon}
                            </span>
                            <h2 className='font-dm-sans text-[16px] font-medium'>
                                {item.name}
                            </h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Fastest