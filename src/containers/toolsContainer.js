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
            // debugger
            const ownerId = this.props.ownerId
            filteredTools = this.props.tools.filter(tool => tool.owner.id === ownerId)
        } else if(this.props.borrowerId) {
            // debugger
            const borrowerId = this.props.borrowerId
            filteredTools = this.props.tools.filter(tool => (tool.borrower && tool.borrower.id === borrowerId))
        }
        return filteredTools
    }

    render() {
        const filteredTools = this.filterTools();
        if(this.props.parentUrl === "/profile") {
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

    // render() {
    //     // debugger
    //     // const category = this.props.category;
    //     // const filteredTools = this.props.tools.filter(tool => tool.category.name === category);
    //     const filteredTools = this.filterTools();
    //     return (
    //         <div className="tools-container">
    //             <ToolsList tools={filteredTools} parentUrl={this.props.parentUrl} />
    //         </div>  
    //     )
    // }

}

export default ToolsContainer;