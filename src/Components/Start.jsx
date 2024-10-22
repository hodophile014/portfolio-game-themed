import Header from "./Header"
import Navbar from "./Navbar"
import Hero from "./Hero"
import About from "./About"
function Start() {
  return (
   <div className="flex justify-center items-center h-full bg-green-500 w-screen" style={{fontFamily: "Pixelify Sans"}}>
    <div className="bg-gray-900 text-green-500  rounded w-full">
       
      <Header/>
      <Navbar/>
    <div className="flex flex-row">
      <div>
        <Hero/>
      </div>
      <div>
        <About/>
      </div>

    </div>
      

    </div>
   </div>
  )
}

export default Start
