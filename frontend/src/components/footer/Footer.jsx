import React from 'react'
import Button from '../Shared/Button'
import { FaFacebook, FaInstagram, FaLocationArrow, FaMobileAlt, FaTiktok } from 'react-icons/fa'
const menulink= [
    {
        id :1,
        name:"Home",
        link: "" ,
    },
    {
        id:2,
        name:"About",
        link:"",
    },
    {
        id:3,
        name:"Shop",
        link:""
    },
    {
      id: 4,
      name: "Blogs",
      link:""
    }

]

const Footer = () => {
  return (
    <div className='px-[1rem] sm:px-[3rem] my-20 grid grid-cols-2 sm:grid-cols-4 items-center hover:scale-103 duration-500'>
        {/* first grid  */}
         <div className='flex flex-col'>
        <a className="uppercase text-red-800 font-bold text-5xl" href=""> e-shop</a>
        <div className='opacity-50'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <p>Made with ❤️ By Sworup Subedi</p>
        <h1 className='text-xl my-2'>Visit our youtube channel</h1>
        </div>
        <a href="https://www.youtube.com/" target='-blank'> <Button text="Youtube" 
        className="text-white bg-red-600 my-5"/> </a>
         </div>

         {/* second grid  */}
         <div className='flex flex-col '>
            <p className='text-2xl font-bold font-serif'>Important Links</p>
            <ul>
            {menulink.map((data) =>(
                <li key={data.id} className="px-4 text-gray-400 
                hover:text-black hover:font-bold duration-900 cursor-pointer" ><a href={data.link}className="flex">
                  {data.name}</a>
                </li>
              
              ))}
                </ul>
         </div>

         {/* third grid  */}
          <div className='flex flex-col font-serif'>
            <p className='text-2xl font-bold'>Quick Links</p>
            <ul>
            {menulink.map((data) =>(
                <li key={data.id} className="px-4 text-gray-400 
                hover:text-black hover:font-bold duration-900 cursor-pointer" ><a href={data.link}className="flex">
                  {data.name}</a>
                </li>
              
              ))}
                </ul>
         </div>
         {/* fourth grid  */}
         <div className='flex flex-col'>
         <p className='text-2xl font-bold font-serif'>Address</p>
         <div className='font-semibold'>
         <p className='flex'> <FaLocationArrow /> Noida,Uttar Pradesh</p>
         <p className='flex '> <FaMobileAlt />  9763951459</p>

         </div>
         <div className='text-white'>
            <p>.</p>
         
         </div>
         <div className='flex gap-4 text-3xl'>
           <a  target='-blank' href="https://www.facebook.com/svarupa.subedi" className=' hover:text-blue-600'><FaFacebook /> 
           <span className='text-sm'>Facebook</span></a>
           <a  target='-blank' href="https://www.instagram.com/sworupsubedii/" className=' hover:text-orange-600'><FaInstagram /> 
            <span className='text-sm'>Instagram</span></a>
           <a target='-blank' href="https://www.tiktok.com/@sworupsubedi2009" className=' hover:text-red-600'> <FaTiktok /> 
            <span className='text-sm'>Tik Tok</span> </a>
         </div>
         </div>

    </div>
  )
}

export default Footer