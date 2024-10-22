import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
    const [time,setTime] = useState(new Date().toLocaleTimeString());
    const [coins,setCount] = useState(1461);
    const navigate = useNavigate();
    const handlethisClick = () =>{
        navigate('/credits')


    }
    function handleClick(){
        setCount(count=>count+1)
    }
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        },1000);
        return () => clearInterval(intervalId);
    },[])
  return (
    <div className='flex flex-row w-full bg-gray-900 p-4 place-content-between' style={{fontFamily:"Pixelify Sans"}}>
        <div className='flex'>
            <h1 className='text-gray-300 m-1'><span className='text-2xl m-1 text-green-500'>25</span>LEVEL</h1>
            <h1 className='text-gray-300  mx-4 m-1'><button className='border-2  items-center  py-2 px-4 justify-center text-green-500' onClick={handleClick}>+</button><span className='text-2xl m-1 text-green-500'>{coins}</span>LEETCODE POINTS</h1>
        </div>
        <div className='flex'>
            <h1 className='text-xl text-white m-1'><button onClick={handlethisClick}>CREDITS</button></h1>
            <h1 className='text-[17px] text-gray-500 m-1'>SERVER TIME:{" "}<span className='text-white m-1'>{time}</span></h1>

        </div>

      
    </div>
  )
}

export default Header
