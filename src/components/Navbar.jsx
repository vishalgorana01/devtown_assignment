import React, { useState } from 'react'

// react icons
import { IoHome } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
    const [show, setShow] = useState(false)

    return (
        <section className='flex items-center justify-center w-screen bg-[#202020]'>
            <div className='flex items-center justify-center w-full max-w-screen-xl'>
                <nav className='flex items-center justify-between w-full px-3'>
                    <ul className='flex items-center justify-center gap-x-2.5 mb-0'>
                        <li className='py-2 px-3 hover:bg-orange-500 lg:inline-block'><a href="" className='text-cyan-200 text-2xl'><IoHome /></a></li>
                        <li className='py-2 px-3 hidden hover:bg-orange-500 lg:inline-block'><a href="" className='text-cyan-200 text-base'>Smartphones</a></li>
                        <li className='py-2 px-3 hidden hover:bg-orange-500 lg:inline-block'><a href="" className='text-cyan-200 text-base'>Laptops</a></li>
                        <li className='py-2 px-3 hidden hover:bg-orange-500 lg:inline-block'><a href="" className='text-cyan-200 text-base'>Electronics</a></li>
                        <li className='py-2 px-3 hidden hover:bg-orange-500 lg:inline-block'><a href="" className='text-cyan-200 text-base'>Accesories</a></li>
                        <li className='py-2 px-3 hidden hover:bg-orange-500 lg:inline-block'><a href="" className='text-cyan-200 text-base'>About us</a></li>
                        <li className='py-2 px-3 hidden hover:bg-orange-500 lg:inline-block'><a href="" className='text-cyan-200 text-base'>Blog</a></li>
                    </ul>

                    <ul className='flex items-center justify-center gap-x-2 mb-0'>
                        <li className='py-2 px-3 inline-block hover:bg-orange-500 lg:hidden'><a className='text-cyan-200 text-2xl' onClick={() => setShow(!show)}><IoMdMenu /></a></li>
                        <li className='py-3 px-3 hidden hover:bg-orange-500 lg:inline-block'><a href="" className='text-cyan-200 text-base'><FaTwitter /></a></li>
                        <li className='py-3 px-3 hidden hover:bg-orange-500 lg:inline-block'><a href="" className='text-cyan-200 text-base'><FaFacebookF /></a></li>
                        <li className='py-3 px-3 hidden hover:bg-orange-500 lg:inline-block'><a href="" className='text-cyan-200 text-base'><FaInstagram /></a></li>
                    </ul>
                </nav>

                <span className={`${show ? 'inline-block' : 'hidden'} fixed w-screen h-screen bg-[#0000001a] top-0 left-0`} onClick={() => setShow(!show)}></span>

                <nav className={`fixed z-10 bg-[#202020] ease-in-out ${show ? 'translate-x-0 duration-500' : 'translate-x-full duration-700'} top-0 right-0 min-h-screen flex flex-col items-start justify-between w-full sm:w-72 pt-16`}>
                    <AiOutlineClose className={`absolute ${show ? 'rotate-0 duration-700 ease-in-out' : 'rotate-45 duration-200 ease-in-out'} top-7 right-7 text-2xl text-cyan-200`} onClick={() => setShow(!show)}/>
                    <ul className='flex flex-col w-full h-full items-start justify-center gap-x-2.5'>
                        <li className='py-2 px-8 w-full text-left hover:bg-orange-500'><a href="" className='text-cyan-200 text-base'>Home</a></li>
                        <li className='py-2 px-8 w-full text-left hover:bg-orange-500'><a href="" className='text-cyan-200 text-base'>Smartphones</a></li>
                        <li className='py-2 px-8 w-full text-left hover:bg-orange-500'><a href="" className='text-cyan-200 text-base'>Laptops</a></li>
                        <li className='py-2 px-8 w-full text-left hover:bg-orange-500'><a href="" className='text-cyan-200 text-base'>Electronics</a></li>
                        <li className='py-2 px-8 w-full text-left hover:bg-orange-500'><a href="" className='text-cyan-200 text-base'>Accesories</a></li>
                        <li className='py-2 px-8 w-full text-left hover:bg-orange-500'><a href="" className='text-cyan-200 text-base'>About us</a></li>
                        <li className='py-2 px-8 w-full text-left hover:bg-orange-500'><a href="" className='text-cyan-200 text-base'>Blog</a></li>
                    </ul>

                    <ul className='flex px-5 items-center justify-center gap-x-2'>
                        <li className='py-3 px-3'><a href="" className='text-cyan-200 text-base'><FaTwitter className='hover:text-orange-500' /></a></li>
                        <li className='py-3 px-3'><a href="" className='text-cyan-200 text-base'><FaFacebookF className='hover:text-orange-500' /></a></li>
                        <li className='py-3 px-3'><a href="" className='text-cyan-200 text-base'><FaInstagram className='hover:text-orange-500' /></a></li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}

export default Navbar