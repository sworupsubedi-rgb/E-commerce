import React from 'react'
import Button from '../Shared/Button'

const Banner = ({data}) => {

    
    
  return (
    <div className=" px-[1rem] sm:px-[3rem] my-12 ">
       <div className={` ${data.classname} grid grid-cols-1 sm:grid-cols-3 rounded-3xl items-center gap-6 
       hover:scale-105 duration-200 text-white `}>
      {/* first content  */}
      <div className='p-8'>
         <p className='text-sm'>{data.discount}</p>
         <h1 className='uppercase text-4xl lg:text-7xl font-bold '>
              {data.title2}
         </h1>
         <p className='text-sm'>
            {data.date}
         </p>
      </div>
       {/* second content  */}
       <div>
           <img
            src={data.image} 
            alt=""
            className=' w-[250px] md:w-[350px]
            drop-shadow-2xl object-contain scale-150' />
       </div>
       {/* third content  */}
       <div>
          <p className='font-bold text-xl'>
            {data.title2}
          </p>
          <p className='text-3xl sm:text-5xl font-semibold'>
            {data.title3}
          </p>
          <p className='text-sm'>
            {data.title4}
          </p>
          <div>
            <Button text="Shop Now" className={` ${data.classname} bg-white hover:bg-blue-200 duration-200 my-3 
            hover:scale-125 `} />
            
          </div>
       </div>

       </div>
    </div>
  )
}

export default Banner
