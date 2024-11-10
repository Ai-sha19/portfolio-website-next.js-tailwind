"use client"

import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio: React.FC = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className="flex flex-col gap-10 bg-cover bg-center text-white pt-20 pb-6 max-width" id="portfolio">
            {/* Web Projects Section */}
            <div className="text-center mb-12">
                <h2
                    className="text-4xl font-bold text-[color-for-hello-text] mb-4"
                    data-aos="zoom-in-up"
                >
                    Website Portfolio
                </h2>
                <div className="mt-8 flex flex-wrap justify-center gap-12">
                    <Image
                        src="/assets/images/web1.jpg"
                        alt="Web Project 1"
                        width={400}
                        height={400}
                        className="rounded-md shadow-lg transition-transform transform hover:scale-110 cursor-pointer ease-in-out duration-300"
                        data-aos="zoom-in-up"
                    />
                    <Image
                        src="/assets/images/web2.jpg"
                        alt="Web Project 2"
                        width={400}
                        height={400}
                        className="rounded-md shadow-lg transition-transform transform hover:scale-110 cursor-pointer ease-in-out duration-300"
                        data-aos="zoom-in-up"
                    />
                </div>
            </div>

            {/* Graphic Projects Section */}
            <div className="text-center mb-12">
                <h2
                    className="text-4xl font-bold text-[color-for-hello-text] mb-4"
                    data-aos="zoom-in-up"
                >
                    Graphic Portfolio
                </h2>
                <div className="mt-8 flex flex-wrap justify-center gap-6">
                    <Image
                        src="/assets/images/g15.jpg"
                        alt="Graphic Project 1"
                        width={300}
                        height={200}
                        className="rounded-md shadow-lg transition-transform transform hover:scale-110 cursor-pointer ease-in-out duration-300"
                        data-aos="zoom-in-up"
                    />
                    <Image
                        src="/assets/images/g7.jpg"
                        alt="Graphic Project 2"
                        width={300}
                        height={200}
                        className="rounded-md shadow-lg transition-transform transform hover:scale-110 cursor-pointer ease-in-out duration-300"
                        data-aos="zoom-in-up"
                    />
                    <Image
                        src="/assets/images/g4.jpg"
                        alt="Graphic Project 3"
                        width={300}
                        height={200}
                        className="rounded-md shadow-lg transition-transform transform hover:scale-110 cursor-pointer ease-in-out duration-300"
                        data-aos="zoom-in-up"
                    />
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-6">
                    <Image
                        src="/assets/images/g14.jpg"
                        alt="Graphic Project 1"
                        width={300}
                        height={200}
                        className="rounded-md shadow-lg transition-transform transform hover:scale-110 cursor-pointer ease-in-out duration-300"
                        data-aos="zoom-in-up"
                    />
                    <Image
                        src="/assets/images/g9.jpg"
                        alt="Graphic Project 2"
                        width={300}
                        height={200}
                        className="rounded-md shadow-lg transition-transform transform hover:scale-110 cursor-pointer ease-in-out duration-300"
                        data-aos="zoom-in-up"
                    />
                    <Image
                        src="/assets/images/g25.jpg"
                        alt="Graphic Project 3"
                        width={300}
                        height={200}
                        className="rounded-md shadow-lg transition-transform transform hover:scale-110 cursor-pointer ease-in-out duration-300"
                        data-aos="zoom-in-up"
                    />
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
