import React, { useState } from "react";
import Button from "./Components/Button";
import ContactForm from "./Components/contactform";

const App = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Course Website",
      image: "/Course_Website_Thumbnail.svg",
      category: "Web Design",
      categories: ["All", "Web Design"]
    },
    {
      id: 2,
      title: "UI Project",
      image: "/section3_image2.svg",
      category: "UI",
      categories: ["All", "UI"]
    },
    {
      id: 3,
      title: "Mobile App",
      image: "/phone_pics.svg",
      category: "UX",
      categories: ["All", "UX"]
    }
  ];

  // Filter projects based on active filter
  const filteredProjects = projects.filter(project => 
    project.categories.includes(activeFilter)
  );

  // Hire Me button click handler
  const handleHireMeClick = () => {
    window.open("https://forms.gle/V8tsmbbCeARhHQdt7", "_blank");
  };

  return (
    <div className="relative bg-[#222831] min-h-screen">
      {/* Navigation */}
      <nav className="items-center px-4 sm:px-8 lg:px-14 py-4 w-full flex justify-between relative">
        {/* Logo */}
        <h2 className="text-[#EEEEEE] text-xl font-semibold">Michael</h2>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-[#EEEEEE] items-center">
          <a href="#" className="hover:text-[#00ADB5] transition-colors">Home</a>
          <a href="#" className="hover:text-[#00ADB5] transition-colors">About Me</a>
          <a href="#" className="hover:text-[#00ADB5] transition-colors">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[#EEEEEE] text-2xl z-20"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#222831] border-t border-[#393E46] md:hidden z-10">
            <div className="flex flex-col items-center space-y-4 py-4">
              <a 
                href="#" 
                className="text-[#EEEEEE] hover:text-[#00ADB5] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#" 
                className="text-[#EEEEEE] hover:text-[#00ADB5] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Me
              </a>
              <a 
                href="#" 
                className="text-[#EEEEEE] hover:text-[#00ADB5] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-between px-4 sm:px-8 lg:px-14 mt-8 md:mt-20 pb-10 gap-8 md:gap-12">
        <div className="flex flex-col md:flex-row items-center md:items-start relative">
          <div className="order-2 md:order-1 flex-1">
            <h2 className="text-[#EEEEEE] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-center md:text-left">
              Frontend
              <span className="text-[#00ADB5] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold block mt-2">
                Developer
              </span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8 md:mt-12 px-4 md:px-0">
              <div onClick={handleHireMeClick}>
                <Button title="Hire me" white />
              </div>
              <Button title="Download CV" />
            </div>
          </div>
          <img 
            src="section1_side1_image.svg" 
            alt="" 
            className="order-1 md:order-2 h-32 sm:h-40 md:h-48 lg:h-56 mb-4 md:mb-0 md:ml-6" 
          />
        </div>
        
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto mt-8 md:mt-0">
          <img 
            src="section1_doodlesround.svg" 
            alt="section1_doodles" 
            className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] mx-auto" 
          />
          <img 
            src="section1_image.svg" 
            alt="section1_image" 
            className="w-1/2 max-w-[140px] sm:max-w-[160px] md:max-w-[190px] absolute bottom-4 left-1/2 transform -translate-x-1/2" 
          />
        </div>
      </div>

      {/* About Section */}
      <div className="bg-[#222831] text-white py-8 md:py-12 px-4 sm:px-8 lg:px-14">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          <div className="relative w-full lg:w-1/2 space-y-8">
            <div className="relative">
              <img 
                src="/section2-music.svg" 
                alt="Music Section" 
                className="absolute -top-4 left-4 sm:left-8 w-16 sm:w-20 md:w-24" 
              />
              <img 
                src="/lightbulb.svg" 
                alt="Lightbulb" 
                className="absolute top-16 sm:top-20 left-20 sm:left-24 w-8 sm:w-10 md:w-12" 
              />
              <div className="relative pt-20 md:pt-24">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  About <span className="text-[#00ADB5]">Me</span>
                </h2>
                <p className="text-sm md:text-base lg:text-lg mb-4 text-justify">
                  Hi, I'm a passionate <span className="text-teal-300">Frontend Developer</span> 
                  with a keen eye for design and a love for crafting seamless user experiences. 
                  I specialize in modern web technologies like <strong>React, JavaScript, HTML, CSS, and Tailwind</strong>.
                </p>
                <p className="text-sm md:text-base lg:text-lg mb-6 text-justify">
                  I thrive on solving problems and turning ideas into reality through code. 
                  Whether it's creating interactive UI components or optimizing website performance, 
                  I always strive for excellence.
                </p>
              </div>
              <img 
                src="/arrow_spring.svg" 
                alt="Arrow Spring" 
                className="absolute -bottom-8 left-8 sm:left-12 w-16 sm:w-20 md:w-24" 
              />
            </div>
          </div>
          
          {/* Right Side - Images Stack */}
          <div className="relative w-full lg:w-1/2 flex justify-center items-center min-h-[300px] sm:min-h-[350px] md:min-h-[400px]">
            {/* Ellipse3.svg - Bottom Level */}
            <img 
              src="/Ellipse3.svg" 
              alt="Ellipse Background" 
              className="absolute bottom-0 w-2/3 max-w-[200px] sm:max-w-[250px] md:max-w-[300px] z-0" 
            />
            
            {/* doodle_items.svg - Middle Level */}
            <img 
              src="/doodle_items.svg" 
              alt="Doodle Items" 
              className="absolute w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] z-10" 
            />
            
            {/* section2_image1.svg - Top Level */}
            <img 
              src="/section2_image1.svg" 
              alt="Section 2" 
              className="absolute bottom-0 sm:-bottom-2 md:-bottom-4 left-1/2 transform -translate-x-1/2 w-1/2 max-w-[150px] sm:max-w-[180px] md:max-w-[200px] z-20" 
            />
          </div>
        </div>
      </div>

      {/* Recent Work Section */}
      <div className="relative px-4 sm:px-8 lg:px-14 py-8 md:py-12 bg-[#222831]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-white mb-6 font-bold text-center md:text-left">
          My Recent <span className="text-[#00ADB5]">Work</span>
        </h2>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
          <div onClick={() => setActiveFilter("All")}>
            <Button 
              title="All" 
              white={activeFilter === "All"}
            />
          </div>
          <div onClick={() => setActiveFilter("UI")}>
            <Button 
              title="UI" 
              white={activeFilter === "UI"}
            />
          </div>
          <div onClick={() => setActiveFilter("UX")}>
            <Button 
              title="UX" 
              white={activeFilter === "UX"}
            />
          </div>
          <div onClick={() => setActiveFilter("Web Design")}>
            <Button 
              title="Web Design" 
              white={activeFilter === "Web Design"}
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-[#393E4680] p-4 sm:p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-auto mb-4 group-hover:opacity-90 transition-opacity duration-300" 
              />
              <h3 className="text-[#EEEEEE] text-lg font-semibold text-center group-hover:text-[#00ADB5] transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-[#AAAAAA] text-sm text-center mt-2">
                {project.category}
              </p>
            </div>
          ))}
        </div>

        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#EEEEEE] text-lg">No projects found for {activeFilter}</p>
            <div className="mt-4 flex justify-center" onClick={() => setActiveFilter("All")}>
              <Button title="Show All Projects" />
            </div>
          </div>
        )}
      </div>

      {/* Contact Section */}
      <div className="flex flex-col lg:flex-row gap-8 md:gap-12 px-4 sm:px-8 lg:px-14 py-8 md:py-12 w-full">
        <div className="relative w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-8 font-bold text-center lg:text-left relative">
            Got a project in 
            <span className="text-[#00ADB5] block mt-2">mind?</span>
          </h2>
          <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px]">
            <img 
              src="/contact_image.svg" 
              alt="Contact" 
              className="w-full h-auto" 
            />
          </div>
        </div>
        
        <div className="w-full lg:w-1/2">
          <ContactForm />
        </div>
      </div>

      {/* Footer */}
      <footer className="h-auto py-8 md:py-10 mt-8 bg-[#222831] border-t border-[#393E46]">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-10 text-sm text-[#EEEEEE] mb-6">
          <a href="#" className="flex items-center gap-2 hover:text-[#00ADB5] transition-colors">
            <img src="/home.svg" alt="Home" className="w-3 h-3" />
            Home
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-[#00ADB5] transition-colors">
            <img src="/user.svg" alt="About" className="w-3 h-3" />
            About Me
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-[#00ADB5] transition-colors">
            <img src="/phone.svg" alt="Contact" className="w-3 h-3" />
            Contact
          </a>
        </div>
        <div className="flex justify-center gap-6 mt-4">
          <img src="/facebook_icon.svg" alt="Facebook" className="w-5 h-5 hover:scale-110 transition-transform cursor-pointer" />
          <img src="/instagram_icon.svg" alt="Instagram" className="w-5 h-5 hover:scale-110 transition-transform cursor-pointer" />
          <img src="/twitter_icon.svg" alt="Twitter" className="w-5 h-5 hover:scale-110 transition-transform cursor-pointer" />
          <img src="/youtube_icon.svg" alt="YouTube" className="w-5 h-5 hover:scale-110 transition-transform cursor-pointer" />
        </div>
      </footer>
    </div>
  );
}

export default App;