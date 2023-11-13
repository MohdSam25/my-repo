import React, { useState, useEffect } from 'react';
import App from './App';

function Counter (){
  const [count, setCount] = useState(0);
  useEffect(()=>{

  },[count]);
  
  return (
    <div>
      <p> Count : {count}</p>
      <button onClick={()=> setCount(count + 1)}> increment </button>
    </div>
  );
};

export default Counter;



