import Image from "next/image";
import React from "react";

const Articles = () => {
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
    ];

    return (
        <section className="bg-[#F9F9F7] py-20 px-6 lg:px-20">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-5">
                <h2 className="text-4xl font-playfair md:text-5xl font-bold text-[#2C2F24]">
                    Our Blog & Articles
                </h2>

                <button className="bg-[#AD343E] font-dm-sans text-white px-6 py-3 rounded-full font-medium hover:bg-[#922b34] transition">
                    Read All Articles
                </button>
            </div>

            {/* Articles Section */}
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Featured Article */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm flex-1">
                    <Image
                        src="/burger.svg"
                        alt="Burger and Pizza"
                        width={636}
                        height={456}
                        className="w-full object-cover"
                    />

                    <div className="p-6">
                        <span className="text-gray-500 text-sm">
                            June 30, 2026
                        </span>

                        <h3 className="text-[#2C2F24] text-2xl font-playfair font-semibold mt-3 mb-4">
                            The Secret Tips & Tricks to Prepare Perfect Burgers and Pizzas
                        </h3>

                        <p className="text-[#6F6F6F] font-dm-sans leading-7">
                            Discover the techniques professional chefs use to create
                            juicy burgers, crispy pizza crusts, and unforgettable flavors.
                            Learn how simple ingredients and cooking methods can transform
                            your homemade meals into restaurant-quality dishes.
                        </p>
                    </div>
                </div>

                {/* Small Articles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
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

                            <div className="p-5">
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
        </section>
    );
};

export default Articles;