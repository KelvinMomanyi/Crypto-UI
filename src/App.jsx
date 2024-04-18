import { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(()=>{
    //simulating a data loading delay
    setTimeout(()=>{
      setIsLoading(false)
    },2000)
  })
  return (
   <>
     <Navbar/>
     <Home/>
    </>
 
  )
}

export default App
