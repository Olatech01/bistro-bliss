"use client"
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion";
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const Navbar = () => {
    const pathname = usePathname()
    const router = useRouter()
    const navItems = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Menu", path: "/menu" },
        { id: 4, name: "Blog", path: "/blogs" },
        { id: 5, name: "Contact", path: "/contact" },
    ]
    return (
        <div className='flex fixed top-0 left-0 right-0 z-50 bg-white shadow w-full items-center py-4 justify-around'>
            <Image height={55} width={211} src={"/logo.svg"} alt='logo' />
            {/* <ul className='flex gap-4'>
                {navItems.map((item) => (
                    <Link href={item.path} key={item.id} className={`h-8 w-19.25 text-[16px] font-dm-sans font-medium rounded-full flex items-center justify-center ${pathname === item.path ? "bg-[#DBDFD0]" : ""}`}>
                        <li>
                            {item.name}
                        </li>
                    </Link>
                ))}
            </ul> */}
            <div className="flex items-center gap-2">
                {navItems.map((item) => (
                    <Link
                        href={item.path}
                        key={item.id}
                        className="relative px-5 py-2 font-medium"
                    >
                        {pathname === item.path && (
                            <motion.div
                                layoutId="activeNav"
                                className="absolute inset-0 rounded-full bg-[#DBDFD0]"
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 30,
                                }}
                            />
                        )}

                        <motion.span
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative z-10"
                        >
                            {item.name}
                        </motion.span>
                    </Link>
                ))}
            </div>


            <motion.button
                onClick={() => router.push("/book")}
                whileHover={{
                    scale: 1.05,
                    y: -2,
                    boxShadow: "0px 10px 25px rgba(0,0,0,0.15)",
                }}
                whileTap={{
                    scale: 0.95,
                }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 15,
                }}
                className="border border-[#2C2F24] rounded-full cursor-pointer w-[150px] h-[50px]"
            >
                Book A Table
            </motion.button>
        </div>
    )
}

export default Navbar