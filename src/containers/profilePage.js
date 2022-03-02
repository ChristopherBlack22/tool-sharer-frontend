import React, { Component } from 'react';
// import ToolsContainer from './toolsContainer';
// import Tool from '../components/tool';
import NewToolForm from '../components/newToolForm';
import { createNewTool } from '../actions/categoriesAndTools';
// import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

class ProfilePage extends Component {
  render() {
    debugger
    const url = this.props.match.url;
    return (
      <div className="profile-page">
        <h1>Hello {this.props.currentUser.username}!</h1>
        <div>These are the Tools you are sharing (allow delete)</div>
        {/* <ToolsContainer ownerId={this.props.user.id} tools={this.props.tools} parentUrl={url} /> */}
        <div>These are the Tools you are borrowing (allow return)</div>       
        {/* <ToolsContainer borrowerId={this.props.user.id} tools={this.props.tools} parentUrl={url} /> */}
        
        <NewToolForm currentUserId={this.props.currentUser.id} categories={this.props.categories} createNewTool={this.props.createNewTool}/>
        
        {/* <Route exact path={url} render={ () => <h3><em>Select Tool to View</em></h3>} />
        <Route path={`${url}/:tool_id`} render={ (routerProps) => <Tool tools={this.props.tools} {...routerProps} />} /> */}
      </div>
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