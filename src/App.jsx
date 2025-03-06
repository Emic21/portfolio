import React from "react";


const App = () =>{
  

  return (
    <div className="relative bg-[#222831]">
     
        <header className="items-center px-14 py-4 w-[100%] pb-10">
          <div className="flex justify-between items-center ">
          <h2 className="text-[#EEEEEE] flex justify-between">Michael</h2>
          <div className="flex space-x-5 text-[#EEEEEE] ">
            <a href="#">Home</a>
          <a href="#">About Me</a>
          <a href="#">Contact</a>
          </div>
          
          </div>
          
        </header>
        <div className="flex justify-between px-14 mt-35 pb-10">
          <div className="mt-60 flex ">
            <img src="section1_side1_image.svg" alt="" className="h-[35%]"/>
            <h2 className="text-[#EEEEEE] text-4xl font-semibold relative">CREATIVE UI <span className="text-[#00ADB5] text-4xl font-semibold absolute top-10 left-0 "> DESIGNER</span></h2>
          </div>
          <div className="relative">
            <img src="section1_doodlesround.svg" alt="section1_image" />
            
          </div>
          <div className="ml-50"><img src="section1_image.svg" alt="section1_image" className="absolute top-40 left-80" /></div>
        </div>
        <div className="">
          <h2>About <span>Me</span> </h2>
        </div>
      
    </div>
    
  )
}

export default App
