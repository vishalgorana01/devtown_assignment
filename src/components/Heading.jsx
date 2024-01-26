import React from 'react'

// react icons
import { TbMathGreater } from "react-icons/tb";

// images
import background from '../assets/images/7971.jpg'

function Heading() {
  return (
    <>
    <section className='flex items-center justify-center w-screen'>
        <div className='flex items-center justify-center py-8 max-w-screen-xl w-full'>
            <span className='relative flex flex-col items-center justify-center gap-y-2.5 w-full h-48'>
                <img src={background} alt="loading error" className='absolute h-full w-full object-cover' />
                <h1 className='relative text-cyan-200 text-xl tracking-wider font-semibold '>CATEGORIES PRODUCTS</h1>
                <span className='relative text-sm text-cyan-200 flex items-center justify-center gap-x-2'>
                    <h4 className='text-base tracking-wider'>Home</h4>
                    <TbMathGreater className='text-xs mt-1' />
                    <h4 className='text-base tracking-wider'>Products</h4>
                </span>
            </span>
        </div>
    </section>
    </>
  )
}

export default Heading