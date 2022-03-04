import React from 'react';
import { Link } from 'react-router-dom';

const ToolsList = ({tools, parentUrl}) => {
   
    const toolList = tools.map(tool => {
        let availability;
        if(tool.borrower) {
            availability = <span className="available">Unavailable</span>;
        } else {
            availability = <span className="unavailable">Available</span>;
        }
        return(
            <li key={tool.id} className="tools-list-item">
                <Link key={tool.id} to={`${parentUrl}/${tool.id}`}>
                    {tool.name} - {availability}
                </Link>
            </li>
        )
    })

    return (
        <div className="tools-list">
            {toolList}
        </div>
    )

}

export default ToolsList;