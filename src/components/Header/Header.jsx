 import {React, useEffect} from "react";

import CircularText from '../CircularText/CircularText';
  

import "./Header.css";

const Header = ({darkMode}) => {
  useEffect(() => {
  const passion1=document.querySelector(".passion_1");
  const passion2=document.querySelector(".passion_2");
  const passion1Outline = document.querySelector(".passion_1_outline");
  const passion2Outline = document.querySelector(".passion_2_outline");


  passion2.addEventListener("mouseenter",()=>{
    passion1.style.color="white";
    passion2.style.color="transparent";
    passion1Outline.style.display = "block";
    passion2Outline.style.display = "none";
    
  })

  passion2.addEventListener("mouseleave", () => {
    passion1.style.color = "transparent";
    passion2.style.color = "white";
    passion1Outline.style.display = "none";
    passion2Outline.style.display = "block";
  })
  
}, []);

  return (
    <div className="headerMain">
      {/* <div className="animatedBg">
        
      </div>
      <p>
        Hi, I am <span className="userImage">
            <img align="top"
              src=
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJeeyQS5VGXPpmApxzjpRVhul5bj2dgT2RKA&s"
              alt="" />
      
        </span> Anil{" "}
        <span>
          <i className="fa-solid fa-hand-peace"></i>
        </span>
        , practicing design since <span className="year" >1 Years</span>, focused
        on designing{" "}
        <span>
          <i className="fa-solid fa-pen-nib"></i>
        </span>{" "}
        and building digital products{" "}
        <span>
          <i className="fa-solid fa-globe"></i>
        </span>
        , brands{" "}
        <span>
          <i className="fa-solid fa-fingerprint"></i>
        </span>{" "}
        and experiences{" "}
        <span>
          <i className="fa-solid fa-wand-sparkles"></i>
        </span>
        .
      </p> */}

      {/* -------- */}

      <div className="herobox">
        <div className="circletext">
          <CircularText
            text="JUST*A*NOBODY*"
             onHover="speedUp"
             spinDuration={20}
             className="custom-class"
            />
         </div>
        
        <h3 className="passion_1">Webdesigner</h3>
        <h3 className="passion_2">& Problem Solver</h3>
<div className="herobox_image">
          <img src="pc.webp" alt="" />
        </div>
        <h3 className="passion_1_outline">Webdesigner</h3>
        <h3 className="passion_2_outline">& Problem Solver</h3>
      </div>



    </div>
  );
};

export default Header;
