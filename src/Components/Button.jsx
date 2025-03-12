import React from 'react'


const Button = ({white,title,img}) => {
  return (
    
      <button className={`${ white ? "border-2 border-[#00ADB5] hover:bg-teal-600 text-white":"bg-[#111B47] hover:bg-teal-600 text-white"} font-bold py-2 px-6 gap-6 rounded-full shadow-md transition duration-300`}
      >
            {title}
            {img}
          </button>
   
  )
}

export default Button
