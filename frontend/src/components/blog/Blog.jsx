import React from 'react'
import image1 from '../../assets/blogs/blog-1.jpg'
import image2 from '../../assets/blogs/blog-2.jpg'
import image3 from '../../assets/blogs/blog-3.jpg'

const blogdata =[
    {
        title:"How to choose smartwatch",
        subtitle:
        "Make sure the watch works with your phone (Android or I-Phone). Choose Battery Life at least 2-3 days.",
        published:"Jan 20, 2024 by Sworup Subedi",
        image:image1,
    },
    {
        title:"How to choose Laptop",
        subtitle:
        "Make sure your laptop contains the specs that is compactible for your work.",
        published:"Jan 20, 2024 by Sworup Subedi",
        image:image2,
    },

    {
        title:"Where to get VR",
        subtitle:
        "Search for a store where any AR and VR headsets are available and see the revies of the shop or retailer after confirm that the rretailer is trusted then you can buy from the retailor.",
        published:"Jan 20, 2024 by Sworup Subedi",
        image:image3,
    },




]
const Blog = () => {
  return (
    <div className='px-[1rem] sm:px-[3rem]'>

            {/* title  */}
            <div className='flex flex-col text-center mt-[5rem] mb-5'>
                <h1 className='text-3xl font-bold'>Recent News</h1>
                <p className='text-mg text-gray-400 '>Explore our blogs</p>
            </div>
            {/* body section  */}
            <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
          {blogdata.map((i)=>(
            <div key={i.title}>
                {/* image section  */}
          <div className='overflow-hidden rounded-2xl mb-2'>
            <img src={i.image} alt="" 
            className='w-full h-[202px] object-cover rounded-2xl hover:scale-110 duration-500'/>
            </div>
         {/* main body section  */}
         <div className='space-x-2'>
         <p className='text-xs text-gray-500'> {i.published} </p>
         <p className='font-bold line-clamp-1'> {i.title} </p>
         <p className='line-clamp-2 text-sm text-gray-600'> {i.subtitle} </p>
         </div>

          </div>



           
          ))}
            </div>


    </div>
  )
}

export default Blog