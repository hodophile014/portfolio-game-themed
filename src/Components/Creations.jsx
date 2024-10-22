import React, { useState } from 'react'
import "../App.css"
import { Projects } from '../Context/Info';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
function Creations() {
  
   return(
   <div className="bg-gray-900 flex justify-center items-center h-full lg:h-screen flex-col" style={{fontFamily:"Pixelify Sans"}}>
    <div className='mt-10'>
      <h1 className='text-4xl text-center text-green-400'>CREATIONS</h1>
    </div>
    <div className='mt-10 mb-12 flex gap-9 flex-wrap justify-center items-center'>
      {Projects.map((items,index)=>(
        <div key={index} className='bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg p-10 max-w-md flex flex-col'>
          <div className='text-2xl text-green-400 hover:text-2xl text-center'><h1>{items.name}</h1></div>
          <div className='mx-4 border-2 border-green-400 border-dotted'><img src={items.image} alt={items.name}/></div>
          <div>
            <p className='text-white text-xl text-center'>{items.about}</p>
          </div>
          <div className='mt-10'>
            <a href={items.url} className='border-2 text-green-400 hover:text-green-500 px-4 py-2 border-green-400'>VIEW LIVE</a>
          </div>
         
          </div>
      ))}
     
    </div>

   </div>
   )
   
  
}

export default Creations
