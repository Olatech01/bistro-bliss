import Image from 'next/image'
import React from 'react'

const Through = () => {
  return (
    <div className='flex items-center bg-[#F9F9F7] justify-center gap-10 py-20'>
      <div className='flex flex-col gap-5'>
        <h2 className='font-playfair w-[346px] font-medium leading-13 text-[55px]'>
          You can order through apps
        </h2>
        <p className='font-dm-sans w-[380px] font-normal leading-relaxed text-[18px] text-gray-600'>
          Browse your favorite restaurants, customize your meal, and track your delivery in real-time — all from the palm of your hand.
        </p>
      </div>
      <div className='flex flex-col items-center'>
        <div className='grid grid-cols-3'>
          <Image src='/eats.svg' alt='App Icon 1' width={230} height={90} />
          <Image src='/hub.svg' alt='App Icon 2' width={230} height={90} />
          <Image src='/mates.svg' alt='App Icon 3' width={230} height={90} />
        </div>
        <div className='grid grid-cols-3'>
          <Image src='/dash.svg' alt='App Icon 1' width={260} height={90} />
          <Image src='/panda.svg' alt='App Icon 2' width={260} height={90} />
          <Image src='/roo.svg' alt='App Icon 3' width={260} height={90} />
        </div>
        <div className='grid grid-cols-3'>
          <Image src='/insta.svg' alt='App Icon 1' width={200} height={90} />
          <Image src='/just.svg' alt='App Icon 2' width={200} height={90} />
          <Image src='/didi.svg' alt='App Icon 3' width={230} height={90} />
        </div>
      </div>
    </div>
  )
}

export default Through