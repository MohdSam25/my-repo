import React, { useReducer, useEffect } from 'react';
const Model = ({modelContent,closeModel})=>{
    useEffect(()=>{
        setTimeout(()=> {
            closeModel();
        },3000);
    });
    return (
        <div >
            <p>{modelContent}</p>
        </div>
    );
};

export default Model;