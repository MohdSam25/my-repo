import React, {useState} from "react";

const ShortCircuit= ()=>{
    const [text, setText]= useState(' '); 
    const [isError,setIsError] = useState(false)
   
    return (
        <>
        <h1>{text || 'sameer'}</h1>
        <button onClick={()=>setIsError(!isError)}> submit </button>
        {isError && <h1>Error....</h1>}
        {isError ? (<p> there is error.....</p>):(
        <div><h2>there is no error</h2></div>
        )}
        
        </>
    );
};

export default ShortCircuit;