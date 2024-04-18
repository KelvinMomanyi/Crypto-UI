import React from 'react'

const CustomButton2 = ({title, onClick, type}) => {
  return (
    <button type={type} className={`rounded-3xl border border-red-800 text-red-800 py-2 px-4 items-center flex align-middle shadow-sm
    hover:scale-105 hover:shadow-white`} onClick={onClick}>
      <div className='font-custom sm:text-md text-sm font-bold'>
           {title}  
      </div>
    </button>
  )
}

export default CustomButton2