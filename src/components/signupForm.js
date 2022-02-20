import React, { Component } from 'react';

class SignupForm extends Component {

    state = {
        user: {
            username: "",
            email: "",
            password: ""
        }
    }

    handleOnChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            user: { ...this.state.user, [name]: value }
        });    
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.signupNewUser(this.state);

        this.setState({
            user: {
                username: "",
                email: "",
                password: ""
            }
        })
    }

    render() {
        return (
            <div className="signupForm" >
                <h3>Sign Up</h3>
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" name="username" placeholder="Username" value={this.state.user.username} onChange={this.handleOnChange}/>
                    <input type="text" name="email" placeholder="Email" value={this.state.user.email} onChange={this.handleOnChange}/>
                    <input type="password" name="password" placeholder="Password" value={this.state.user.password} onChange={this.handleOnChange}/> 
                    <input type="submit"/>
                </form>
            </div>
        )
    }

}

export default SignupForm;