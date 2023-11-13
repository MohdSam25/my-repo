import React,{ useState} from 'react';

const UseStateCounter = ( ) => {
    const [value, setValue] = useState(0);

    const reset =()=>{
        setValue(0)
    };
    return (
        <>
        <section>
            <h2>Regular counter</h2>
            <h1>{value}</h1>
            <button onClick={()=> setValue(value-1)}>Decrese</button>
            <button onClick={reset}>Reset</button>
            <button onClick={()=> setValue(value+1)}>Increse</button>
        </section>
        </>
    )
}


export default UseStateCounter