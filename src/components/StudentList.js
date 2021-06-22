import React from 'react';
import Student from './Student';

// function StudentList(){

// }

const StudentList = () => {
    const data = [
        {
            id: 1,
            name: 'mark',
            age: 30
        },
        {
            id: 2,
            name: 'pual',
            age: 30
        },
        {
            id: 3,
            name: 'watson',
            age: 30
        }
    ];
    return(
        <div>
            <ul>
                {
                    data.map(x => <Student data={x} />)
                }
            </ul>
        </div>
    )
}

export default StudentList;