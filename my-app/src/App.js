import React, { useState } from 'react'
import './App.css';
import Callback from './callback'

export default function App() {
  const [UIcolor, setUIColor]= useState(null)

  const getColor = (color)=>{
    setUIColor(color);
  };

  return (
    <div className='App'>
      <div className='App-color-container' style={{background: `${UIcolor}`}}></div>
      <Callback getColor={getColor}/>
    </div>

  );
}


