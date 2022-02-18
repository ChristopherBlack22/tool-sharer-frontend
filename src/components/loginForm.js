import React, { Component } from 'react';

class LoginForm extends Component {

    state = {
        user: {
            username: "",
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
        this.props.loginUser(this.state)
        this.setState({
            user: {
                username: "",
                password: ""
            }
        })
    }

    render() {
        return (
            <div className="loginForm" >
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" name="username" placeholder="Username" value={this.state.user.username} onChange={this.handleOnChange}/>
                    <input type="password" name="password" placeholder="Password" value={this.state.user.password} onChange={this.handleOnChange}/> 
                    <input type="submit"/>
                </form>
            </div>
        )
    }

}

export default LoginForm;