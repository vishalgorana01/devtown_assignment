import React, {useEffect, useState} from 'react'
import Filter from './Filter'
import Items from './Items'
import { rawData } from './Data'

function Products() {
  const [filter, setFilter]= useState('|')

  const [data, setData] = useState([])

  useEffect(() => {
    console.log(filter)
    // setData(rawData)

    setData(
      rawData.filter((ele, idx) => {
        return ele.category.includes(filter)
      })
    )
  }, [filter])


  return (
    <>
    <section className='flex items-center justify-center w-screen'>
        <div className='flex items-start gap-x-5 px-3 justify-center w-full max-w-screen-xl lg:px-6'>
            <Filter setFilter={setFilter} />
            <Items data={data} setFilter={setFilter} />
        </div>
    </section>
    </>
  )
}

export default Products