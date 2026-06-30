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
        <div className='flex items-center justify-center gap-30 bg-[#F9F9F7] py-20'>
            <div className='flex items-center gap-4'>
                <Image height={600} width={431} src={"/chef.svg"} alt='chef' />
                <div className='mt-28 flex flex-col gap-2.5'>
                    <Image height={333} width={290} src={"/sauce.svg"} alt='sauce' />
                    <Image height={333} width={290} src={"/protein.svg"} alt='sauce' />
                </div>
            </div>
            <div>
                <h2 className='text-[55px] font-medium leading-[60.5px]'>
                    Fastest Food <br /> Delivery in City
                </h2>
                <p className='text-[#414536] text-[16px] font-normal'>
                    Our visual designer lets you quickly and of drag a down <br /> your way to customapps for both keep desktop.
                </p>
                <div className='flex flex-col gap-4 mt-10'>
                    {list.map((item) => (
                        <div key={item.id} className='flex items-center gap-2'>
                            <span className='bg-[#AD343E] flex items-center justify-center text-white h-7.5 w-7.5 rounded-full'>
                                {item.icon}
                            </span>
                            <h2>
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