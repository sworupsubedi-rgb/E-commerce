import React from 'react'
import Button from '../Shared/Button'
import { FaFacebook, FaInstagram, FaLocationArrow, FaMobileAlt, FaTiktok } from 'react-icons/fa'

const menulink = [
  {
    id: 1,
    name: "Home",
    link: "",
  },
  {
    id: 2,
    name: "About",
    link: "",
  },
  {
    id: 3,
    name: "Shop",
    link: ""
  },
  {
    id: 4,
    name: "Blogs",
    link: ""
  }
]

const Footer = () => {
  return (
    <div className='px-[1rem] sm:px-[3rem] mt-20 mb-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 items-start border-t border-gray-200 pt-10'>
      
        <div className='flex flex-col gap-4'>
          <a className="uppercase text-red-800 font-bold text-5xl tracking-tight" href=""> e-shop</a>
          <div className='opacity-50 space-y-1'>
            <p>Thanks for trusting our website for your work </p>
            <p>Made with ❤️ By Sworup Subedi</p>
            <h1 className='text-xl mt-4 font-semibold'>Visit our youtube channel</h1>
          </div>
          <a href="https://www.youtube.com/" target='_blank' rel="noreferrer"> 
            <Button text="Youtube" className="text-white bg-red-600 px-8 py-2 rounded-full" /> 
          </a>
        </div>

        <div className='flex flex-col gap-4'>
          <p className='text-2xl font-bold font-serif'>Important Links</p>
          <ul className='space-y-3'>
            {menulink.map((data) => (
              <li key={data.id} className="text-gray-400 hover:text-black hover:font-bold duration-300 cursor-pointer list-none">
                <a href={data.link} className="flex items-center gap-2">
                  <span className='h-[2px] w-2 bg-gray-300'></span>
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className='flex flex-col gap-4 font-serif'>
          <p className='text-2xl font-bold'>Quick Links</p>
          <ul className='space-y-3'>
            {menulink.map((data) => (
              <li key={data.id} className="text-gray-400 hover:text-black hover:font-bold duration-300 cursor-pointer list-none">
                <a href={data.link} className="flex items-center gap-2">
                  <span className='h-[2px] w-2 bg-gray-300'></span>
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* fourth grid  */}
        <div className='flex flex-col gap-4'>
          <p className='text-2xl font-bold font-serif'>Address</p>
          <div className='font-semibold space-y-3'>
            <p className='flex items-center gap-3'> <FaLocationArrow className='text-red-800' /> Noida, Uttar Pradesh</p>
            <p className='flex items-center gap-3'> <FaMobileAlt className='text-red-800' /> 9763951459</p>
          </div>
          
          <div className='mt-4 flex flex-col gap-4'>
            <p className='text-sm font-bold uppercase opacity-50 tracking-widest'>Follow Us</p>
            <div className='flex gap-6 text-3xl'>
              <a target='_blank' rel="noreferrer" href="https://www.facebook.com/svarupa.subedi" className='hover:text-blue-600 transition-colors flex flex-col items-center gap-1'>
                <FaFacebook /> 
                <span className='text-[10px] font-bold uppercase'>Facebook</span>
              </a>
              <a target='_blank' rel="noreferrer" href="https://www.instagram.com/sworupsubedii/" className='hover:text-orange-600 transition-colors flex flex-col items-center gap-1'>
                <FaInstagram /> 
                <span className='text-[10px] font-bold uppercase'>Instagram</span>
              </a>
              <a target='_blank' rel="noreferrer" href="https://www.tiktok.com/@sworupsubedi2009" className='hover:text-red-600 transition-colors flex flex-col items-center gap-1'> 
                <FaTiktok /> 
                <span className='text-[10px] font-bold uppercase'>Tik Tok</span> 
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className='text-center mt-20 opacity-30 text-sm'>
        <p>© {new Date().getFullYear()} e-shop. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer