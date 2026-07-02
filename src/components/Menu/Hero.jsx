"use client";

import React, { useState } from "react";
import Image from "next/image";

const Hero = () => {
    const [activeTab, setActiveTab] = useState("all");

    const tabs = [
        { id: "all", label: "All" },
        { id: "breakfast", label: "Breakfast" },
        { id: "main-dishes", label: "Main Dishes" },
        { id: "drinks", label: "Drinks" },
        { id: "desserts", label: "Desserts" },
    ];

    const allMenusList = [
        { id: 1, name: "Fried Eggs", price: "$9.99", desc: "Made with eggs, lettuce, salt, oil and other ingredients.", logo: "/eggs.png", category: "breakfast" },
        { id: 2, name: "Hawaiian Pizza", price: "$15.99", desc: "Made with eggs, lettuce, salt, oil and other ingredients.", logo: "/hawa.png", category: "main-dishes" },
        { id: 3, name: "Martinez Cocktail", price: "$7.25", desc: "Made with eggs, lettuce, salt, oil and other ingredients.", logo: "/cock.png", category: "drinks" },
        { id: 4, name: "Butterscotch Cake", price: "$20.99", desc: "Made with eggs, lettuce, salt, oil and other ingredients.", logo: "/scotch.png", category: "desserts" },
        { id: 5, name: "Mint Lemonade", price: "$5.89", desc: "Made with eggs, lettuce, salt, oil and other ingredients.", logo: "/mint.png", category: "drinks" },
        { id: 6, name: "Chocolate Icecream", price: "$18.05", desc: "Made with eggs, lettuce, salt, oil and other ingredients.", logo: "/choco.png", category: "desserts" },
        { id: 7, name: "Cheese Burger", price: "$12.55", desc: "Made with eggs, lettuce, salt, oil and other ingredients.", logo: "/burg.png", category: "main-dishes" },
        { id: 8, name: "Classic Waffles", price: "$12.99", desc: "Made with eggs, lettuce, salt, oil and other ingredients.", logo: "/waffle.png", category: "breakfast" },
    ];

    // Filter menu items based on active tab
    const filteredMenus = activeTab === "all"
        ? allMenusList
        : allMenusList.filter(item => item.category === activeTab);

    return (
        <section className="py-40 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center">
                    <h1 className="font-playfair text-6xl text-[#2C2F24]">
                        Our Menu
                    </h1>

                    <p className="text-gray-500 font-dm-sans max-w-md mx-auto mt-4">
                        We consider all the drivers of change gives you
                        the components you need to change to create a
                        truly happens.
                    </p>

                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mt-10">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-8 py-3 rounded-full border transition-all duration-300 font-medium text-sm
                                    ${activeTab === tab.id
                                        ? "bg-[#AD343E] text-white border-[#AD343E]"
                                        : "bg-white text-[#2C2F24] border-gray-300 hover:border-[#AD343E] hover:text-[#AD343E]"
                                    }
                                `}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Menu Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                    {filteredMenus.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                        >
                            {/* Image */}
                            <div className="relative w-full h-48 bg-gray-100">
                                <Image
                                    src={item.logo}
                                    alt={item.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                <div className="flex flex-col items-center mb-2">
                                    <span className="font-bold text-[#AD343E] text-lg">
                                        {item.price}
                                    </span>
                                    <h3 className="font-bold text-[#2C2F24] text-lg">
                                        {item.name}
                                    </h3>
                                </div>
                                <p className="text-gray-500 text-center text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty state */}
                {filteredMenus.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-lg">No items found in this category.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Hero;