import React, { Component } from 'react';

class Tool extends Component {

    findTool = () => {
        let tool;
        tool = this.props.tools.find(tool => tool.id === parseInt(this.props.match.params.tool_id));
        return tool;
    }

    render() {
        
        const tool = this.findTool();
        
        return (
            <div className="tool" >
                <h2>{tool.name}</h2>
                <p>{tool.description}</p>
                <img src={tool.image_url} alt={tool.name} width="280" />
                <p>Owner: {tool.owner.username}</p>
                {tool.borrower ? <p>Currently Unavailable</p> : <p>Available</p> }
            </div>
        )
        //render a button if available that allows the user to take the item (update borrower)
    }

}

export default Tool;