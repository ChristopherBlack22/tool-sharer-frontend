import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navBar';
import HomePage from './containers/homePage';
import UserFormsPage from './containers/userFormsPage';
import ProfilePage from './containers/profilePage';
import ToolsPage from './containers/toolsPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UserLoggedIn } from './helpers/helperFunctions';
import { connect } from 'react-redux';

const App = ({currentUserId}) => {

	return (
		<Router>
			<div className="App">
				<h1>Tool Sharer App</h1>
				{UserLoggedIn(currentUserId) ? <NavBar /> : null}
				<br/>					
				<div className="content">
					<Switch>
						<Route exact path="/">{UserLoggedIn(currentUserId) ? <HomePage /> : <UserFormsPage/>}</Route>
						<Route path="/profile" component={ ProfilePage } />
						<Route path="/:category_name/tools" component={ ToolsPage } />
						<Route path="*" render={() => <h2>No Page Found! Incorrect URL!</h2>} />
					</Switch>
				</div>
			</div>
		</Router>
	)
	
}

const mapStateToProps = state => {
  return {currentUserId: state.currentUser.id};
}

export default connect(mapStateToProps)(App);