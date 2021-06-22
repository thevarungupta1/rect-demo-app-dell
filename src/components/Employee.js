import React, { Component } from 'react';

class Employee extends Component {
    
    constructor(props){
        super(props)
    }

    render() { 
        const { name, email, age } = this.props;
        return ( 
            <div>
                {/* <h1>Name = {this.props.name}, Age = {this.props.age}, Email={this.props.email}</h1> */}
                <h1>Name = {name}, Age = {age}, Email={email}</h1>
            </div>
         );
    }
}
 
export default Employee;