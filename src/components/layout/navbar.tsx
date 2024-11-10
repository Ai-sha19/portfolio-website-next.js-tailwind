"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { AiOutlineCloudDownload } from 'react-icons/ai';
import { Menu } from 'lucide-react';

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

function Navbar() {
    return (
        <header className='flex justify-between items-center px-14 py-4 text-white max-w-screen-2xl mx-auto'>
            {/* logo */}
            <div>
                <Image src='/assets/images/Aisha-logo.png' alt='logo' width={150} height={150} />
            </div>

            {/* Nav buttons - Show on screens 1024px nd above */}
            <ul className='hidden md:flex space-x-14'>
                <li>
                    <Link className='hover:text-sky-400' href="/">Home</Link>
                </li>
                <li>
                    <Link className='hover:text-sky-400' href="/about">About</Link>
                </li>
                <li>
                    <Link className='hover:text-sky-400' href="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link className='hover:text-sky-400' href="/contact">Contact</Link>
                </li>
            </ul>

            {/* Download CV Button - Show on screens 1024px nd above */}
            <a href="/assets/cv/cv.pdf" target="_blank" rel="noopener noreferrer" className="hidden md:block">
                <button className='flex rounded-[5px] items-center gap-1 bg-gradient-to-b from-teal-400 to-blue-500 transition duration-400 hover:from-teal-500 hover:to-blue-600 shadow-2xl px-5 py-3 text-white'>
                    Download CV
                    <AiOutlineCloudDownload className='text-xl ml-2' />
                </button>
            </a>

            {/* Mobile Menu Toggle, show below 1024px */}
            <Sheet>
                <SheetTrigger className='md:hidden'>
                    <Menu />
                </SheetTrigger>
                <SheetContent className='flex flex-col items-center text-center gap-4'>
                    <ul className="flex flex-col items-center gap-4">
                        <li>
                            <Link className='hover:text-sky-400' href="/">Home</Link>
                        </li>
                        <li>
                            <Link className='hover:text-sky-400' href="/about">About</Link>
                        </li>
                        <li>
                            <Link className='hover:text-sky-400' href="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                            <Link className='hover:text-sky-400' href="/contact">Contact</Link>
                        </li>
                    </ul>
                    <a href="/assets/cv/cv.pdf" target="_blank" rel="noopener noreferrer">
                        <button className='text-center flex rounded-[5px] items-center gap-1 bg-gradient-to-b from-teal-400 to-blue-500 transition duration-400 hover:from-teal-500 hover:to-blue-600 shadow-2xl px-5 py-3 text-white'>
                            Download CV
                            <AiOutlineCloudDownload className='text-xl ml-2' />
                        </button>
                    </a>
                </SheetContent>
            </Sheet>
        </header>
    )
}

export default Navbar
