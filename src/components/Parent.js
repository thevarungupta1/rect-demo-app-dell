import React, { Component } from 'react';

class Parent extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            name: 'Guest'
        }
    }

    // clickHandler(){
    //     console.log('Button clciked')
    //     this.setState({
    //         name: 'Mark'
    //     })
    // }
    clickHandler = () => {
        this.setState({
            name: 'Paul'
        })
    }

    render() { 
        return ( 
            <div>
                <h1>{ this.state.name }</h1>
                {/* <button onClick={() => this.clickHandler()} >Login</button> */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
         );
    }
}
 
export default Parent;