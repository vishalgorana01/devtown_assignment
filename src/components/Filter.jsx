import React, { useEffect, useState } from 'react'

// rsuite slider
import { Slider, RangeSlider } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

// react-icons
import { VscDebugBreakpointLog } from "react-icons/vsc";

function Filter({filter, setFilter}) {
    const [price, setPrice] = useState([30, 40])

    return (
        <>
            <div className='hidden flex-col gap-y-10 items-start justify-start w-80 xl:flex'>
                <span className='flex flex-col gap-y-5 items-start justify-start w-full'>
                    <h2 className='text-black font-bold tracking-wide text-base'>FILTER BY :</h2>

                    <span className='flex flex-col items-start justify-start w-full border-2 border-[#0000001a] border-solid'>
                        <span className='text-black text-left px-3 py-2.5 border-b-2 border-solid border-[#0000001a] w-full text-base'>CATEGORIES</span>
                        <span className='text-black text-left font-semibold px-3 py-2.5 w-full text-sm cursor-pointer hover:bg-orange-500' onClick={() => setFilter('Smartphones')}><VscDebugBreakpointLog className='inline-block text-xs mb-0.5 mr-1'  />Smartphones</span>
                        <span className='text-black text-left font-semibold px-3 py-2.5 w-full text-sm cursor-pointer hover:bg-orange-500' onClick={() => setFilter('Laptop')}><VscDebugBreakpointLog className='inline-block text-xs mb-0.5 mr-1' />Laptop</span>
                        <span className='text-black text-left font-semibold px-3 py-2.5 w-full text-sm cursor-pointer hover:bg-orange-500' onClick={() => setFilter('Electronics')}><VscDebugBreakpointLog className='inline-block text-xs mb-0.5 mr-1' />Electronics</span>
                        <span className='text-black text-left font-semibold px-3 py-2.5 w-full text-sm cursor-pointer hover:bg-orange-500' onClick={() => setFilter('Accessories')}><VscDebugBreakpointLog className='inline-block text-xs mb-0.5 mr-1' />Accessories</span>
                        <span className='text-black text-left font-semibold px-3 py-2.5 w-full text-sm cursor-pointer hover:bg-orange-500' onClick={() => setFilter('Cameras')}><VscDebugBreakpointLog className='inline-block text-xs mb-0.5 mr-1' />Cameras</span>
                        <span className='text-black text-left font-semibold px-3 py-2.5 w-full text-sm cursor-pointer hover:bg-orange-500' onClick={() => setFilter('Computers&Accessories')}><VscDebugBreakpointLog className='inline-block text-xs mb-0.5 mr-1' />Computers & Accessories</span>
                        <span className='text-black text-left font-semibold px-3 py-2.5 w-full text-sm cursor-pointer hover:bg-orange-500' onClick={() => setFilter('Headphones')}><VscDebugBreakpointLog className='inline-block text-xs mb-0.5 mr-1' />Headphones</span>
                        <span className='text-black text-left font-semibold px-3 py-2.5 w-full text-sm cursor-pointer hover:bg-orange-500' onClick={() => setFilter('')}><VscDebugBreakpointLog className='inline-block text-xs mb-0.5 mr-1' />All Categories</span>
                    </span>
                </span>

                <span className='flex flex-col gap-y-5 py-3.5 px-3 items-start justify-start w-full border-2 border-[#0000001a] border-solid'>
                    <h2 className='text-black font-bold tracking-wide text-base'>Filter by Price :</h2>

                    <RangeSlider
                        className='w-full bg-[#0000001a] text-orange-500 text-xs'
                        defaultValue={[30, 40]}
                        onChange={value => {
                            setPrice(value);
                        }}
                    />
                    <span className='flex items-center justify-between w-full'>
                        <span className='flex items-center justify-start gap-x-2'>
                            <span className='text-sm font-semibold py-1.5 px-2.5 text-black border-2 border-solid border-[#0000001a]'>{price[0]}</span>
                            <span>to</span>
                            <span className='text-sm font-semibold py-1.5 px-2.5 text-black border-2 border-solid border-[#0000001a]'>{price[1]}</span>
                        </span>
                        <span className='py-1.5 px-3.5 font-semibold tracking-wider cursor-pointer bg-[#202020] text-cyan-200 hover:bg-orange-500'>filter</span>
                    </span>
                </span>
            </div>
        </>
    )
}

export default Filter