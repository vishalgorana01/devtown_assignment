import React, { useEffect, useState } from 'react'

// react icons
import { IoGridSharp } from "react-icons/io5";
import { IoListSharp } from "react-icons/io5";
import { BsCurrencyPound } from "react-icons/bs";
import { IoStarSharp } from "react-icons/io5";
import { rawData } from './Data';

function Items({data}) {
    const stars = [1, 2, 3, 4, 5]
    const [show_items, setshow_items] = useState(10)
    const [min_pages, set_min_pages] = useState(1)
    const [max_pages, set_max_pages] = useState(10)

    const [pages, setPages] = useState(1)

    useEffect(() => {
        set_max_pages(parseInt((rawData.length)/10))
        setPages()
    }, [])

    return (
        <>
            <div className='flex flex-col items-center gap-y-5 justify-center w-full'>
                <span className='flex gap-x-2.5 items-center justify-between w-full pb-3 border-b-2 border-solid border-[#0000001a]'>
                    <span className='flex items-center justify-start gap-x-2.5'>
                        <IoGridSharp className='cursor-pointer text-xl hover:text-orange-500' />
                        <IoListSharp className='cursor-pointer text-2xl hover:text-orange-500' />
                    </span>
                    <span className='flex items-center justify-end gap-x-1.5'>
                        <span className='text-sm font-semibold text-black mr-1.5'>pages :</span>
                        <span className='text-sm cursor-pointer py-1 px-2.5 text-black border-2 border-solid border-[#0000001a] hover:bg-orange-500 hover:text-cyan-200'>1</span>
                        <span className='text-sm cursor-pointer py-1 px-2.5 text-black border-2 border-solid border-[#0000001a] hover:bg-orange-500 hover:text-cyan-200'>2</span>
                        <span className='text-sm cursor-pointer py-1 px-2.5 text-black border-2 border-solid border-[#0000001a] hover:bg-orange-500 hover:text-cyan-200'>3</span>
                        <span className='text-sm cursor-pointer py-1 px-2.5 text-black border-2 border-solid border-[#0000001a] hover:bg-orange-500 hover:text-cyan-200'>4</span>

                        {
                            
                        }


                    </span>
                </span>

                <span className={`grid grid-cols-1 gap-x-5 gap-y-10 w-full sm:grid-cols-2 lg:grid-cols-3`}>
                    {
                        data.length != 0 ?
                            data.map((ele, index) => {
                                return (
                                    <span key={index} className={`relative flex bg-white flex-col gap-y-2.5 items-center cursor-pointer justify-center w-full py-3.5 pb-10 px-3 border-2 border-[#0000001a] border-solid rounded-md`}>
                                        <img src={ele.img_link} alt="loading error" className='h-32 w-32 mb-5 object-cover' />
                                        <span className='flex items-center justify-center gap-x-1'>
                                            {stars.map((element, idx) => {
                                                return (
                                                    <IoStarSharp key={idx} className={`${parseInt(ele.rating) > idx ? 'text-orange-700' : 'text-gray-400'}`} />
                                                )
                                            })}
                                        </span>
                                        <h4 className='text-sm font-light'>{ele.product_name}</h4>
                                        <span className='text-base font-semibold'>
                                            <BsCurrencyPound className='mb-1 text-lg inline-block mr-1' />
                                            {ele.actual_price}
                                        </span>
                                        <span className='absolute -bottom-5 bg-white cursor-pointer rounded-full py-2.5 px-3.5 border-[#0000001a] border-solid border-2'>
                                            Add to cart
                                        </span>
                                    </span>
                                )
                            })
                            :
                            'there is no item available for this product'
                    }
                </span>
            </div>
        </>
    )
}

export default Items