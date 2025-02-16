import React from 'react'
import './Terminal.css'

const Terminal = () => {
  return (
    <div className='terminalMain'>
        <div className="top">
            <div className="left">
                <div className="active"></div>
                <div className="add"></div>
            </div>
            <div className="right"></div>
        </div>
        <div className="bottom"></div>
    </div>
  )
}

export default Terminal