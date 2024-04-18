import React from 'react'

const CustomButton = ({title, onClick, type, symbol, roundedALL}) => {
  return (
    <button type={type} className={`${
        roundedALL 
        ? 'rounded-3xl' 
        :' rounded-tl-2xl rounded-tr-full rounded-b-2xl rounded-br-full'} 
        bg-red-800 text-black py-2 px-4 items-center flex align-middle shadow-md hover:scale-105 hover-shadow-red-500`}>
      <div className='font-custom sm:text-md text-sm font-bold'>
           {title} {symbol}  
      </div>
    </button>
  )
}

export default CustomButton