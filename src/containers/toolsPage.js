import React, { Component } from 'react';
import ToolsContainer from './toolsContainer';
import { connect } from 'react-redux';

class ToolsPage extends Component {

    render() {
        const selectedCategory = this.props.match.params.category_name;
        return (
            <div className="tools-page">
                <h2>{selectedCategory} Tools for Sharing</h2>
                <ToolsContainer category={selectedCategory} tools={this.props.tools}/>
            </div>
        )
    }
    
}

const mapStateToProps = state => {
    return {tools: state.tools.toolsArray}
}

export default connect(mapStateToProps)(ToolsPage);