"use client"
import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import Link from 'next/link'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'
import { IoMdStar, IoMdStarHalf } from 'react-icons/io'
import Image from "next/image";

const About = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh();
  }, []);
  return (
    <section className="text-gray-600 body-font overflow-hidden max-w-screen-2xl mx-auto"
      data-aos="zoom-in-up">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex justify-between flex-wrap">
          <Image
            width={500}
            height={500}
            alt="about"
            className="border border-white shadow=[0_0_10px_rgba(255, 255, 255, 0.7),_0_0_20px_rgba(25, 255, 255, 0.5)] lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded hover:shadow-3xl"
            src="/assets/images/about-pic.jpg"
          />

          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 data-aos="zoom-in-up" className="text-sm title-font text-white tracking-widest">
              Professional Freelance Designer & Developer
            </h2>
            <h1 className="text-white text-3xl title-font font-medium mb-1">
              About Me
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <IoMdStar className='text-2xl text-yellow-500' />
                <IoMdStar className='text-2xl text-yellow-500' />
                <IoMdStar className='text-2xl text-yellow-500' />
                <IoMdStar className='text-2xl text-yellow-500' />
                <IoMdStarHalf className='text-2xl text-yellow-500' />

                <span className="text-white ml-3">4.9 | (73) Reviews</span>
              </span>
            </div>
            <p className="leading-relaxed text-white"
              data-aos="zoom-in-up">
              Hi, I&rsquo;m Aisha &ndash; a passionate and dedicated Level 2 Seller on Fiverr. With expertise as a Graphic Designer, UI/UX Designer, and Full Stack Developer, I combine creativity with technical skill to deliver exceptional designs and digital solutions. Currently, I&rsquo;m also a student in the Generative AI and Web 3.0 course, expanding my skills to keep up with the latest advancements. I take immense pride in my work and strive to create impactful digital experiences for my clients.
            </p>
            <div className="flex items-center pb-5 border-b-2 border-gray-100 mb-5 w-1/3"></div>
            <div>
              <button className="hidden md:flex rounded-[5px] items-center gap-2 bg-gradient-to-b from-teal-400 to-blue-500 transition duration-200 hover:from-teal-500 hover:to-blue-600 mr-8 shadow-2xl">
                <Link
                  className="text-white px-6 py-2 flex items-center gap-2"
                  href="/contact"
                >
                  Contact Me
                  <FaRegArrowAltCircleRight className='text-xl' />
                </Link>
              </button>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About
