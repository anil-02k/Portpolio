import React, { useState, useEffect } from 'react'
import './Navbar.css'


const Navbar = () => {

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true"; // Persist dark mode state
  });

  

  const [menu, setMenu] = useState("about");

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark_mode");
    } else {
      document.body.classList.remove("dark_mode");
    }
    localStorage.setItem("darkMode", darkMode); // Store preference
  }, [darkMode]);

  return (
    <div className='Navmain'>
      <div className='box'>

        <div className="icon" style={{ position: 'relative', display: 'inline-block', top: '-5px' }}>
          anil
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190 230" fill="none" style={{ position: 'absolute', bottom: '-2px', left: '0', width: '100%', height: '100%' }}>
            {/* <!-- Underline --> */}
            <path
              d="M 64.8646 184.443 C 57.5812 184.9585 28.1036 188.94 20.0116 198.831 C 18.4703 200.715 17.5952 203.582 18.2037 206.732 C 18.9059 210.367 20.4446 209.085 22.1786 206.9655 C 24.7874 203.777 27.661 202.461 30.526 201.149 C 30.8348 201.008 31.1434 200.8665 31.4516 200.723 C 43.8326 195.7735 58.9306 193.793 71.5762 193.9115 C 75.84 193.7915 83.071 194.2385 87.134 196.161 C 87.779 196.475 88.3396 197.6925 88.889 198.886 C 89.6838 200.6115 90.4548 202.2865 91.423 201.103 C 92.4828 199.8075 93.121 196.3315 92.5594 193.4235 C 90.3552 182.015 71.4624 183.815 65.5234 184.381 C 65.2816 184.404 65.0614 184.425 64.8646 184.443 Z"
              fill="url(#underline-gradient)"
              transform="translate(-10, -29) scale(2, 1)"
            />
            <defs>
              <linearGradient id="underline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4AB1F1" />
                <stop offset="30%" stopColor="#566CEC" />
                <stop offset="100%" stopColor="#D749AF" />
              </linearGradient>
            </defs>
          </svg>
        </div>


        <ul className='navlink'>
          <a href="#" onClick={() => setMenu("about")} className={menu === 'about' ? 'active' : ''}>about</a>
          <a href="#" onClick={() => setMenu("experience")} className={menu === 'experience' ? 'active' : ''}>experience</a>
          <a href="#" onClick={() => setMenu("skills")}
            className={menu === 'skills' ? 'active' : ''}>skills</a>
          <a href="#" onClick={() => setMenu("projects")} className={menu === 'projects' ? 'active' : ''}>projects</a>
          <a href="#" onClick={() => setMenu("contact")} className={menu === 'contact' ? 'active' : ''}>contact</a>
        </ul>
        <div className='connect'>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-github"></i>
          <i class="fa-brands fa-twitter"></i>
          <div className='horizantalLine'></div>

          {/* ---light and Dark Mode--- */}

          <label for="toggle" id="toggle-label">
            <div id="toggle-div" className={darkMode ? "night" : ""}>
              <input type="checkbox" id="toggle" checked={darkMode}
                onChange={() => setDarkMode(!darkMode)} />
              <div class="clouds">
                <div class="cloud cloud-1"></div>
                <div class="cloud cloud-2"></div>
                <div class="cloud cloud-3"></div>
                <div class="cloud cloud-4"></div>
                <div class="cloud cloud-5"></div>
              </div>
              <div class="backdrops">
                <div class="backdrop"></div>
              </div>
              <div class="stars">
                <div class="star star-1"></div>
                <div class="star star-2"></div>
                <div class="star star-3"></div>
              </div>
              <div class="sun-moon">
                <div class="crater"></div>
              </div>
            </div>
          </label>

          {/* ------ */}

          {/* add a functionality of toggle button*/}
          <i class="fa-solid fa-bars sidebarmenu"></i>

        </div>
      </div>
    </div>
  )
}

export default Navbar