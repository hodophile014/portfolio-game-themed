import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { IoSettings } from "react-icons/io5";


function QuestInfo() {
  return (
    <div className='bg-gray-900 place-content-between' style={{fontFamily:"Pixelify Sans"}}>
    <div className='flex flex-col'>
    <div>
       <h1 className='text-white text-xl font-bold bg-green-500 w-max'>ACTIVE QUEST</h1>
       <h2 className='text-xl text-gray-400' style={{backgroundColor: (34, 197 ,94)}}> THE REACT SKILL UP LINE</h2>
       </div>
       <div>
        <h2 className='text-gray-400 mt-10'>QUEST NAME</h2>
        <h1 className='text-green-500 text-2xl'>REACT WEBSITE</h1>
       </div>
       <div className='mt-10'>
        <h2 className='text-xl text-white'>GOAL</h2>
        <p className='text-gray-400'>
            BUILD THIS WEBSITE.IMPELEMENT <br></br>
            A FULL REACT BASED WEBSITE WITH MULTIPLE ROUTERS,<br></br>
            UI ELEMENTS AND TRICKY STYLING. MAKE IT ALL WORK GREAT!
            </p>

       </div>
       <div className='mt-10'>
        <h2 className='text-white'>AWARDS</h2>
        <div className='flex flex-row'>
            <img className="h-[40px] w-[40px] hover:h-[44px] hover:w-[44px]" src="https://leetcode.com/static/images/badges/dcc-2024-1.png" alt="" />
            
            <img className="h-[40px] w-[40px] hover:h-[44px] hover:w-[44px]" src="https://assets.leetcode.com/static_assets/marketing/2024-50-lg.png" alt="" />
            <img className="h-[40px] w-[40px] hover:h-[44px] hover:w-[44px]" src="https://leetcode.com/static/images/badges/dcc-2024-2.png" alt=''/>
            <img className="h-[40px] w-[40px] hover:h-[44px] hover:w-[44px]" src="https://leetcode.com/static/images/badges/dcc-2024-3.png" alt=''/>
            <img className="h-[40px] w-[40px] hover:h-[44px] hover:w-[44px]" src="https://assets.leetcode.com/static_assets/marketing/2024-100-lg.png" alt=''/>
            <img className="h-[40px] w-[40px] hover:h-[44px] hover:w-[44px]" src="https://leetcode.com/static/images/badges/dcc-2024-7.png" alt="" />
        </div>
       </div>
    </div>
    <div className='mt-20 flex flex-col'>
    <table className='space-y-4'>
        <tr>
            <td className='text-xl text-green-500 hover:text-2xl hover:border-2'>SOUND EFFECT</td>
            <td><button className='border-1 border-green-500 hover:bg-gray-300 text-green-500 h-[40px] w-[40px] px-3 py-1 text-center'><FaCheck /></button></td>
        </tr>
        <tr>
            <td className='text-xl text-green-500 hover:text-2xl hover:border-2'>MUSIC</td>
            <td><button className='border-1 border-green-500 hover:bg-gray-300 text-green-500 h-[40px] w-[40px] px-3 py-1 text-center'><ImCross /></button></td>
        </tr>
        <tr>
            <td className='text-xl text-green-500 hover:border-2 hover:text-2xl'>VISUAL SETTINGS</td>
            <td><button className='border-1 border-green-500 hover:bg-gray-300 text-green-500 h-[40px] w-[40px] px-3 py-1 text-center'><IoSettings /></button></td>
        </tr>
    </table>

    </div>

       

    </div>
  )
}

export default QuestInfo
