import React from 'react'
 import './Timeline3.css'
  import Infitescroll from '../Infitescroll/Infintescroll'
 
 const Timeline3 = () => {
 
   return (
     <div className='timeline3Main'>
       <div className='tm3'>
         <div className='timeline3'>
         </div>
         <div className="poi3">
<i className="fa-solid fa-lightbulb"></i>
        </div>
        <div className='pon3'>
          <h2>Techinical <span>skills</span></h2>
        </div>
        <div className='h-line1'></div>
       </div>

       <div className="infinite-scroll-section">
        <div className="inf-main">
          <Infitescroll/>
          
        </div>
       </div>
     </div>
   )
 }
 
 export default Timeline3