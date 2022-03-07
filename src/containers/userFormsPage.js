import React from 'react';
import SignupForm from '../components/signupForm';
import LoginForm from '../components/loginForm';
import { signupNewUser, loginUser } from '../actions/users';
import { connect } from 'react-redux';

const UserFormsContainer = ({signupNewUser, loginUser}) => {

  return (
    <div className="user-forms-container" >
        <SignupForm signupNewUser={signupNewUser} />
        <h3><em>or</em></h3>
        <LoginForm  loginUser={loginUser} />
    </div>
  )

}
  
const mapDispatchToProps = dispatch => {
  return {
    signupNewUser: (newUserData) => dispatch(signupNewUser(newUserData)),
    loginUser: (userData) => dispatch(loginUser(userData))
  }
}

export default connect(null, mapDispatchToProps)(UserFormsContainer);