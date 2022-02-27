import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ToolsContainer extends Component {

    // let selectedTools;
    // if (this.props.match.params) {
    //     const selectedCategory = this.props.match.params.category_name;
    //     selectedTools = this.props.tools.filter(tool => tool.category.name === selectedCategory);
    // } else if (this.props.ownerId) {
    //     selectedTools = this.props.tools.filter(tool => tool.owner.id === this.props.ownerId);
    // } else if (this.props.borrowerId){
    //     selectedTools = this.props.tools.filter(tool => tool.borrower.id === this.props.borrowerId);
    // }
    // return selectedTools;

    selectTools = () => {
        let selectedTools;
        const selectedCategory = this.props.category;
        selectedTools = this.props.tools.filter(tool => tool.category.name === selectedCategory);
        return selectedTools;
    }


    createToolList = () => {
        const selectedTools = this.selectTools();
        const toolList = selectedTools.map(tool => {
            return (
                <li>
                    {tool.name}
                </li>
            )
        });
        return toolList;
    }


    render() {
        const toolList = this.createToolList();

        return (
            <div className="tools-container">
                <ul>
                    {toolList}
                </ul>   
            </div>
        )
        //move into Tool List component
    }

}


export default ToolsContainer;