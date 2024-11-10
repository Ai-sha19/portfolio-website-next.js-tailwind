import React from 'react'
import { FaBehanceSquare, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';
import Image from 'next/image'
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <footer className="text-gray-600">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <div>
            <Image src='/assets/images/Aisha-logo.png' alt='logo' width={150} height={150} />
          </div>
          <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © All rights reserved 2024
          </p>
          <span className="inline-flex gap-3 items-center sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
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
          </span>
        </div>
      </footer>
    </footer>
  )
}

export default Footer
