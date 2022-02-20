import React, { Component } from 'react';
import SignupForm from './signupForm';
import LoginForm from './loginForm';
import { signupNewUser, loginUser } from '../actions/users';
import { connect } from 'react-redux';

class UserFormsContainer extends Component {

    render() {
        return (
            <div>
                <SignupForm signupNewUser={this.props.signupNewUser} />
                <LoginForm  loginUser={this.props.loginUser} />
            </div>
        )
    }

}

//is this required?
const mapStateToProps = state => {
    return {state: state};
  }
  
const mapDispatchToProps = dispatch => {
  return {
    signupNewUser: (newUserData) => dispatch(signupNewUser(newUserData)),
    loginUser: (userData) => dispatch(loginUser(userData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserFormsContainer);