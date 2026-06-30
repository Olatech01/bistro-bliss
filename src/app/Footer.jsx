"use client";

import Image from "next/image";
import Link from "next/link";
import {
    FaTwitter,
    FaFacebookF,
    FaInstagram,
    FaGithub,
} from "react-icons/fa";

const Footer = () => {
    const date = new Date()
    const newYear = date.getFullYear()
    const pages = [
        "Home",
        "About",
        "Menu",
        "Pricing",
        "Blog",
        "Contact",
        "Delivery",
    ];

    const utilityPages = [
        "Start Here",
        "Styleguide",
        "Password Protected",
        "404 Not Found",
        "Licenses",
        "Changelog",
        "View More",
    ];

    const instagramImages = [
        "/food1.png",
        "/food.png",
        "/food3.png",
        "/food4.png",
    ];

    return (
        <footer className="bg-[#474747] text-white pt-20 pb-8">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
                    {/* Logo & Description */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <Image
                                src="/logo-white.svg"
                                alt="Bistro Bliss"
                                width={45}
                                height={45}
                            />

                            <h2 className="text-3xl italic font-semibold">
                                Bistro Bliss
                            </h2>
                        </div>

                        <p className="text-[#ADB29E] font-dm-sans leading-8 max-w-xs">
                            In the new era of technology we look a in the future with
                            certainty and pride to for our company and.
                        </p>

                        <div className="flex items-center gap-3 mt-8">
                            {[
                                <FaTwitter key="twitter" />,
                                <FaFacebookF key="facebook" />,
                                <FaInstagram key="instagram" />,
                                <FaGithub key="github" />,
                            ].map((icon, index) => (
                                <div
                                    key={index}
                                    className="w-10 h-10 rounded-full bg-[#AD343E] flex items-center justify-center cursor-pointer hover:scale-110 duration-300"
                                >
                                    {icon}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pages */}
                    <div>
                        <h3 className="font-semibold mb-8">Pages</h3>

                        <ul className="space-y-4 font-dm-sans text-[#DBDFD0]">
                            {pages.map((item) => (
                                <li key={item}>
                                    <Link
                                        href="/"
                                        className="hover:text-white duration-300"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Utility Pages */}
                    <div>
                        <h3 className="font-semibold mb-8">
                            Utility Pages
                        </h3>

                        <ul className="space-y-4 font-dm-sans text-[#DBDFD0]">
                            {utilityPages.map((item) => (
                                <li key={item}>
                                    <Link
                                        href="/"
                                        className="hover:text-white duration-300"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Instagram */}
                    <div>
                        <h3 className="font-semibold mb-8">
                            Follow Us On Instagram
                        </h3>

                        <div className="grid grid-cols-2 gap-4">
                            {instagramImages.map((image, index) => (
                                <div
                                    key={index}
                                    className="overflow-hidden rounded-xl"
                                >
                                    <Image
                                        src={image}
                                        alt={`food-${index}`}
                                        width={180}
                                        height={140}
                                        className="w-full h-[120px] object-cover hover:scale-110 duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-[#5A5A5A] mt-16 pt-8">
                    <p className="text-center text-[#ADB29E] text-sm">
                        Copyright © {newYear} Hashtag Developer. All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;