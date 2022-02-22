import React, { Component } from 'react';
import './App.css';
import CategoriesContainer from './components/categoriesContainer';
import UserFormsContainer from './components/userFormsContainer'
import { connect } from 'react-redux';
// import { render } from '@testing-library/react';
//What is this?

// import { BrowserRouter as Router, Route } from 'react-router';

// export const token = localStorage.getItem("jwt");
// import token from './index';
// let token = localStorage.getItem("jwt");
// 
class App extends Component {

  render() {
    let userLoggedIn;
    if(localStorage.jwt && this.props.currentUserId) {
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
