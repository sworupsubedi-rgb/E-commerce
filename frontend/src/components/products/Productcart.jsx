import React from 'react'
import Button from '../Shared/Button'

const Productcart = ({data}) => {
  return (
    <div className=' px-[3rem] py-12'>

      <div  className='grid grid-cols-1 gap-4 sm:grid-cols-4 items-center mx-auto '>

       {data.map((i)=> (

      <div className=' relative group rounded-2xl hover:scale-105 duration-200'>


        {/* image section  */}
        <div >
            <img src={i.image} className='rounded-2xl object-cover h-[180px] w-[260px]' alt="" />
            <div className='absolute  top-30 translate-x-1/3 hidden group-hover:flex duration-200 justify-center'>
            <Button text="Add to cart"
            className="bg-red-600 text-white"/>
            </div>
        </div>


       {/* description section  */}
       <div>
        <h1 className='font-semibold'>{i.title}</h1>
        <p className='font-bold'> ${i.price} </p>
       </div>
</div>     
         ))}
      </div>




    </div>
  )
}

export default Productcart