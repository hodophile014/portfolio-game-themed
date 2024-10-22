import React from 'react'
import '../App.css'
import Marquee from "react-fast-marquee";
import  Tailwind from "../Skillsvg/Tailwind"
import  CSS from "../Skillsvg/CSS"
import  Github from "../Skillsvg/Github"
import Html from "../Skillsvg/Html"
import Java from "../Skillsvg/Java"
import  Mongodb from "../Skillsvg/Mongodb"
import  Reactjs from "../Skillsvg/Reactjs"
import  Spring from "../Skillsvg/Spring"


function Skills() {
  
  return (
    <div className='flex flex-col bg-gray-900 text-green-500  items-center justify-center h-screen w-screen' >
      <div className='flex text-right' style={{fontFamily: "Pixelify Sans"}}>
      <h1 className='text-xl mx-4'>My Skills</h1>
      <h2 className='text-xl text-gray-400 mx-4'>Himu@014</h2>
      </div>
      <div>
        <img  className="rounded-lg h-96 mt-10 mx-04" src="https://i.pinimg.com/564x/e4/2b/19/e42b193d62e5e73894c7837ccd557615.jpg" alt="himanshi"></img>
      </div>
      <span className='mx-4 text-white'>
        Level 25
      </span>
      <div>
        <h1 className='text-2xl font-bold mx-4'>Himanshi Gupta</h1>
         <h2 className='text-xl text-center'>Software Developer</h2>
      </div>

        <div className='w-[440px] h-[100px]'>
          <Marquee>
         <div className='mx-4'>
         <Tailwind/>
         </div>
         <div className='mx-4'>
         <CSS/>
         </div>
         <div className='mx-4'>
         <Java/>
         </div>
         <div className='mx-4'>
         <Html/>
         </div>
         <div className='mx-4'>
         <Github/>
         </div>
         <div className='mx-4'>
         <Mongodb/>
         </div>
         <div className='mx-4'>
         <Reactjs/>
         </div>
         <div className='mx-4'>
         <Spring/>
         </div>
          </Marquee>
        </div>

    </div>
  )
}

export default Skills
