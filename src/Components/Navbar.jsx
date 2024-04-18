import React,{useState} from 'react'
import { navLinks } from '../Constants'
import CustomButton from './CustomButton'
import { IoIosMenu } from "react-icons/io";
import {motion} from 'framer-motion'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [itsOn, setItsOn] = useState(false)

  const handleClick = ()=>{
    setItsOn(!itsOn)
  }

  const fadeInFromBelow ={
    //Initial state to be hidden and slightly below
    hidden:{opacity:0, y:-20},
    
    //Final state to be visible at the original position
    visible:{opacity:1 , y:0}

  }
  return (
    <div className='fixed z-20 w-full sm:h-20 h-14 mt-0 font-custom bg-black text-red-600 shadow-red-800'>
      <div className='text-2xl font-bold flex flex-row mt-5 cursor-pointer justify-between'  >
         <div className='items-start sm:text-3xl text-2xl ' >
             <h1 className='sm:mx-12 mx-6 sm:py-1 cursor-pointer z-10' onClick={()=>{window.scrollTo(0,0)}} >Crypto</h1>
         </div>
         <div className='justify-end sm:text-sm text-xs py-2 z-10 lg:block hidden'>
            <div className='flex flex-row px-20 space-x-6'>
              {
                navLinks.map((link)=>(
                  <li key={link.id} className={`list-none 
                  ${active === link.title 
                     ? 'text-text-secondary' : "text-red-700"}
                      hover:text-white font-medium cursor-pointer`} onClick={()=> setActive(link.title)}   >
                    <a href={`#${link.id}`}>
                       {link.title}
                    </a>
                  </li>
                ))
              }
              <div className='-mt-2'>
                  <CustomButton roundedALL={true} title={'Connect'}/>
              </div>
            </div>
         </div>

         {/* MOBILE DEVICES */}
         <div className='mx-4 lg:hidden block z-10' >
            <IoIosMenu  onClick={handleClick} className={`outline-none`}/>
         </div>
      </div>

      <motion.div
        variants={fadeInFromBelow}
       className={`absolute w-full h-64 inset-0 top-12 right-0 bg-black`}
       initial="hidden"
       animate={itsOn ? 'visible' : 'hidden'}
       transition={{duration:0.5}}
       >
        <div className='flex flex-col items-center px-6 space-y-2'>
         {
          navLinks.map((link)=>(
             <li key={link.id} className={
              `list-none
               ${ active === link.title
                 ? 'text-text-secondary'
                 : 'text-red-700' } hover:text-white font-medium cursor-pointer`}
                 onClick={()=>setActive(link.title)}>
               <a href={`#${link.id}`}>{link.title}</a> 
             </li>
          ))
         }
         <div className='-mt-2 -mx-3'>
           <CustomButton roundedALL={true} title={'Connect'} />
         </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Navbar