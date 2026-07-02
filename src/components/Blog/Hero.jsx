import Image from 'next/image';
import React from 'react'

const Hero = () => {


    const articles = [
        {
            id: 1,
            image: "/fries.svg",
            time: "June 15, 2026",
            headline: "5 Easy Air Fryer French Fries Recipes Everyone Will Love",
        },
        {
            id: 2,
            image: "/chicken.svg",
            time: "June 18, 2026",
            headline: "How to Make Crispy Chicken Tenders in Under 30 Minutes",
        },
        {
            id: 3,
            image: "/cake.svg",
            time: "June 20, 2026",
            headline: "7 Creamy Cheesecake Recipes Perfect for Every Occasion",
        },
        {
            id: 4,
            image: "/pizza.svg",
            time: "June 22, 2026",
            headline: "Top 5 Pizza Places You Must Visit This Year",
        },
        {
            id: 5,
            image: "/sushi.png",
            time: "June 25, 2026",
            headline: "How to prepare a delicious gluten free sushi",
        },
        {
            id: 6,
            image: "/pastry.png",
            time: "June 25, 2026",
            headline: "Exclusive baking lessons from the pastry king",
        },
        {
            id: 7,
            image: "/tender.png",
            time: "June 25, 2026",
            headline: "How to prepare delicious chicken tenders",
        },
        {
            id: 8,
            image: "/quick.png",
            time: "June 25, 2026",
            headline: "Top 20 simple and quick desserts for kids",
        },
        {
            id: 9,
            image: "/saw.png",
            time: "June 25, 2026",
            headline: "5 great cooking gadgets you can buy to save time",
        },
    ];


    return (
        <div className="relative min-h-screen flex-col flex gap-6 pt-40 pb-20 bg-[#f9f9f7]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className="text-center">
                    <h1 className="font-playfair text-6xl md:text-7xl text-[#2C2F24]">
                        Our Blog & Articles
                    </h1>

                    <p className="text-gray-500 font-dm-sans max-w-lg mx-auto mt-4">
                        We consider all the drivers of change gives you the components
                        you need to change to create a truly happens.
                    </p>
                </div>



                <div className="grid grid-cols-1 sm:grid-cols-3 mt-15 gap-6 flex-1">
                    {articles.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300"
                        >
                            <Image
                                src={item.image}
                                alt={item.headline}
                                width={306}
                                height={200}
                                className="w-full object-cover"
                            />

                            <div className="py-5 px-7">
                                <span className="text-gray-500 font-dm-sans text-sm">
                                    {item.time}
                                </span>

                                <h3 className="text-[#2C2F24] font-playfair text-lg font-semibold mt-2 leading-7">
                                    {item.headline}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Hero