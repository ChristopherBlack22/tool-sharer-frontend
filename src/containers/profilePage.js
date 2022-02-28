import React, { Component } from 'react';
import ToolsContainer from './toolsContainer';
import Tool from '../components/tool';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

class ProfilePage extends Component {
  render() {
    // const url = this.props.match.url;
    return (
      <div className="profile-page">
        <h1>Hello {this.props.user.username}!</h1>
        <div>These are the Tools you are sharing (allow delete)</div>
        {/* <ToolsContainer ownerId={this.props.user.id} tools={this.props.tools} parentUrl={url} /> */}
        <div>These are the Tools you are borrowing (allow return)</div>       
        {/* <ToolsContainer borrowerId={this.props.user.id} tools={this.props.tools} parentUrl={url} /> */}
        
        <div>Form to add a new tool to share</div>
        
        {/* <Route exact path={url} render={ () => <h3><em>Select Tool to View</em></h3>} />
        <Route path={`${url}/:tool_id`} render={ (routerProps) => <Tool tools={this.props.tools} {...routerProps} />} /> */}
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    user: state.currentUser,
    tools: state.tools.toolsArray
  }
}

export default connect(mapStateToProps)(ProfilePage);