import React, { Component } from 'react';

import './App.css';
import SignupForm from './components/signupForm'
import LoginForm from './components/loginForm'
import { signupNewUser, loginUser } from './actions/users';
import { connect } from 'react-redux';
import { render } from '@testing-library/react';

// import { BrowserRouter as Router, Route } from 'react-router';

class App extends Component {

  render(){
    let userLoggedIn;
    if(localStorage.jwt && this.props.state.currentUser.id) {
        userLoggedIn = true
      } else {
      localStorage.removeItem("jwt"); //ensure jwt hasnt been left from incorrect logout or maliciously added
      userLoggedIn = false
    }

    return (
      <div className="App">
        <h1>Tool Sharer App</h1>
        <div>NavBar Component</div>
        {userLoggedIn ? (
          <div>Categories Container Component</div>
        ) : (
          <div>User Forms Component</div>
        )}
      </div>      
    )
  }


}

{/* <SignupForm signupNewUser={this.props.signupNewUser} />
<LoginForm  loginUser={this.props.loginUser} /> */}


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
