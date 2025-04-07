import React from 'react'
import './Timeline2.css'

const Timeline2 = () => {

  return (
    <div className='timeline2Main'>
      <div className='tm2'>
        <div className='timeline2'>
        </div>
        <div className="poi2">
          <i className="fa-regular fa-address-book"></i>
        </div>
        <div className='pon2'>
          <h2>Featured <span>Projects</span></h2>
        </div>
        <div className='project'>
          <div className='projectMain'>
            
          </div>
        </div>
        <div  className='hl'> 
        </div>

        <div className='explorepro'>
          <div className="lef">
            <div className="to"><h2>Projects & <span>Experiments</span></h2></div>
            <div className="bo"><p>Browse more projects in the dedicated explorer, a centralised hub for all my work and experiments.</p></div>
          </div>
          <div className="rig">
            <button className='proExplore'>
              Explore More Projects <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Timeline2