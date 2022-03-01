import React, { Component } from 'react';
import ToolsList from '../components/toolsList';

class ToolsContainer extends Component {


    // filterTools = () => {
    //     debugger
    //     let tools;
    //     if (this.props.category) {
    //         const category = this.props.category;
    //         tools = this.props.tools.filter(tool => tool.category.name === category)
    //     } else if (this.props.ownerId) {
    //         const ownerId = this.props.ownerId;
    //         tools = this.props.tools.filter(tool => tool.owner.id === ownerId)
    //     } else if (this.props.borrowerId) {
    //         const borrowerId = this.props.borrowerId;
    //         tools = this.props.tools.filter(tool => tool.borrower.id === borrowerId)
    //     }
    //     return tools
    // }

    //This approach works for the Tool Page but isnt working for Profile Page - needs fixing

    render() {
        const category = this.props.category;
        const filteredTools = this.props.tools.filter(tool => tool.category.name === category);
        // const filteredTools = this.filterTools();
        return (
            <div className="tools-container">
                <ToolsList tools={filteredTools} parentUrl={this.props.parentUrl} />
            </div>  
        )
    }

}

export default ToolsContainer;