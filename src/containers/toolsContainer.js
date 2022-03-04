import React, { Component } from 'react';
import ProfileToolsList from '../components/profileToolsList';
import ToolsList from '../components/toolsList';

class ToolsContainer extends Component {

    filterTools = () => {
        let filteredTools;
        if(this.props.category) {
            const category = this.props.category;
            filteredTools = this.props.tools.filter(tool => tool.category.name === category)
        } else if(this.props.ownerId) {
            const ownerId = this.props.ownerId
            filteredTools = this.props.tools.filter(tool => tool.owner.id === ownerId)
        } else if(this.props.borrowerId) {
            const borrowerId = this.props.borrowerId
            filteredTools = this.props.tools.filter(tool => (tool.borrower && tool.borrower.id === borrowerId))
        }
        return filteredTools
    }

    render() {
        const filteredTools = this.filterTools();
        if(filteredTools.length === 0) {
            return (
                <div className="tools-container">
                    <em>No Tools currently here</em>
                </div>
            )
        } else if(this.props.parentUrl === "/profile") {
            return (
                <div className="tools-container">
                    <ProfileToolsList tools={filteredTools} parentUrl={this.props.parentUrl} />
                </div>
            )
        } else {
            return (
                <div className="tools-container">
                    <ToolsList tools={filteredTools} parentUrl={this.props.parentUrl} />
                </div> 
            )
        }
    }

}

export default ToolsContainer;