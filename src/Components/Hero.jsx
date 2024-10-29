import React from 'react'
import { CiBluetooth } from "react-icons/ci";
import "../App.css"
import { NavLink } from 'react-router-dom';
function Hero() {
  return (
    <div className='flex flex-col place-content-between bg-gray-900 h-max w-max'style={{fontFamily:"Pixelify Sans"}}>
        <div className='container  mx-4'>
            <img className="h-[100px] w-[100px] m-4 rounded-full" src="Snapchat-128323993.png" alt="himanshi"></img>
        </div>
        <div className='m-4 flex flex-col'>
            <span><h3 className='text-white mt-5'>NAME</h3>
            <h1 className='text-green-500 text-xl'>HIMANSHI GUPTA</h1></span>
            <span>
                <h3 className='text-white mt-5'>OCCUPATION</h3>
                <h1 className='text-green-500 text-xl'>SOFTWARE DEVELOPER</h1>
            </span>
            <span>
                <h3 className='text-white mt-5'>CORPORATION</h3>
                <h1 className='text-green-500 text-xl'>LEGACY.UI</h1>
            </span>
            <span>
                <h3 className='text-white mt-5'>AVAILABILITY</h3>
               <NavLink to="/openforhire"> <h1 className='text-white bg-green-500 text-xl'>OPEN FOR HIRE</h1></NavLink>
            </span>
            <span>
                <h3 className='text-white mt-5'>SOCIAL</h3>
                <h1 className='text-green-500 border-2 border-green-500 text-xl flex'>OPEN CONNECTION <CiBluetooth /></h1>
            </span>


        </div>
        <div className='flex flex-col mt-10 mx-4'>
            <h1 className='text-green-500 text-xl'>MOTTO:</h1>
            <p className='text-white text-[14px]'>
            "Crafting seamless digital experiences
            <br></br>
             from front-end to back-end"  
            </p>
        </div>

      
    </div>
  )
}

export default Hero
