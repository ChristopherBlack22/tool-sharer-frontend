import React, { Component } from 'react';
import ToolsContainer from './toolsContainer';
import Tool from '../components/tool';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

class ToolsPage extends Component {

    render() {
        const selectedCategory = this.props.match.params.category_name;
        const url = this.props.match.url;
        return (
            <div className="tools-page">
                <h1>{selectedCategory} Tools to Share</h1>
                <ToolsContainer category={selectedCategory} tools={this.props.tools} parentUrl={url} />
                <Route exact path={url} render={ () => <h3><em>Select Tool to View</em></h3>} />
                <Route path={`${url}/:tool_id`} render={ (routerProps) => <Tool tools={this.props.tools} {...routerProps} />} />
            </div>
        )
    }
    
}

const mapStateToProps = state => {
    return {tools: state.tools.toolsArray}
}

export default connect(mapStateToProps)(ToolsPage);