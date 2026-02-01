import React from 'react'

const Button = ({text,className}) => {
  return (
   <button
   className={`${className} cursor-pointer hover:scale-105 duration-200
   py-2 px-8 rounded-full`}>{text}</button>
  )
}

export default Button