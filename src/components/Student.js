import React from 'react';

const Student = (props) => {
    const { id, name } = props.data;
    return(
        <li>
            <h1>Id: {id} , Name:{name}</h1>
        </li>
    )
}

export default Student;