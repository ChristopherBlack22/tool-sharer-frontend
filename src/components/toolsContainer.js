import React, { Component } from 'react';
import { connect } from 'react-redux';

class ToolsContainer extends Component {
    render() {
        const toolsForCategory = this.props.tools.filter(tool => tool.category.id === this.props.categoryId);
        const toolList = toolsForCategory.map(tool => {
            return <li>{tool.name} - Owner: {tool.owner.username}</li>
        })
        // debugger
        return (
            <div className="tools-container" >
                To be changed
                <ul>
                    {toolList}
                </ul>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {tools: state.tools.toolsArray}
}

export default connect(mapStateToProps)(ToolsContainer);