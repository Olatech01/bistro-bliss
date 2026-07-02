"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";




const foods = [
    {
        id: 1,
        title: "THE CLASSIC BURGER",
        image: "/burg.png",
        thumbnail: "/burg.png",
        desc: "Juicy grilled beef patty layered with melted cheese, fresh lettuce, tomatoes, and our signature burger sauce.",
        price: "$24.00",
        bg: "#E8A222",
    },
    {
        id: 2,
        title: "FRIED EGGS SPECIAL",
        image: "/eggs.png",
        thumbnail: "/eggs.png",
        desc: "Perfectly fried eggs served with fresh herbs and a delicious seasoning blend for a satisfying breakfast.",
        price: "$12.00",
        bg: "#F4C542",
    },
    {
        id: 3,
        title: "CRISPY FRIED CHIPS",
        image: "/food.png",
        thumbnail: "/food.png",
        desc: "Golden, crispy fries seasoned to perfection and served hot with your favorite dipping sauce.",
        price: "$15.00",
        bg: "#D97706",
    },
    // {
    //     id: 4,
    //     title: "CHEESY PIZZA DELIGHT",
    //     image: "/pizza.svg",
    //     thumbnail: "/pizza.svg",
    //     desc: "Stone-baked pizza topped with rich tomato sauce, melted mozzarella, and a blend of delicious toppings.",
    //     price: "$30.00",
    //     bg: "#C2410C",
    // },
    {
        id: 4,
        title: "CHICKEN SHAWARMA WRAP",
        image: "/hawa.png",
        thumbnail: "/hawa.png",
        desc: "Tender marinated chicken wrapped with fresh vegetables and creamy garlic sauce in warm flatbread.",
        price: "$18.00",
        bg: "#8B5A2B",
    },
];

const Hero = () => {


    const [current, setCurrent] = useState(0);

    const nextBurger = () => {
        setCurrent((prev) =>
            prev === foods.length - 1 ? 0 : prev + 1
        );
    };

    const prevBurger = () => {
        setCurrent((prev) =>
            prev === 0 ? foods.length - 1 : prev - 1
        );
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextBurger();
        }, 5000);

        return () => clearInterval(timer);
    }, [current]);


    return (
        <div className='h-[90vh] mt-20 bg-[url("/banner.svg")] flex items-center justify-center'>
            <div className='flex flex-col items-center gap-10'>
                <h2 className='text-center font-playfair text-[100px] font-normal leading-22 capitalize'>
                    Best food for <br />
                    your taste
                </h2>
                <p className='text-center font-dm-sans leading-6 text-[20px] font-normal'>
                    Discover delectable cuisine and unforgettable moments <br /> in our welcoming, culinary haven.
                </p>
                <div className='flex gap-6'>
                    <button className='bg-[#AD343E] h-16 w-40.75 rounded-full text-white font-medium'>
                        Book A Table
                    </button>
                    <button className='h-16 w-40.75 rounded-full border border-[#2C2F24] font-medium'>
                        Explore
                    </button>
                </div>
            </div>
        </div>
        // <div className='h-[90vh] mt-20 flex items-center justify-center'>
        //     <motion.div
        //         animate={{
        //             backgroundColor: foods[current].bg,
        //         }}
        //         transition={{
        //             duration: 0.6,
        //         }}
        //         className="absolute right-0 top-0 h-full w-[35%]"
        //     />

        //     <div className=" h-full px-10">
        //         <div className="grid lg:grid-cols-2 h-full items-center">
        //             {/* Left Side */}
        //             <div>
        //                 <motion.span
        //                     key={current}
        //                     initial={{ opacity: 0, y: 20 }}
        //                     animate={{ opacity: 1, y: 0 }}
        //                     className="bg-[#E8A222] px-8 py-3 rounded-md text-white font-semibold"
        //                 >
        //                     CLASSIC
        //                 </motion.span>

        //                 <AnimatePresence mode="wait">
        //                     <motion.div
        //                         key={foods[current].id}
        //                         initial={{
        //                             opacity: 0,
        //                             y: 50,
        //                         }}
        //                         animate={{
        //                             opacity: 1,
        //                             y: 0,
        //                         }}
        //                         exit={{
        //                             opacity: 0,
        //                             y: -50,
        //                         }}
        //                         transition={{
        //                             duration: 0.5,
        //                         }}
        //                     >
        //                         <h1 className="text-4xl font-black mt-7 max-w-xl">
        //                             {foods[current].title}
        //                         </h1>

        //                         <p className="text-gray-500 mt-5 max-w-lg leading-5">
        //                             {foods[current].desc}
        //                         </p>

        //                         <div className="flex items-center mt-5 gap-6">
        //                             <button className="bg-[#343434] text-white cursor-pointer px-10 py-4 rounded-md">
        //                                 ORDER NOW
        //                             </button>

        //                             {/* <span className="text-3xl font-bold text-orange-500">
        //                                 {foods[current].price}
        //                             </span> */}
        //                         </div>
        //                     </motion.div>
        //                 </AnimatePresence>

        //                 {/* Thumbnails */}
        //                 <div className="flex gap-6 mt-20">
        //                     {foods.map((burger, index) => (
        //                         <button
        //                             key={burger.id}
        //                             onClick={() => setCurrent(index)}
        //                         >
        //                             <Image
        //                                 src={burger.thumbnail}
        //                                 width={70}
        //                                 height={70}
        //                                 alt=""
        //                                 className={`transition-all rounded-full h-20 w-20 duration-500 ${current === index
        //                                     ? "scale-125 opacity-100"
        //                                     : "opacity-30"
        //                                     }`}
        //                             />
        //                         </button>
        //                     ))}
        //                 </div>
        //             </div>

        //             {/* Right Side Burger */}
        //             <div className="relative flex justify-center items-center">
        //                 <AnimatePresence mode="wait">
        //                     <motion.div
        //                         key={foods[current].image}
        //                         initial={{
        //                             opacity: 0,
        //                             x: 150,
        //                             scale: 0.7,
        //                             rotate: -10,
        //                         }}
        //                         animate={{
        //                             opacity: 1,
        //                             x: 0,
        //                             scale: 1,
        //                             rotate: 0,
        //                             y: [0, -15, 0],
        //                         }}
        //                         exit={{
        //                             opacity: 0,
        //                             x: -150,
        //                             scale: 0.7,
        //                             rotate: 10,
        //                         }}
        //                         transition={{
        //                             duration: 0.7,
        //                             y: {
        //                                 duration: 3,
        //                                 repeat: Infinity,
        //                             },
        //                         }}
        //                         className="absolute z-20"
        //                     >
        //                         <Image
        //                             src={foods[current].image}
        //                             width={700}
        //                             height={700}
        //                             className="rounded-full h-120 w-120"
        //                             alt=""
        //                             priority
        //                         />
        //                     </motion.div>
        //                 </AnimatePresence>
        //             </div>
        //         </div>
        //     </div>

        //     {/* Arrows */}
        //     <div className="absolute bottom-20 right-20 flex gap-6 z-50">
        //         <button
        //             onClick={prevBurger}
        //             className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
        //         >
        //             <ChevronLeft />
        //         </button>

        //         <button
        //             onClick={nextBurger}
        //             className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
        //         >
        //             <ChevronRight />
        //         </button>
        //     </div>

        // </div>
    )
}

export default Hero