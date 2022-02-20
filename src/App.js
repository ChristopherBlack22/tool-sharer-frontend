import React, { Component } from 'react';
import './App.css';
import UserFormsContainer from './components/userFormsContainer'
import { connect } from 'react-redux';
// import { render } from '@testing-library/react';
//What is this?

// import { BrowserRouter as Router, Route } from 'react-router';

class App extends Component {

  render() {
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
          <UserFormsContainer />
        )}
      </div>      
    )
  }

}

export default App;
