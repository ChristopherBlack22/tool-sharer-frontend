import React from 'react';
import ProfileToolsList from '../components/profileToolsList';
import ToolsList from '../components/toolsList';

const ToolsContainer = (props) => {
    //unable to destucture as props received are not consistent

    const filterTools = () => {
        let filteredTools;
        if(props.category) {
            const category = props.category;
            filteredTools = props.tools.filter(tool => tool.category.name === category)
        } else if(props.ownerId) {
            const ownerId = props.ownerId
            filteredTools = props.tools.filter(tool => tool.owner.id === ownerId)
        } else if(props.borrowerId) {
            const borrowerId = props.borrowerId
            filteredTools = props.tools.filter(tool => (tool.borrower && tool.borrower.id === borrowerId))
        }
        return filteredTools
    };

    if(filterTools().length === 0) {
        return (
            <div className="tools-container">
                <em>No Tools currently here</em>
            </div>
        )
    } else if(props.parentUrl === "/profile") {
        return (
            <div className="tools-container">
                <ProfileToolsList tools={filterTools()} parentUrl={props.parentUrl} />
            </div>
        )
    } else {
        return (
            <div className="tools-container">
                <ToolsList tools={filterTools()} parentUrl={props.parentUrl} />
            </div> 
        )    
    }

}

export default ToolsContainer;