import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Timeline from './components/Timeline/Timeline';
import Footer from './components/Footer/Footer';
const App = () => {

  const [darkMode,setDarkMode]=useState(()=>{
    return localStorage.getItem("darkMode")==="true";
  });

  useEffect(()=>{
    if(darkMode){
      document.body.classList.add("dark_mode");
    }else{
      document.body.classList.remove("dark_mode");
    }
    localStorage.setItem("darkMode",darkMode);
  },[darkMode]);

  return (
    <>
    
    <main>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Header darkMode={darkMode} />
      <Timeline/>
      <Footer/>
    </main>
  </>
  )
}

export default App