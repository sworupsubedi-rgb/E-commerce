import React from 'react'
import brand1 from '../../assets/brand/br-1.png'
import brand2 from '../../assets/brand/br-2.png'
import brand3 from '../../assets/brand/br-3.png'
import brand4 from '../../assets/brand/br-4.png'
import brand5 from '../../assets/brand/br-5.png'

const Sponser = () => {
  return (
    <div className='px-[1rem] sm:px-[3rem] bg-gray-200 my-10 rounded-xl hover:bg-gray-300 '>
        <div className='grid grid-cols-5 items-center opacity-50 hover:scale-102 duration-700'>
            <img src={brand1} alt="" />
            <img src={brand2} alt="" />
            <img src={brand3} alt="" />
            <img src={brand4} alt="" />
            <img src={brand5} alt="" />
            </div>
    </div>
  )
}

export default Sponser