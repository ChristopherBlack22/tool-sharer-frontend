import React from 'react';
import ToolsContainer from './toolsContainer';
import Tool from '../components/tool';
import { UserLoggedIn } from '../helpers/helperFunctions';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ToolsPage = ({match, tools, currentUserId}) => {

    if (UserLoggedIn(currentUserId)) {
        const selectedCategory = match.params.category_name;
        const url = match.url;
        return (
            <div className="tools-page">
                <h1>{selectedCategory} Tools to Share</h1>
                <ToolsContainer category={selectedCategory} tools={tools} parentUrl={url} currentUserId={currentUserId} />
                <Route exact path={url} render={ () => <h3><em>Select Tool to View</em></h3>} />
                <Route path={`${url}/:tool_id`} render={ (routerProps) => <Tool tools={tools} currentUserId={currentUserId} {...routerProps} />} />
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
        tools: state.tools.toolsArray,
        currentUserId: state.currentUser.id
    }
}

export default connect(mapStateToProps)(ToolsPage);