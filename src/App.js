import React, { Component } from 'react';
import './App.css';

// import CategoriesContainer from './components/categoriesContainer';
import UserFormsPage from './containers/userFormsPage';
import { connect } from 'react-redux';

import NavBar from './components/navBar';
import HomePage from './containers/homePage';
import ProfilePage from './containers/profilePage';
import ToolsPage from './containers/toolsPage';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import UserLoggedIn from './helpers/userLoggedIn';

class App extends Component {

	// userLoggedIn = () => {
	// 	if(localStorage.jwt && this.props.currentUserId) {
	// 		return true
	// 	} else {
	// 		//ensure jwt hasnt been left from incorrect logout or maliciously added
	// 		localStorage.removeItem("jwt");
	// 		return false
	// 	}
	// }

	render(){
		
    // let userLoggedIn;
    // if(localStorage.jwt && this.props.currentUserId) {
    //     userLoggedIn = true
    //   } else {
    //   localStorage.removeItem("jwt"); //ensure jwt hasnt been left from incorrect logout or maliciously added
    //   userLoggedIn = false
    // }

	


    
		return (
			<Router>
				<div className="App">
					<h1>Tool Sharer App</h1>
					{UserLoggedIn(this.props.currentUserId) ? <NavBar /> : null}
					{/* {userLoggedIn ? <NavBar /> : null} */}
					<br/>					
					<div className="content">
						<Switch>
							<Route exact path="/">{UserLoggedIn(this.props.currentUserId) ? <HomePage /> : <UserFormsPage/>}</Route>
              				{/* <Route exact path="/">{userLoggedIn ? <HomePage /> : <UserFormsPage/>}</Route> */}
							<Route path="/profile" component={ ProfilePage } />
							<Route path="/:category_name/tools" component={ ToolsPage } />
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