import React,{ useState } from 'react'

const ControlledInput=()=>{
    const [firstName, setFirstName]=useState('');
    const [email, setEmail]=useState('');
    const [people,setPeople] = useState([]);


    const handleSubmit=(e)=>{
        e.preventDefault();
        if (firstName && email){
            const person = { id: new Date().getTime().toString(),firstName,email};
            console.log(person);
            setPeople((people)=>{
                return [...people,person];
            });
            setFirstName('');
            setEmail('');

        }else{
            console.log('empty values');
        }
    };
    return(
        <>
        <article>
            <form >
                <div>
                    
                    <label htmlFor='firstName'>Name</label>
                    <input type='text'
                    id='firstName'
                    name='firstName'
                    value={firstName}
                    onChange={(e)=> setFirstName(e.target.value)}/>
                     </div> 
                     <div>
                        <label htmlFor='email'>Email</label>
                        <input type='text'
                        id='email'
                        name='email'
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}/></div>    
                        <div>
                            <button type='submit' onClick={handleSubmit}>submit</button></div>              
                    </form>
                    {people.map((person,index)=>{
                        const {id, firstName, email }= person;
                        return(
                            <div key={id}>
                                <h4>{firstName}</h4>
                                <p>{email}</p>
                            </div>
                        );
                    })}
                    
                    </article></>
    );
}

export default ControlledInput