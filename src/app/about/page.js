import Authentic from '@/components/About/Authentic'
import Hero from '@/components/About/Hero'
import Information from '@/components/About/Information'
import Customers from '@/components/Customers'
import React from 'react'

const page = () => {
  return (
    <div>
        <Hero />
        <Authentic />
        <Information />
        <Customers />
    </div>
  )
}

export default page