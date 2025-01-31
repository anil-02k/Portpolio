import React, { useState, useEffect } from 'react'
import './Navbar.css'


const Navbar = () => {

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true"; // Persist dark mode state
  });

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
        <div className='icon'>dfsd</div>
        <div className='some'>
          dfsdfsdfdf
        </div>
        <div className='connect'>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-github"></i>
          <i class="fa-brands fa-facebook"></i>
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

        </div>
      </div>
    </div>
  )
}

export default Navbar