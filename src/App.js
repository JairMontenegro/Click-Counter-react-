import React from 'react';
import './App.css';
import ButtonFun from './components/button';
import Counter from './components/counter';
import logocounter  from './images/logo-counter.png';
import { useState } from 'react'// to use hooks we ned to import package of react, useStatus allows us add a state to our component 
import Footer from './components/footer.js'  // useState one of most used in react 

function App() {

  const [numClicks , setNumClicks] =  useState (0); // this is hook 

  const setClick = () => {
    setNumClicks  (numClicks + 1);
  };
const restartCounter = () => {
  setNumClicks(0)
};


  return (



    <div className='App'>
      <div className='logo-container'>
      <img className='logo' src={logocounter} alt='logo'/>
      </div>

      <div className='principal-container'>
      <Counter
      numberOfClicks = {numClicks}
      />


      <ButtonFun
      text = 'Click'
      isClickButton = {true}
      setClick = {setClick} />
      <ButtonFun
      text ='Reset'
      isClickButton = {false}
      setClick = {restartCounter} />
    
      </div>
      <Footer/>
    </div>
  );
}

export default App;

