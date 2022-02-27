import React, { Component } from 'react';
import SignupForm from '../components/signupForm';
import LoginForm from '../components/loginForm';
import { signupNewUser, loginUser } from '../actions/users';
import { connect } from 'react-redux';

class UserFormsContainer extends Component {

    render() {
        return (
            <div className="user-forms-container" >
                <SignupForm signupNewUser={this.props.signupNewUser} />
                <h4><em>or</em></h4>
                <LoginForm  loginUser={this.props.loginUser} />
            </div>
        )
    }

}
  
const mapDispatchToProps = dispatch => {
  return {
    signupNewUser: (newUserData) => dispatch(signupNewUser(newUserData)),
    loginUser: (userData) => dispatch(loginUser(userData))
  }
}

export default connect(null, mapDispatchToProps)(UserFormsContainer);