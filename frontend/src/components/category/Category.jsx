import React from 'react'
import Button from '../Shared/Button'
import images from '../../assets/componentpics/images.png'
import watch from '../../assets/componentpics/watch.png'
import macbook from '../../assets/componentpics/macbook.png'

const Category = () => {
  return (
    <div className='py-8'>
    <div className='px-[1rem] sm:px-[3rem]'>
        {/* cart main div  */}
        <div className=' gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 '>
            {/* fir cart  */}
            <div className='h-[320px] bg-gradient-to-b
            from-gray-900 to-gray-700 rounded-3xl hover:scale-105 duration-200 pl-5 relative'>
                <div className='mt-16'>
              <p className='opacity-50 text-2xl'>Enjoy</p>
              <p className='font-bold text-3xl'>With</p>
              <p className='font-bold opacity-20 text-5xl pb-5'>Earphone</p>
              <Button 
              text="Add to cart"
              className="bg-red-600 hover:bg-red-800"/>
              </div>
                 <img src={images} alt=""className=" absolute -top-1 -right-2" />

            </div>
            {/* second div  */}
            <div className='h-[320px] bg-gradient-to-b
            from-yellow-300 to-yellow-200 rounded-3xl hover:scale-105 duration-200 pl-5 relative'>
                <div className='mt-16'>
              <p className='opacity-25 text-2xl'>Have</p>
              <p className='font-bold text-3xl'>A</p>
              <p className='font-bold opacity-20 text-5xl pb-5'>Watch</p>
              <Button 
              text="Add to cart"
              className="bg-yellow-500 hover:bg-yellow-700"/>
              </div>
                 <img src={watch} alt=""className=" absolute -top-1/200 -right-20" />

            </div>
            {/* third cart  */}
           <div className='h-[320px] bg-gradient-to-b col-span-2
            from-gray-600 to-gray-300 rounded-3xl hover:scale-105 duration-200 pl-5 relative'>
                <div className='mt-16'>
              <p className='opacity-25 text-2xl'>Show your</p>
              <p className='font-bold text-3xl'> Skills With</p>
              <p className='font-bold opacity-20 text-5xl pb-5'>Powerful Macbook</p>
              <Button 
              text="Add to cart"
              className="bg-gray-500 hover:bg-gray-700 "/>
              </div>
                 <img src={macbook} alt=""className=" absolute -top-5 -right-8 h-90 w-100 rotate-y-180" />

            </div>
        </div>
    </div>
    </div>
  )
}

export default Category