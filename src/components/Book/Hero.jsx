"use client";

import dynamic from "next/dynamic";

const MapComponent = dynamic(
    () => import("../MapComponent"),
    {
        ssr: false,
    }
);

const Hero = () => {
    return (
        <section className="relative min-h-screen flex-col flex gap-6 py-20 bg-[#f9f9f7]">
            {/* Header */}
            <div className="pt-16 text-center">
                <h1 className="text-6xl font-serif">
                    Book A Table
                </h1>

                <p className="mt-4 text-gray-500 font-dm-sans max-w-md mx-auto">
                    We consider all the drivers of change gives you
                    the components you need to change to create a
                    truly happens.
                </p>
            </div>

            {/* Form */}
            <div className="w-[812px] mx-auto mt-12 bg-white rounded-2xl p-8 shadow-lg">
                <form className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                        {/* Date */}
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Date
                            </label>
                            <input
                                type="date"
                                className="w-full border border-gray-200 uppercase rounded-full px-5 py-3 outline-none focus:border-red-500"
                            />
                        </div>

                        {/* Time */}
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Time
                            </label>
                            <select className="w-full border border-gray-200 rounded-full px-5 py-3 outline-none focus:border-red-500">
                                <option>06:30 PM</option>
                                <option>07:00 PM</option>
                                <option>07:30 PM</option>
                                <option>08:00 PM</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full border border-gray-200 rounded-full px-5 py-3 outline-none focus:border-red-500"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Phone
                            </label>
                            <input
                                type="tel"
                                placeholder="x-xxx-xxx-xxxx"
                                className="w-full border border-gray-200 rounded-full px-5 py-3 outline-none focus:border-red-500"
                            />
                        </div>
                    </div>

                    {/* Persons */}
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Total Person
                        </label>
                        <select className="w-full border border-gray-200 rounded-full px-5 py-3 outline-none focus:border-red-500">
                            <option>1 Person</option>
                            <option>2 Persons</option>
                            <option>3 Persons</option>
                            <option>4 Persons</option>
                            <option>5 Persons</option>
                        </select>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#AD343E] cursor-pointer hover:bg-[#962d36] text-white py-4 rounded-full font-medium transition"
                    >
                        Book A Table
                    </button>
                </form>
            </div>

            {/* Map */}
            {/* <div className="absolute bottom-0 left-0 w-full h-[500px] z-0">
                <MapComponent />
            </div> */}
        </section>
    );
};

export default Hero;