import React from 'react'
import './Timeline.css'
import Ricon from '../Ricon/Ricon'

const Timeline = () => {

  const getGreeting=()=>{
    const hour=new Date().getHours();

    if(hour<12){
      return "Good morning, human"
    }
    else if(hour<18){
      return "Good afternoon, human"
    }
    else{
      return "Good evening, human"
    }
  }

  return (
    <div className='timelineMain'>
      <div className='timeline'>
      </div>
      <div className='rIcon'>
        <Ricon />
      </div>
      <div className='wish'>
        <h2>{getGreeting()}</h2>
        <h4>
          <span className="">The name's</span>
          <a href="https://www.linkedin.com/in/anil-02k/" target="_blank"
            className="nam">Anil Kumar</a>
          , but you can call me
          <a href="https://www.github.com/anil-02k" target="_blank"
            className="na">Anil</a>
          . I'm a
          <span className="stu">Student</span>
          and an
          <span className="op">Open-source</span>
          enthusiast."
        </h4>

      </div>
    </div>
  )
}

export default Timeline