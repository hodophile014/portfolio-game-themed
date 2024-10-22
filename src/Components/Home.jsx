import React, { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "../App.css"


function Home() {
    //here i have created var for loaders
    const[loading, setLoading] = useState(true);
    const[progress, setProgress] = useState(0);
    useEffect(()=>{
       
        const interval = setInterval(()=>{
            setProgress((oldProgress)=>{
                if(oldProgress===100){
                    setLoading(false);
                    clearInterval(interval);
                    return 100;
                }
                return Math.min(oldProgress+10,100);
            });
        }, 500)
        return () => clearInterval(interval);

    },[])
    //event for navigation 
    const navigate = useNavigate();
    const handleButtonClick = () =>{
        navigate('/start');
    }
  return (
    <div>
        {
        loading? (
            <div className="loader-container">
          <div className="loader">
            <p>Loading... {progress}%</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        </div>):(<div className='flex flex-row bg-gray-900 w-screen h-screen p-4 justify-center items-center'>
            <div><h1 className='text-green-500 text-[300px] font-bold' style={{fontFamily: "Pixelify Sans"}}>HI!</h1></div>
            <div className='ml-3 flex flex-col text-white' style={{fontFamily: "Pixelify Sans"}}>
              <h1 className='text-xl mx-4'>WELCOME TO MY PERSONAL PORTFOLIO</h1>
                <p className='mt-10 mx-4'>I CREATED THIS WEBSITE TO FEEL LIKE A GAME/SCI-FI INTERFACE.</p>
                <p className='mt-5 mx-4'>YOU WILL FIND 'ACHIEVEMENTS' OR 'QUESTS' THAT SHOW THE PROGRESS IN MY PROFESSIONAL LIFE AND ARE RELATED TO WHAT I AM WORKING ON.</p>
      
                <button onClick={handleButtonClick} className='mt-10 border-2 h-[50px] border-green-500 text-green-500 font-bold text-xl hover:text-2xl'>ENTER THE SYSTEM</button>
            </div>
          </div>)
    }
    </div>
    
)
  
}

export default Home
