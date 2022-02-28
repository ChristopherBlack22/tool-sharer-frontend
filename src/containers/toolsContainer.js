import React, { Component } from 'react';
import ToolsList from '../components/toolsList';

class ToolsContainer extends Component {

    // let filteredTools;
    // if (this.props.match.params) {
    //     const selectedCategory = this.props.match.params.category_name;
    //     filteredTools = this.props.tools.filter(tool => tool.category.name === selectedCategory);
    // } else if (this.props.ownerId) {
    //     filteredTools = this.props.tools.filter(tool => tool.owner.id === this.props.ownerId);
    // } else if (this.props.borrowerId){
    //     filteredTools = this.props.tools.filter(tool => tool.borrower.id === this.props.borrowerId);
    // }
    // return filteredTools;

    render() {
        const category = this.props.category;
        const filteredTools = this.props.tools.filter(tool => tool.category.name === category);
      
        return (
            <div className="tools-container">
                <ToolsList tools={filteredTools} parentUrl={this.props.parentUrl}/>
            </div>  
        )
    }

}

export default ToolsContainer;