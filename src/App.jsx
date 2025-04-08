import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Timeline from './components/Timeline/Timeline';
import Timeline2 from './components/Timeline2/Timeline2';
import Footer from './components/Footer/Footer';
import Timeline3 from './components/Timeline3/Timeline3';
import { ChatBot } from './components/Chatbot/Chatbot';
import ConnectSection from './components/ConnectSection/ConnectSection';

const App = () => {

  const [darkMode,setDarkMode]=useState(()=>{
    return localStorage.getItem("darkMode")==="true"  || true;
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
    
    <main>
      <ChatBot/>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Header darkMode={darkMode} />
      <Timeline/>
      <Timeline2/>
      <Timeline3/>
      <ConnectSection/>
      <Footer/>
    </main>
  
  )
}

export default App