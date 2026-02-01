import React from 'react'
import Button from '../Shared/Button'
import images from '../../assets/componentpics/images.png'
import speaker from '../../assets/componentpics/speaker.png'

const Catagory = () => {
  return (
    <div className='py-8'>
    <div className='px-[1rem] sm:px-[3rem]'>
        {/* cart main div  */}
        <div className=' gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 '>
            {/* fir cart  */}
           <div className='h-[320px] bg-gradient-to-b col-span-2
            from-red-700 to-black rounded-3xl hover:scale-105 duration-200 pl-5 relative'>
                <div className='mt-16'>
              <p className='opacity-25 text-2xl'>Enjoy</p>
              <p className='font-bold text-3xl'>With</p>
              <p className='font-bold opacity-20 text-5xl pb-5'>Play Station</p>
              <Button 
              text="Add to cart"
              className="bg-red-600 "/>
              </div>
                 <img src={speaker} alt=""className=" absolute -top-1 -right-2" />

            </div>
              {/* second div  */}
            <div className='h-[320px] bg-gradient-to-b
            from-gray-900 to-gray-700 rounded-3xl hover:scale-105 duration-200 pl-5 relative'>
                <div className='mt-16'>
              <p className='opacity-25 text-2xl'>Enjoy</p>
              <p className='font-bold text-3xl'>With</p>
              <p className='font-bold opacity-20 text-5xl pb-5'>Earphone</p>
              <Button 
              text="Add to cart"
              className="bg-red-600 "/>
              </div>
                 <img src={images} alt=""className=" absolute -top-1 -right-2" />

            </div>
            {/* third cart  */}
            <div className='h-[320px] bg-gradient-to-b
            from-gray-900 to-gray-700 rounded-3xl hover:scale-105 duration-200 pl-5 relative'>
                <div className='mt-16'>
              <p className='opacity-25 text-2xl'>Enjoy</p>
              <p className='font-bold text-3xl'>With</p>
              <p className='font-bold opacity-20 text-5xl pb-5'>Earphone</p>
              <Button 
              text="Add to cart"
              className="bg-red-600 "/>
              </div>
                 <img src={images} alt=""className=" absolute -top-1 -right-2" />

            </div>
        </div>
    </div>
    </div>
  )
}

export default Catagory