import React, { Component } from 'react';

import './App.css';
import SignupForm from './components/signupForm'
import LoginForm from './components/loginForm'
import { signupNewUser, loginUser } from './actions/users';
import { connect } from 'react-redux';

// import { BrowserRouter as Router, Route } from 'react-router';


class App extends Component {
  render() {
    return (
      <div className="App">
        App Component
        <SignupForm signupNewUser={this.props.signupNewUser} />
        <LoginForm  loginUser={this.props.loginUser} />
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
