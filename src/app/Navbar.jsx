"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {
    const pathname = usePathname()
    const navItems = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Menu", path: "/menu" },
        { id: 4, name: "Pages", path: "/page" },
        { id: 5, name: "Conatct", path: "/contact" },
    ]
    return (
        <div className='flex fixed top-0 left-0 right-0 z-50 bg-white shadow w-full items-center py-4 justify-around'>
            <Image height={55} width={211} src={"/logo.svg"} alt='logo' />
            <ul className='flex gap-4'>
                {navItems.map((item) => (
                    <Link href={item.path} key={item.id} className={`h-8 w-19.25 text-[16px] font-dm-sans font-medium rounded-full flex items-center justify-center ${pathname === item.path ? "bg-[#DBDFD0]" : ""}`}>
                        <li>
                            {item.name}
                        </li>
                    </Link>
                ))} 
            </ul>
            <button className='border border-[#2C2F24] w-37.5 h-12.5 rounded-full'>
                Book A Table
            </button>
        </div>
    )
}

export default Navbar