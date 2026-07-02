"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

const burgers = [
    {
        id: 1,
        title: "THE CLASSIC STACK",
        image: "/burg.png",
        thumbnail: "/burg.png",
        desc: "A perfectly seasoned patty nestled between toasted buns with crisp lettuce, juicy tomato, creamy mayo, and tangy ketchup.",
        price: "$24.00",
        bg: "#E8A222",
    },
    {
        id: 2,
        title: "DOUBLE CHEESE BURGER",
        image: "/eggs.png",
        thumbnail: "/eggs.png",
        desc: "Loaded with double cheese and grilled beef with our secret sauce.",
        price: "$28.00",
        bg: "#E0523A",
    },
    {
        id: 3,
        title: "CHICKEN DELUXE",
        image: "/food.png",
        thumbnail: "/food.png",
        desc: "Crispy chicken, lettuce, tomatoes and special mayo.",
        price: "$22.00",
        bg: "#4D8A46",
    },
    {
        id: 4,
        title: "BACON SUPREME",
        image: "/hawa.png",
        thumbnail: "/hawa.png",
        desc: "Double bacon, cheese and perfectly grilled beef.",
        price: "$30.00",
        bg: "#BB6A2A",
    },
];

export default function page() {
    const [current, setCurrent] = useState(0);

    const nextBurger = () => {
        setCurrent((prev) =>
            prev === burgers.length - 1 ? 0 : prev + 1
        );
    };

    const prevBurger = () => {
        setCurrent((prev) =>
            prev === 0 ? burgers.length - 1 : prev - 1
        );
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextBurger();
        }, 5000);

        return () => clearInterval(timer);
    }, [current]);

    return (
        <section className="relative overflow-hidden h-screen bg-[#f6f6f6]">
            {/* Right background */}
            <motion.div
                animate={{
                    backgroundColor: burgers[current].bg,
                }}
                transition={{
                    duration: 0.6,
                }}
                className="absolute right-0 top-0 h-full w-[35%]"
            />

            <div className="max-w-7xl mx-auto h-full px-10">
                <div className="grid lg:grid-cols-2 h-full items-center">
                    {/* Left Side */}
                    <div>
                        <motion.span
                            key={current}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-[#E8A222] px-8 py-3 rounded-md text-white font-semibold"
                        >
                            CLASSIC
                        </motion.span>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={burgers[current].id}
                                initial={{
                                    opacity: 0,
                                    y: 50,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    y: -50,
                                }}
                                transition={{
                                    duration: 0.5,
                                }}
                            >
                                <h1 className="text-6xl font-black mt-10 max-w-xl">
                                    {burgers[current].title}
                                </h1>

                                <p className="text-gray-500 mt-8 max-w-lg leading-8">
                                    {burgers[current].desc}
                                </p>

                                <div className="flex items-center gap-6 mt-10">
                                    <button className="bg-[#343434] text-white px-10 py-4 rounded-md">
                                        ORDER NOW
                                    </button>

                                    <span className="text-3xl font-bold text-orange-500">
                                        {burgers[current].price}
                                    </span>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Thumbnails */}
                        <div className="flex gap-6 mt-20">
                            {burgers.map((burger, index) => (
                                <button
                                    key={burger.id}
                                    onClick={() => setCurrent(index)}
                                >
                                    <Image
                                        src={burger.thumbnail}
                                        width={70}
                                        height={70}
                                        alt=""
                                        className={`transition-all rounded-full h-20 w-20 duration-500 ${current === index
                                                ? "scale-125 opacity-100"
                                                : "opacity-30"
                                            }`}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Side Burger */}
                    <div className="relative flex justify-center items-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={burgers[current].image}
                                initial={{
                                    opacity: 0,
                                    x: 150,
                                    scale: 0.7,
                                    rotate: -10,
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    scale: 1,
                                    rotate: 0,
                                    y: [0, -15, 0],
                                }}
                                exit={{
                                    opacity: 0,
                                    x: -150,
                                    scale: 0.7,
                                    rotate: 10,
                                }}
                                transition={{
                                    duration: 0.7,
                                    y: {
                                        duration: 3,
                                        repeat: Infinity,
                                    },
                                }}
                                className="absolute z-20"
                            >
                                <Image
                                    src={burgers[current].image}
                                    width={700}
                                    height={700}
                                    className="rounded-full h-120 w-120"
                                    alt=""
                                    priority
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Arrows */}
            <div className="absolute bottom-20 right-20 flex gap-6 z-50">
                <button
                    onClick={prevBurger}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
                >
                    <ChevronLeft />
                </button>

                <button
                    onClick={nextBurger}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
                >
                    <ChevronRight />
                </button>
            </div>
        </section>
    );
}