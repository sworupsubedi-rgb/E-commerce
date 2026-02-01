import React from 'react'
import Productcart from './Productcart'
import img1 from '../../assets/productpic/p-1.jpg'
import img2 from '../../assets/productpic/p-2.jpg'
import img3 from '../../assets/productpic/p-3.jpg'
import img4 from '../../assets/productpic/p-4.jpg'
import img5 from '../../assets/productpic/p-5.jpg'
import img6 from '../../assets/productpic/p-7.jpg'
const prodata =[
    {
        id:1,
        image:img1,
        title:"Boat Headphone",
        price:"120",
        asodelay:20
    },
     {
        id:2,
        image:img2,
        title:"Boat Headphone",
        price:"120",
        asodelay:20
    },
     {
        id:3,
        image:img3,
        title:"Boat Headphone",
        price:"120",
        asodelay:20
    },
     {
        id:4,
        image:img4,
        title:"Boat Headphone",
        price:"120",
        asodelay:20
    },
   {
        id:5,
        image:img5,
        title:"Boat Headphone",
        price:"120",
        asodelay:20
    },
      {
        id:6,
        image:img6,
        title:"Boat Headphone",
        price:"120",
        asodelay:20
    },
 
 



]

const Products = () => {
  return (
    
    <div className='my-30 '>
        {/* title  */}
        <div className='flex flex-col text-center mb-5'>
            <h1 className='text-3xl font-bold'>Our Products</h1>
            <p className='text-md text-gray-400'>Explore Our Products</p>

        </div>

        {/* cards  */}

         <div>
            <Productcart data={prodata}/>
         </div>


    </div>
  )
}

export default Products