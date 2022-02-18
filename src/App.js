import React, { Component } from 'react';

import './App.css';
import SignupForm from './components/signupForm'
import { signupNewUser } from './actions/users';
import { connect } from 'react-redux';

// import { BrowserRouter as Router, Route } from 'react-router';


class App extends Component {
  render() {
    return (
      <div className="App">
        App Component
        <SignupForm signupNewUser={this.props.signupNewUser} />
        {/* <LoginForm  /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {state: state};
}

const mapDispatchToProps = dispatch => {
  return {
    signupNewUser: (newUserData) => dispatch(signupNewUser(newUserData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
