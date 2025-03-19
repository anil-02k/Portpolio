import React from 'react'
import './Timeline3.css'
import FallingIcons from '../Falling Icon/FallingIcons'

const Timeline3 = () => {

  
  const icons = [
    {
      icon: <img src="https://skillicons.dev/icons?i=react" alt="React" />,
      iconColor: "#00D9FE",
      backgroundColor: "#252838",
    },
    {
      icon: <img src="https://skillicons.dev/icons?i=bootstrap" alt="Bootstrap" />,
      iconColor: "#7952B3",
      backgroundColor: "#7512F7",
    },
    {
      icon: <img src="https://skillicons.dev/icons?i=html" alt="HTML" />,
      iconColor: "#E34F26",
      backgroundColor: "#E14E1D",
    },
    {
      icon: <img src="https://skillicons.dev/icons?i=css" alt="CSS" />,
      iconColor: "#1572B6",
      backgroundColor: "#0277BD",
    },
    {
      icon: <img src="https://skillicons.dev/icons?i=vscode" alt="VS Code" />,
      iconColor: "#007ACC",
      backgroundColor: "#090B0C",
    },
    {
      icon: <img src="https://skillicons.dev/icons?i=github" alt="GitHub" />,
      iconColor: "#181717",
      backgroundColor: "#090B0C",
    },
    {
      icon: <img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind CSS" />,
      iconColor: "#06B6D4",
      backgroundColor: "#090B0C",
    },
    {
      icon: <img src="https://skillicons.dev/icons?i=git" alt="Git" />,
      iconColor: "#F05032",
      backgroundColor: "#EE3C2E",
    },
    {
      icon: <img src="https://skillicons.dev/icons?i=nodejs" alt="Node.js" />,
      iconColor: "#339933",
      backgroundColor: "#090B0C",
    },
    {
      icon: <img src="https://skillicons.dev/icons?i=python" alt="Python" />,
      iconColor: "#3776AB",
      backgroundColor: "#090B0C",
    },
    {
      icon: <img src="https://skillicons.dev/icons?i=javascript" alt="JavaScript" />,
      iconColor: "#F7DF1E",
      backgroundColor: "#000000",
    },
    {
      icon: <img src="https://skillicons.dev/icons?i=typescript" alt="TypeScript" />,
      iconColor: "#3178C6",
      backgroundColor: "#090B0C",
    },
    {
      icon: <img src="https://skillicons.dev/icons?i=express" alt="Express" />,
      iconColor: "#000000",
      backgroundColor: "#090B0C",
    },
    {
      icon: <img src="https://skillicons.dev/icons?i=mongodb" alt="MongoDB" />,
      iconColor: "#47A248",
      backgroundColor: "#023430",
    },
    {
      icon: <img src="https://skillicons.dev/icons?i=c" alt="C" />,
      iconColor: "#A8B9CC",
      backgroundColor: "#394AAB",
    },
    {
      icon: <img src="https://skillicons.dev/icons?i=cpp" alt="C++" />,
      iconColor: "#00599C",
      backgroundColor: "#00599C",
    },
    {
      icon: <img src="https://skillicons.dev/icons?i=nextjs" alt="Next.js" />,
      iconColor: "#000000",
      backgroundColor: "#090B0C",
    },
    {
      icon: <img src="https://skillicons.dev/icons?i=mysql" alt="MySQL" />,
      iconColor: "#4479A1",
      backgroundColor: "#090B0C",
    },
    {
      icon: <img src="https://skillicons.dev/icons?i=java" alt="Java" />,
      iconColor: "#007396",
      backgroundColor: "090B0C",
    },
    {
      icon: <img src="https://skillicons.dev/icons?i=opencv" alt="OpenCV" />,
      iconColor: "#5C3EE8",
      backgroundColor: "090B0C",
    },

  ];

  return (
    <div className='timeline3Main'>
      <div className='tm3'>
        
      <FallingIcons
        icons={icons} // Pass the array of icons
        trigger="hover" // Trigger animation on hover
        backgroundColor="transparent" // Background color of the container
        wireframes={false} // Disable wireframes
        gravity={0.56} // Gravity strength
        iconSize="2rem" // Size of the icons
        mouseConstraintStiffness={0.9} // Stiffness of mouse interaction
      />
       

      </div>
    </div>
  )
}

export default Timeline3