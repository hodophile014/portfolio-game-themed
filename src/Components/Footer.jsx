import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Footer() {
   
  return (
   <div style={{fontFamily:"Pixelify Sans"}}>
     <div className='flex flex-row bg-gray-900 m-4 justify-center items-center gap-5'>
        <div className='flex flex-col border-l-2 border-green-500'>
            <NavLink to="/" className='text-2xl text-white bg-green-500 hover:text-3xl'>BEGINNING</NavLink>
            <p className='text-gray-400'>uscipit est</p>
         
        </div>
        <div className='flex flex-col border-l-2 border-green-500'>
            <a href="/" className='text-2xl text-white bg-green-500 hover:text-3xl'>LOGS</a>
            <p className='text-gray-400'>uscipit est</p>
         
        </div>
        <div className='flex flex-col border-l-2 border-green-500'>
            <a href="/" className='text-2xl text-white bg-green-500 hover:text-3xl'>ACHIEVEMENTS</a>
            <p className='text-gray-400'>uscipit est</p>
         
        </div>
        <div className='flex flex-col border-l-2 border-green-500'>
            <NavLink to="/creations" className='text-2xl text-white bg-green-500 hover:text-3xl'>CREATIONS</NavLink>
            <p className='text-gray-400'>uscipit est</p>
         
        </div>
        <div className='flex flex-col border-l-2 border-green-500'>
            <NavLink to="/skills" className='text-2xl text-white bg-green-500 hover:text-3xl'>SKILLS</NavLink>
            <p className='text-gray-400'>uscipit est</p>
         
        </div>

       
      
    </div>
     <div className='text-xl text-center text-green-500'>
     © 2024 Himanshi Gupta. All rights reserved.

     </div>
   </div>

  )
}

export default Footer
