import React from 'react'
import { FaCarSide } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaWallet } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
const servicedata =[
    {
        id:1,
        icon:<FaCarSide className='text-4xl md:text-5xl text-red-500'/>,
        title:"Free Delivery",
        description:"Free Deliveryy Where you wamt all over Nepal"
        
    },
    {
        id:2,
        icon:<FaCheck className='text-4xl md:text-5xl text-red-500'/>,
        title:"Safe money",
        description:"30 days money return"
        
    },
     {
        id:3,
        icon:<FaWallet className='text-4xl md:text-5xl text-red-500' />,
        title:"Wallet",
        description:"Wallet Here"
        
    },
     {
        id:4,
        icon:<BiSupport className='text-4xl md:text-5xl text-red-500' />,
        title:"Coustumer Support",
        description:"Contact For Coustumer support"
        
    }, 
   
]
const Services = () => {
  return (
    <div className='px-[1rem] sm:px-[3rem] my-14 sm:my-20'>
        <div className='grid grid-cols-2 md:grid-cols-4'>

            {servicedata.map((data)=>(
                <div className='flex gap-2' >
                    {data.icon}
                    <ul>
                   <li> <h1 className='font-bold text-lg'>{data.title}</h1> </li>
                    <li><p className='opacity-50'>{data.description}</p></li>
                    </ul>
                </div>
            ))}

        </div>
    </div>
  )
}

export default Services