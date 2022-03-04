import React from 'react';
import ToolsContainer from './toolsContainer';
import NewToolForm from '../components/newToolForm';
import { UserLoggedIn } from '../helpers/helperFunctions';
import { createNewTool } from '../actions/categoriesAndTools';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ProfilePage = ({match, currentUser, tools, categories, createNewTool}) => {

  if (UserLoggedIn(currentUser.id)) {
    const url = match.url;
      return (
        <div className="profile-page">
          <h1>Hello {currentUser.username}!</h1>
          <h3>Here are the Tools you are currently borrowing:</h3>       
          <ToolsContainer borrowerId={currentUser.id} tools={tools} parentUrl={url} />

          <h3>And here are the Tools you are currently sharing:</h3>
          <ToolsContainer ownerId={currentUser.id} tools={tools} parentUrl={url} />      
        
          <NewToolForm currentUserId={currentUser.id} categories={categories} createNewTool={createNewTool}/>  
        </div>
      )
    } else {
      return (
        <Redirect to="/"/>
      )
    }

}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    tools: state.tools.toolsArray,
    categories: state.categories.categoriesArray
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createNewTool: (newToolData) => dispatch(createNewTool(newToolData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);