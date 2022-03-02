import React, { Component } from 'react';
import './App.css';

// import CategoriesContainer from './components/categoriesContainer';
import UserFormsPage from './containers/userFormsPage';
import { connect } from 'react-redux';

import NavBar from './components/navBar';
import HomePage from './containers/homePage';
import ProfilePage from './containers/profilePage';
import ToolsPage from './containers/toolsPage';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {

	render(){

    let userLoggedIn;
    if(localStorage.jwt && this.props.currentUserId) {
        userLoggedIn = true
      } else {
      localStorage.removeItem("jwt"); //ensure jwt hasnt been left from incorrect logout or maliciously added
      userLoggedIn = false
    }


    
		return (
			<Router>
				<div className="App">
					<h1>Tool Sharer App</h1>
					{userLoggedIn ? <NavBar /> : null}
					<br/>					
					<div className="content">
						<Switch>
              				<Route exact path="/">
								{userLoggedIn ? <HomePage /> : <UserFormsPage/>}
							</Route>
							<Route path="/profile">
								{userLoggedIn ? <ProfilePage /> : <Redirect to="/"/>}
							</Route>
							<Route path="/:category_name/tools">
								{userLoggedIn ? <ToolsPage /> : <Redirect to="/"/>}
							</Route>
						</Switch>
					</div>
				</div>
			</Router>
		)
	}
}

const mapStateToProps = state => {
  return {currentUserId: state.currentUser.id};
}

export default connect(mapStateToProps)(App);