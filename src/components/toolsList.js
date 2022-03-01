import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ToolsList extends Component {

    render() {
        const toolList = this.props.tools.map(tool => {
            let availability;
            if(tool.borrower) {
                availability = <span className="available">Unavailable</span>;
            } else {
                availability = <span className="unavailable">Available</span>;
            }
            return(
                <li key={tool.id} >
                    <Link key={tool.id} to={`${this.props.parentUrl}/${tool.id}`}>
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

}

export default ToolsList;