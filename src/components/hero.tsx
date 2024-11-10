"use client"

import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <section className='max-w-screen-2xl mx-auto max-container padding-container flex flex-col gap-10 px-5 pt-2 md:gap-20 lg:pt-2 lg:flex-row lg:justify-center lg:px-16 relative h-screen min-h-screen'
            data-aos="zoom-in-up">

            <span
                className="absolute top-0 left-0 h-full w-full -z-10"
            >
            </span>

            {/* Left: Text section */}
            <div className='relative z-20 flex flex-1 flex-col justify-center items-start text-left ml-5'>
                <h2 className='bg-gradient-to-b from-teal-400 to-blue-400 bg-clip-text text-transparent text-2xl transition duration-300 hover:text-blue-500'>Hello,</h2>
                <h1 className='text-white text-4xl font-bold md:text-5xl lg:text-6xl transition duration-300'> I&apos;m Aisha</h1>
                <h2 className='bg-gradient-to-b from-teal-400 to-blue-400 bg-clip-text text-transparent font-semibold text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] capitalize'>
                    A {' '}
                    <span>
                        <Typewriter
                            words={['Full Stack Developer', 'Graphic Designer', 'UI/UX Designer', 'Teacher']}
                            loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                        />
                    </span>
                </h2>
                <p className='text-white regular-16 max-w-[555px] my-4 text-left'>
                    A Graphic Designer, UI/UX Designer, and Full Stack Developer with a Level 2 Seller status on Fiverr. Currently, I&apos;m studying Generative AI and Web 3.0 to enhance my skills. I take pride in delivering exceptional designs and impactful digital experiences for my clients.
                </p>

                <div className='my-5 flex flex-wrap'>
                    <Link href="../contact">
                        <button className="transition duration-400 hover:from-teal-500 hover:to-blue-600 shadow-2xl py-2 px-4 rounded-md bg-gradient-to-b from-teal-400 to-blue-500 text-white">Hire me</button></Link>
                </div>
            </div>

            {/* Right: Image section */}
            <div className='relative z-20 flex flex-1 justify-center items-center'>
                <Image
                    src='/assets/images/banner-img-01.png'
                    alt='Aisha'
                    width={400}
                    height={400}
                    className=''
                />
            </div>
        </section>
    )
}

export default Hero




