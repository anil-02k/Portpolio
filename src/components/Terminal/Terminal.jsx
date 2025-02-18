import {React, useState} from 'react'
import './Terminal.css'

const Terminal = () => {

  const labels=[
    "You're really not going to stop, are you?",
    "I am sorry Dave, I'm afraid I can't do that.",
    "Did you seriously expect this button to do something?",
    "Come on, stop trying... This is a fake UI and you know it.",
    "It's not like I can stop you from moving your mouse, but you're wasting your time here.",
    "Alright, let me rephrase that for you: Stop That.",
    "You are persistent, I will give you that. But this is getting ridiculous.",
    "I am not even mad, I'm impressed.",
    "You are still trying to interact? Wow.",
    "Okay, now you are just being annoying.",
    "STOP DOING THAT",
    "I'm done. You can hover this all you want, I'm not responding anymore.",
  ];

  const [hoverCount,setHoverCount]=useState(0);

  const handleHover=()=>{
    setHoverCount((prev)=>(prev+1 < labels.length ?prev+1:prev));
  }
  
  return (
    <div className='terminalMain'>
        <div className="top">
            <div className="left">
                <div className="active">
                  <div className="mi">
                  <i class="fa-solid fa-terminal"></i>
                  pwsh anil
                  </div>
                  <div className="clo" aria-level={labels[hoverCount]} title={labels[hoverCount]} onMouseEnter={handleHover} ><i class="fa-solid fa-x"></i></div>
                </div>
                <div className="add">
                  <button aria-label={labels[hoverCount]} title={labels[hoverCount]} className='ll' onMouseEnter={handleHover} tabIndex={0}><i className="fa-solid fa-plus" aria-hidden="true"></i></button>
                  <hr></hr>
                  <button aria-label={labels[hoverCount]} title={labels[hoverCount]} className='rr' onMouseEnter={handleHover} tabIndex={0}><i className="fa-solid fa-caret-down" aria-hidden="true"></i ></button>
                </div>
            </div>
            <div className="right">
              <i aria-label={labels[hoverCount]} title={labels[hoverCount]} onMouseEnter={handleHover} class="fa-solid fa-minus"></i>
              <i aria-label={labels[hoverCount]} title={labels[hoverCount]} onMouseEnter={handleHover} class="fa-regular fa-square"></i>
              <i aria-label={labels[hoverCount]} title={labels[hoverCount]} onMouseEnter={handleHover} class="fa-solid fa-x"></i>
            </div>
        </div>
        <div className="bottom"></div>
    </div>
  )
}

export default Terminal