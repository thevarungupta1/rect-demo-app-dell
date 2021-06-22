import React from 'react';

const Person = (props) => {
    const { name, email, age } = props;
    return (
        <div>    
            <h1>Name = {name}, Age = {age}, Email = {email}</h1>
            
        </div>
    )
}

export default Person;