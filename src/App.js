import React, { Component } from 'react';
import './App.css';
import CategoriesContainer from './components/categoriesContainer';
import UserFormsContainer from './components/userFormsContainer'
import { connect } from 'react-redux';
// import { render } from '@testing-library/react';
//What is this?

// import { BrowserRouter as Router, Route } from 'react-router';

import { token } from './index';

class App extends Component {

  render() {
    let userLoggedIn;
    if(token && this.props.currentUserId) {
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
          <CategoriesContainer />
        ) : (
          <UserFormsContainer />
        )}
      </div>      
    )
  }

}

const mapStateToProps = state => {
  return {currentUserId: state.currentUser.id};
}

export default connect(mapStateToProps)(App);
