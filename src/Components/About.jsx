import React from 'react'

function About() {
  return (
   <div className='bg-gray-900 flex justify-center items-center h-max'>
     <div className='bg-gradient-to-r from-gray-900 to-green-900  m-4 flex flex-col' style={{fontFamily:"Pixelify Sans"}}>
      <div>
        <h1 className='text-white mt-5 text-2xl text-center'>WHO IS HIMANSHI GUPTA?</h1>
        
      </div>
      <div className='flex flex-row'>
        <div>
          <table className='mt-10 mx-4  space-y-4'>
           <tr>
            <td className='text-xl text-gray-400 px-4 py-2'>THE SHORT INTRODUCTION OF MY LIFE</td>
            <td className='text-white px-4 py-2'>
            "I'm a software developer focused on building efficient, scalable solutions using technologies like JavaScript, React, and Spring Boot. I love solving complex problems and delivering clean, maintainable code across front-end and back-end.
            "</td>
           </tr>
           <tr className=''>
            <td className='text-xl text-gray-400 px-4 py-2'>CAREER AND DEVELOPMENT</td>
            <td className='text-white px-4 py-2'>
            "I’ve continuously expanded my skills, adopting new technologies like Node.js, MongoDB, and microservices architecture. I’m always eager to stay up to date with industry trends, embracing new challenges that help refine my coding and problem-solving abilities." I love solving complex problems and delivering clean, maintainable code across front-end and back-end.
            "</td>
           </tr>
           <tr className=''>
            <td className='text-xl text-gray-400 px-4 py-2'>MORE CAN BE ADDED IN THE LEFT SIDE FOR SUMMARY</td>
            <td className='text-white px-4 py-2'>
            As a web engineer, my top priority is to ensure the reliability, scalability, and security of the web applications I develop. I enjoy collaborating with cross-functional teams and working closely with clients to understand their needs and provide them with the best possible solutions."</td>
           </tr>
          </table>
        </div>
        <div>
            <img className="mr-4" src="https://cdnb.artstation.com/p/assets/images/images/079/634/419/small/maddy-taylor-kenyon-pepper-small.jpg?" alt="" />
        </div>

      </div>
    </div>
   </div>
  )
}

export default About
