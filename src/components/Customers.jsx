import Image from 'next/image'
import React from 'react'

const Customers = () => {
    const review = [
        {id: 1, title: "“The best restaurant”", content: "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.", username: "Sophire Robson", image: "/robson.svg", location: "Los Angeles, CA"},
        {id: 2, title: "“Simply delicious”", content: "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.", username: "Matt Cannon", image: "/matt.svg", location: "San Diego, CA"},
        {id: 3, title: "“One of a kind restaurant”", content: "The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.", username: "Andy Smith", image: "/andy.svg", location: "San Francisco, CA"},
    ]


  return (
    <div className='flex flex-col items-center py-20 justify-center'>
        <h2 className='text-[55px] px-7 md:px-0 font-playfair font-medium'>
            What Our Customers Say
        </h2>

        <div className='grid md:grid-cols-3 grid-cols-1 mt-7 gap-6 md:px-30 px-7'>
            {review.map((item) => (
                <div key={item.id} className='bg-[#F9F9F7] flex flex-col gap-5 px-5 py-10 rounded-lg'>
                    <span className='text-[#AD343E] font-playfair text-[20px] font-bold'>
                        {item.title}
                    </span>
                    <p className='text-[17px] text-[#414536] font-dm-sans font-normal'>
                        {item.content}
                    </p>
                    <span className='border-b border-gray-200'/>
                    <div className='flex items-center gap-3'>
                        <Image height={50} width={50} src={item.image} alt='images'/>
                        <div>
                            <h3 className='text-[16px] text-[#414536] font-bold'>
                                {item.username}
                            </h3>
                            <p className='text-[16px] text-[#414536] font-normal'>
                                {item.location}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Customers