import React, { Component } from 'react';
import UserFormsContainer from './userFormsContainer';
import { Redirect } from 'react-router-dom';

class Login extends Component {

    render() {
        //debugger
        return (        
            <div className="login-page">
                {this.props.userLoggedIn ? (
                    <Redirect to="/" />
                ) : (
                    <UserFormsContainer />
                )}
            </div>      
        )
    }

}

export default Login;