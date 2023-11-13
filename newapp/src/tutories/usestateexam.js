import React,{useState} from 'react';
 const UseStateBasics= () => {

    const[text, setText] = useState('Random Title');
    const handleClick = () => {
        if (text === 'Random Title'){
            setText('hello World');
        }else{
            setText('Random Title');

        }
    };
    return (
        <React.Fragment>
            <h1>{text}</h1>
            <button onClick={handleClick}>title</button>
        </React.Fragment>    )
 };


 export default UseStateBasics;