import React, { useState } from 'react'
import {Menu,X} from "lucide-react";
import { navItems } from '../Context/Info';
import {NavLink} from "react-router-dom"

function Navbar() {
  const [mobileDrawerOpen,setMobileDrawerOpen] = useState(false);
  const toggleNavBar = () =>{
    setMobileDrawerOpen(!mobileDrawerOpen);
  }
  return (
  <div>
    <nav className='sticky top-0 py-3 z-50 backdrop-blur-lg border-b border-neutral-700/80'>
    <div className='container px-4 mx-auto relative text-sm'>
      <div className='flex justify-between items-center'>
      <div className='flex items-center flex-shrink-0'>
        <img className='h-10 mr-2 w-10 rounded-full' src="https://media.licdn.com/dms/image/v2/D5603AQGAaGAhcA8LMg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719037088016?e=1735171200&v=beta&t=qZweGrpwKEONrlDGWy9cwyrf6gD5lrp1Y-hcBmIZEPM" alt=""/>
        <span className='text-xl tracking-tight'>Himanshi Gupta</span>
      </div>
      <ul className='hidden lg:flex ml-14 space-x-12'>
        {navItems.map((item,index)=>(
          <li key={index}>
            <NavLink to={item.href}>{item.label}</NavLink>
            
          </li>
          
        ))}
       
      </ul>
      <div className='lg:hidden md:flex flex-col justify-end'>
    <div className='flex flex-row'>

        <button onClick={toggleNavBar}>
          {mobileDrawerOpen?<X/>:<Menu/>}
        </button>
    </div>

      </div>
      {mobileDrawerOpen && (
        <div className='fixed right-0 z-20 bg-gray-900 w-full p-12 flex flex-row justify-center items-center lg:hidden text-green-500'>
          <ul>
            {navItems.map((item,index)=>(
              <li key={index} className='py-4'>
                <NavLink to={item.href} className="hover:text-green-600">{item.label}</NavLink>
              </li>
            ))}
          </ul>
          </div>
      )}
      </div>
    
    </div>

    </nav>


      
    </div>
  )
}

export default Navbar
