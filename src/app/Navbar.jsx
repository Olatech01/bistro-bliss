"use client"
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const pathname = usePathname()
    const router = useRouter()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Menu", path: "/menu" },
        { id: 4, name: "Blog", path: "/blogs" },
        { id: 5, name: "Contact", path: "/contact" },
    ]

    useEffect(() => {
        setIsMenuOpen(false)
    }, [pathname])

    const handleBookTable = () => {
        setIsMenuOpen(false)
        router.push("/book")
    }

    return (
        <header className='fixed top-0 left-0 right-0 z-50 bg-white/95 shadow-sm backdrop-blur py-3 supports-[backdrop-filter]:bg-white/80'>
            <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
                <Link href='/' className='relative z-10'>
                    <Image height={55} width={211} src={"/logo.svg"} alt='logo' />
                </Link>

                <nav className='hidden items-center gap-2 md:flex'>
                    {navItems.map((item) => (
                        <Link
                            href={item.path}
                            key={item.id}
                            className='relative px-5 py-2 font-medium'
                        >
                            {pathname === item.path && (
                                <motion.div
                                    layoutId='activeNav'
                                    className='absolute inset-0 rounded-full bg-[#DBDFD0]'
                                    transition={{
                                        type: 'spring',
                                        stiffness: 400,
                                        damping: 30,
                                    }}
                                />
                            )}

                            <motion.span
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className='relative z-10'
                            >
                                {item.name}
                            </motion.span>
                        </Link>
                    ))}
                </nav>

                <motion.button
                    onClick={handleBookTable}
                    whileHover={{
                        scale: 1.05,
                        y: -2,
                        boxShadow: '0px 10px 25px rgba(0,0,0,0.15)',
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 15,
                    }}
                    className='hidden h-[50px] w-[150px] cursor-pointer rounded-full flex items-center justify-center border border-[#2C2F24] md:flex'
                >
                    Book A Table
                </motion.button>

                <button
                    type='button'
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    aria-label='Toggle navigation menu'
                    className='flex h-11 w-11 items-center justify-center rounded-full border border-[#2C2F24]/20 bg-white text-[#2C2F24] shadow-sm md:hidden'
                >
                    {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className='overflow-hidden border-t border-[#2C2F24]/10 bg-white md:hidden'
                    >
                        <motion.div
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className='flex flex-col gap-2 px-4 py-4'
                        >
                            {navItems.map((item) => (
                                <Link
                                    href={item.path}
                                    key={item.id}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`rounded-full px-4 py-3 text-sm font-medium transition ${pathname === item.path ? 'bg-[#DBDFD0] text-[#2C2F24]' : 'text-[#2C2F24] hover:bg-[#F5F5F0]'}`}
                                >
                                    {item.name}
                                </Link>
                            ))}

                            <motion.button
                                onClick={handleBookTable}
                                whileTap={{ scale: 0.97 }}
                                className='mt-2 flex h-[46px] items-center justify-center rounded-full border border-[#2C2F24] bg-[#2C2F24] text-sm font-medium text-white'
                            >
                                Book A Table
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Navbar