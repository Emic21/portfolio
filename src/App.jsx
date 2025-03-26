import React from "react";
import Button from "./Components/Button";
import ContactForm from "./Components/contactform";



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
        <div className="flex justify-between  px-14 mt-35 pb-10">
          <div className="flex mt-40 relative">
            <img src="section1_side1_image.svg" alt="" className="h-[45%]"/>
                <h2 className="text-[#EEEEEE] text-6xl font-semibold relative">
                  Frontend
                   <span className="text-[#00ADB5] text-6xl font-semibold block mt-2">
                  Developer
                   </span>
              </h2>
              <div className="flex px-10 items-center space-x-4 absolute bottom-12"> 
                <Button title="Hire me" white />
                <Button title="Download CV " />
              
              </div>
           
          </div>
          <div className="relative">
            <img src="section1_doodlesround.svg" alt="section1_image" className="w-[80%]" />
            
          
         <img src="section1_image.svg" alt="section1_image" className=" w-[50%]  absolute bottom-2 left-50" /></div>
        </div>
        
          
          <div className="bg-[#222831] text-white py-12 flex ">
        {/* <div className="relative max-w-4xl space-y-14 px-14 text-start w-[70%]">
           <div>
            <img src="/section2-music.svg" alt="" className="absolute  left-20 top-10"/>
            <img src="/lightbulb.svg" alt="" className="absolute w-[8%] top-0 left-60" />
            <img src="/arrow_spring.svg" alt="" className="absolute bottom-1" />
          </div>
          <div> */}
          <div className="relative max-w-4xl space-y-14 px-14 text-start w-[70%]">
  {/* <!-- Container for the images and About Me content --> */}
  <div className="relative">
    {/* <!-- section2_music.svg positioned above About Me --> */}
    <img src="/section2-music.svg" alt="Music Section" className="absolute top-0 left-20" />
    {/* <!-- lightbulb.svg overlaying About Me --> */}
    <img src="/lightbulb.svg" alt="Lightbulb" className="absolute top-[25%] left-[30%] w-[8%]" />
    {/* <!-- About Me content --> */}
    <div className="relative pt-20">
      {/* <!-- Your About Me content here --> */}
      <h2 className="text-4xl font-bold text-white mb-4">About <span className="text-[#00ADB5]">Me</span></h2>
          <p className="text-lg mb-4">
            Hi, I'm a passionate <span className="text-teal-300">Frontend Developer </span> 
             with a keen eye for design and a love for crafting seamless user experiences. 
            I specialize in modern web technologies like <strong>React, JavaScript, HTML, CSS, and Tailwind</strong>.
          
          </p>
          <p className="text-lg mb-6">
            I thrive on solving problems and turning ideas into reality through code. 
            Whether it’s creating interactive UI components or optimizing website performance, 
            I always strive for excellence.
          
          </p>
    </div>
    {/* <!-- arrow_spring.svg positioned below About Me --> */}
    <img src="/arrow_spring.svg" alt="Arrow Spring" class="absolute -bottom-[25%] left-[20%] w-[10%]" />
  </div>


          
         </div>
        
        <div className="relative">
          <img src="/doodle_items.svg" alt="" className="w-[90%]" />
          <div className="abosolute -bottom-12 w-[50%] left-16">
            <img src="/section2_image1.svg" alt="" className="absolute -bottom-12 left-16 w-[50%] "/>
            <img src="/Ellipse3.svg" alt="Ellipse" className=" -bottom-50 left-16 w-[50%]" />
          </div>
        </div>
      
        </div>
        <div class="relative px-14 bg-[url('/doodle_items.svg')]  bg-repeat bg-[length:25%_75%]">
          <h2 className="text-4xl text-white mb-5 font-bold">My Resent <span className="text-4xl font-bold text-[#00ADB5]">Work</span></h2>
          <div className="flex space-x-5">
            <Button title={"All"} white/>
            <Button title={"UI"} />
            <Button title={"UX"} />
            <Button title={"Web Design"} />
          </div>
          <div className="flex space-x-6">
            <div className="bg-[#393E4680] m-5 p-6">
            <img src="/Course_Website_Thumbnail.svg" alt="" />
            
            
          </div >
          <div className="bg-[#393E4680] m-5 hover:transition-transform p-6"><img src="/section3_image2.svg" alt="" /></div>
          <div className="bg-[#393E4680] m-5 p-6"><img src="/phone_pics.svg" alt="" /></div>
          </div>
          
        </div>
        <div className="flex space-x-40 px-14 w-full ">
          <div className="relative">
        <h2 className="text-4xl text-white mb-5 font-bold mt-40 relative ">Got a project in <span className="text-4xl font-bold text-[#00ADB5] absolute left-0 -bottom-10">mind?</span></h2>
          <div className="absolute left-[50%]">
            <img src="/contact_image.svg" alt="" className="w-[80%] right-[50%] " />
          </div>
          
          </div>

          <div className="w-[50%]">
            <ContactForm />
          </div>
        </div>

        {/* footer */}
      <footer className="h-20 mt-10">
      <div className="flex space-x-10 text-xs text-[#EEEEEE] justify-center ">
            <a href="#" className="flex space-x-10"><img src="/home.svg" alt="" className="w-3 " />Home</a>
          <a href="#" className="flex space-x-10"><img src="/user.svg" alt="" className="w-3 " />About Me</a>
          <a href="#" className="flex space-x-10"><img src="/phone.svg" alt="" className="w-3 " />Contact</a>
          </div>
          <div className="flex justify-center space-x-4 mt-5">
            <img src="/facebook_icon.svg" alt="" className=" w-5"/>
            <img src="/instagram_icon.svg" alt="" className=" w-5"/>
            <img src="/twitter_icon.svg" alt="" className=" w-5"/>
            <img src="/youtube_icon.svg" alt="" className=" w-5"/>
          </div>
      </footer>
    </div>
    
  )
}

export default App
