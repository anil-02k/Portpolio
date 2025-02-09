import React from "react";
import "./Header.css";

const Header = ({darkMode}) => {
  return (
    <div className="headerMain">
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
      </p>
    </div>
  );
};

export default Header;
