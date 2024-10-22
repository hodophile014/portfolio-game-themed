import React from 'react'

function Contact() {
  return (
    <div>
      <div className='flex flex-col items-center justify-center h-screen w-screen bg-gray-900 ' style={{fontFamily: "Pixelify Sans"}}>
    <div>
        <h1 className='text-green-500 text-xl'>CONNECT WITH ME</h1>
        <p className='text-gray-400 mt-5'>WANNA CHAT? OR JUST SHARE SOMETHING COOL?</p>
    </div>
    <div className='flex flex-col border-2 border-gray-400 rounded-md w-1/2 h-max'>
        <form className='flex flex-col'>
            <label className='text-xl mx-4 text-green-500 mt-5'>HOW SHOULD I CALL YOU?</label>
            <input type="text" placeholder="YOUR NAME" className='text-xl mx-4 mt-5 text-left bg-gray-900 border-2 border-gray-400'/>
            <label className='text-xl mx-4 text-green-500 mt-5'>SENDING FROM</label>
            <input type="text" placeholder="YOUR.NAME@MAIL.COM" className='text-xl mx-4 mt-5 text-left bg-gray-900 border-2 border-gray-400'/>
            <label className='text-xl mx-4 text-green-500 mt-5'>TRANSMITTED DATA</label>
             <textarea className='text-green-500 bg-gray-900 mt-5 mx-4 border-2 h-[100px] mb-12' placeholder='HI, I WRITE TO YOU ABOUT'></textarea>

        </form>
     
    </div>
    <div className='flex flex-row mx-auto'>
        <button className='bg-green-500 text-center font-bold mt-5 mx-4'>SEND MESSAGE[ENTER]</button>
        <button className='text-green-500 text-center font-bold mt-5 mx-4 border-2 border-green-500'>DISCARD[ESC]</button>

    </div>
    
      
    </div>
    </div>
  )
}

export default Contact
