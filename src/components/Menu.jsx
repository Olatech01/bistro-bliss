import Image from 'next/image'
import React from 'react'

const Menu = () => {
    const menus = [
        {id: 1, name: "Breakfast", description: "In the new era of technology we look in the future with certainty and pride for our life.", logo: "/breakfast.svg"},
        {id: 2, name: "Main Dishes", description: "In the new era of technology we look in the future with certainty and pride for our life.", logo: "/main.svg"},
        {id: 3, name: "Drinks", description: "In the new era of technology we look in the future with certainty and pride for our life.", logo: "/drinks.svg"},
        {id: 4, name: "Desserts", description: "In the new era of technology we look in the future with certainty and pride for our life.", logo: "/cheese.svg"},
    ]
  return (
    <div className='flex flex-col items-center py-20 justify-center'>
        <h2 className='font-medium text-[55px]'>
            Browse Our Menu 
        </h2>
        <div className='flex gap-6 mt-8'>
            {menus.map((item) => (
                <div key={item.id} className='border flex flex-col items-center justify-center gap-2 border-[#DBDFD0] h-93.75 w-76.5'>
                    <Image height={100} width={100} src={item.logo}/>
                    <h2 className='text-[24px] font-bold'>
                        {item.name}
                    </h2>
                    <p className='w-59.5 text-center text-[16px]'>
                        {item.description}
                    </p>
                    <button className='text-[#AD343E] text-[16px] font-bold mt-3 cursor-pointer'>
                        Explore Menu
                    </button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Menu