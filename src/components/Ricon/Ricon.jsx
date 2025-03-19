import React from 'react'
import './Ricon.css'

const Ricon = () => {
  return (
    <div className="rLink">
        <a href="#" className="resume-link">
            <div className="resume-icon"><i className="fa-regular fa-address-book"></i></div>
            <div>
                <p>Access online resume</p>
                <p>Dynamic, interactive, & up-to-date</p>
            </div>
            <div className="arrow"><i className="fa-solid fa-angle-right"></i></div>
        </a>
    </div>
  )
}

export default Ricon