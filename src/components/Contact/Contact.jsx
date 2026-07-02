import React from "react";

const Contact = () => {
    return (
        <section className="relative min-h-screen flex-col flex gap-6 pt-40 pb-20 bg-[#f9f9f7]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className="text-center">
                    <h1 className="font-playfair text-6xl md:text-7xl text-[#2C2F24]">
                        Contact Us
                    </h1>

                    <p className="text-gray-500 font-dm-sans max-w-lg mx-auto mt-4">
                        We consider all the drivers of change gives you the components
                        you need to change to create a truly happens.
                    </p>
                </div>

                {/* Form Card */}
                <div className="max-w-3xl mx-auto mt-14 bg-white rounded-3xl p-8 md:p-10 shadow-lg">
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-5">
                            {/* Name */}
                            <div>
                                <label className="block text-sm font-semibold mb-2">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full border border-gray-200 rounded-full px-5 py-3 outline-none focus:border-[#AD343E]"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-semibold mb-2">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    placeholder="Enter email address"
                                    className="w-full border border-gray-200 rounded-full px-5 py-3 outline-none focus:border-[#AD343E]"
                                />
                            </div>
                        </div>

                        {/* Subject */}
                        <div>
                            <label className="block text-sm font-semibold mb-2">
                                Subject
                            </label>

                            <input
                                type="text"
                                placeholder="Write a subject"
                                className="w-full border border-gray-200 rounded-full px-5 py-3 outline-none focus:border-[#AD343E]"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm font-semibold mb-2">
                                Message
                            </label>

                            <textarea
                                rows={5}
                                placeholder="Write your message"
                                className="w-full border border-gray-200 rounded-2xl px-5 py-3 outline-none resize-none focus:border-[#AD343E]"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#AD343E] hover:bg-[#972d36] text-white py-4 rounded-full font-medium transition cursor-pointer"
                        >
                            Send
                        </button>
                    </form>
                </div>

                {/* Contact Info */}
                <div className="max-w-3xl mx-auto mt-14 grid md:grid-cols-3 gap-10">
                    <div>
                        <h3 className="font-semibold text-[#2C2F24] mb-3">Call Us:</h3>
                        <p className="text-[#AD343E] font-bold text-lg">
                            +1-234-567-8900
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-[#2C2F24] mb-3">Hours:</h3>
                        <p className="text-gray-600">Mon-Fri: 11am - 8pm</p>
                        <p className="text-gray-600">Sat, Sun: 9am - 10pm</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-[#2C2F24] mb-3">
                            Our Location:
                        </h3>
                        <p className="text-gray-600">
                            123 Bridge Street
                            <br />
                            Nowhere Land, LA 12345
                            <br />
                            United States
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;