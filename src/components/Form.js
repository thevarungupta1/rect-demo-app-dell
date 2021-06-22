import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
    constructor(props){
        super(props)

        this.state = {
            username: 'mark',
            message: ''
        }
    }
    
    usernameChangeHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    messageChangeHandler = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    submitHandler = (event) => {        
        console.log(this.state)
        event.preventDefault();
        axios.post('', this.state)
    }

    render() { 
        return ( 
            <form onSubmit={ this.submitHandler }>
                <div className="form-group">
                    <label>Username</label>
                    <input 
                    type="text"
                    className="form-control"
                    value={ this.state.username } 
                    onChange={ this.usernameChangeHandler }/>
                </div>

                <div className="form-group">
                    <label>Message</label>
                    <input
                    type="text"
                    className="form-control"
                    value={ this.state.message }
                    onChange={ this.messageChangeHandler }
                    />
                <br/>
                <input 
                    type="submit"
                    value="Submit"
                    className="btn btn-primary"        
                />

                </div>
            </form>
         );
    }
}
 
export default Form;