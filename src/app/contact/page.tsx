import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { FaBehanceSquare, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';

const Contact = () => {
  return (
    <div className='py-32 px-16 max-w-screen-2xl mx-auto'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
          <h2 className='text-5xl text-white' data-aos="zoom-in-up" >
            Get in touch</h2>
          <p className='text-gray-400 text-[18px] pt-2' data-aos="zoom-in-up">
            Drop me a line, give me a call, or send me a message by submitting the form.
          </p>

          <div className='flex gap-3 items-center text-white' data-aos="zoom-in-up">
            <AiOutlineMail size={30} /> aisha123@gmail.com
          </div>
          <div className='flex gap-3 items-center text-white' data-aos="zoom-in-up">
            <BsTelephone size={30} /> +92 333 1234567
          </div>
          <div className='flex gap-3 items-center' data-aos="zoom-in-up">
            <Link href="https://www.linkedin.com/in/aisha-486a4b228/" target='blank'>
              <FaLinkedin className='text-2xl text-white' />
            </Link>
            <Link href="https://github.com/Ai-sha19" target='blank'>
              <FaGithub className='text-2xl text-white' />
            </Link>
            <Link href="https://www.behance.net/aisha17" target='blank'>
              <FaBehanceSquare className='text-2xl text-white' />
            </Link>
            <Link href="https://www.fiverr.com/aisha_graphix?up_rollout=true" target='blank'>
              <SiFiverr className='text-4xl text-white' />
            </Link>
          </div>
        </div>

        <div className='space-y-8 text-white'>
          <div className='flex flex-col gap-1' data-aos="zoom-in-up">
            <label htmlFor="name">Name</label>
            <input type="text" className="h-[40px] bg-transparent border border-sky-500"
              id='name' />
          </div>

          <div className='flex flex-col gap-1' data-aos="zoom-in-up">
            <label htmlFor="email">Email</label>
            <input type="text" className="h-[40px] bg-transparent border border-sky-500"
              id='email' />
          </div>

          <div className='flex flex-col gap-1' data-aos="zoom-in-up">
            <label htmlFor="msg">Message</label>
            <textarea
              className="bg-transparent border border-sky-500"
              id='msg'
              rows={8}>
            </textarea>
          </div>

          <button className='bg-gradient-to-b from-teal-400 to-blue-500 p-2 px-6 hover:from-teal-500 hover:to-blue-600 transition duration-400 rounded-md' data-aos="zoom-in-up">Send</button>


        </div>

      </div>
    </div>
  );
}

export default Contact;
