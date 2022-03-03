import React, { Component } from 'react';
import ToolsContainer from './toolsContainer';
import Tool from '../components/tool';
import { UserLoggedIn } from '../helpers/helperFunctions';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class ToolsPage extends Component {

    render() {
        if (UserLoggedIn(this.props.currentUserId)) {
            const selectedCategory = this.props.match.params.category_name;
            const url = this.props.match.url;
            return (
                <div className="tools-page">
                    <h1>{selectedCategory} Tools to Share</h1>
                    <ToolsContainer category={selectedCategory} tools={this.props.tools} parentUrl={url} currentUserId={this.props.currentUserId} />
                    <Route exact path={url} render={ () => <h3><em>Select Tool to View</em></h3>} />
                    <Route path={`${url}/:tool_id`} render={ (routerProps) => <Tool tools={this.props.tools} currentUserId={this.props.currentUserId} {...routerProps} />} />
                </div>
            )
        } else {
            return (
                <Redirect to="/"/>
            )
        }
    }
    
}

const mapStateToProps = state => {
    return {
        tools: state.tools.toolsArray,
        currentUserId: state.currentUser.id
    }
}

export default connect(mapStateToProps)(ToolsPage);