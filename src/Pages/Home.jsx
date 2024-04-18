import React from 'react'
import CustomButton from '../Components/CustomButton'
import CustomButton2 from '../Components/CustomButton2'
import CubeGIF from '../assets/CubeGIF.mp4'
const Home = () => {
  return (
       <>
        <div className='w-full sm:h-screen h-screen relative flex flex-row justify-between bg-black'>
          <div>
  
        <div className='absolute w-full h-full z-10 sm:mt-64 mt-28 xl:px-36 px-16 inset-0 bg-transparent font-custom sm:block py-4 hidden overflow-hidden'>
          <h1><span className='text-red-600  sm:text-6xl text-2xl font-semibold '>Crypto-trading<br/></span>      
          </h1>
          <h1 className=' py-1'>
               <span className='text-red-600 sm:text-2xl text-md text-right  flex'> has never being this easier!</span>
          </h1>
          <div className='py-3 flex flex-col items-center w-1/3 '>
             <p className='text-white text-md '> 
             Trade securely, access real-time data, and explore the world of digital assets effortlessly. Join now!
            </p>
          </div>
        
          <div className=' z-10  ' >
          
          <div className='mt-4 flex flex-row gap-8'>
       
              <CustomButton roundedALL={true} title='Start Now' />
              <CustomButton2  title='Start Transactions' />
        
           </div> 
           
           
        </div>
  
  
        </div> 
        
        {/*MOBILE*/}
        
        <div className='absolute inset-0 w-full h-full font-custom sm:hidden block'>
          <div className='flex flex-col items-center text-center'>
             <div className='absolute bottom-24 z-10 '>
                <h1><span className='text-red-600   text-4xl font-bold text-center '>Crypto-trading<br/></span>
              
                 </h1>
                 <h1 className='flex flex-col items-center'>
                     <span className='text-white t text-center flex text-md' > has never being this easier!</span>
                </h1>
                <div className='py-1 flex flex-col items-center w-full p-12 '>
                   <p className='text-white text-sm '> 
                       Trade securely, access real-time data, and explore the world of digital assets effortlessly. Join now!
                  </p>
                 </div>
              <div className='flex flex-col items-center'>
                <div className='mt-4 flex flex-row  gap-4'>
                    <CustomButton roundedALL={true} title='Start Now' />
                    <CustomButton2  title='Start Transactions' />
                 </div> 
                </div>
         </div>
        </div>
        </div>
        
  
          </div>
          <div className='flex md:flex xl:flex lg:flex sm:flex-col flex-row justify-center xl:items-center lg:items-end
           md:items-end sm:scale-100 scale-90 sm:mt-0 -mt-10 bg-black right-0 overflow-hidden'>
            <video src={CubeGIF} className='w-3/4  h-3/4 object-cover scale-150 mt-5 overflow-hidden' autoPlay loop muted/>
          </div>
       </div>
       </>
    
  )
}

export default Home