import React, { Component } from 'react';
import UpdateButton from './updateButton';

class Tool extends Component {

    findTool = () => {
        let tool;
        tool = this.props.tools.find(tool => tool.id === parseInt(this.props.match.params.tool_id));
        return tool;
    }

    // handleOnClick = () => {
    //     const toolId = this.props.match.params.tool_id;
    //     this.props.updateTool({tool})
    // }

    render() {
        
        const tool = this.findTool();
        
        return (
            <div className="tool" >
                <h2>{tool.name}</h2>
                <p>{tool.description}</p>
                <img src={tool.image_url} alt={tool.name} width="280" />
                {tool.owner.id === this.props.currentUserId ? <p>Owner: You</p> : <p>Owner: {tool.owner.username}</p>}
                {tool.borrower ? <p>Currently Unavailable</p> : <p>Currently Available</p> }
                {(tool.borrower && tool.borrower.id === this.props.currentUserId) ? <p><small>This Tool is with You</small></p> : null }
                {/* {(tool.borrower && tool.borrower.id === this.props.currentUserId) ? <div><small>You are borrowing this Tool</small><br/><br/><button onClick={this.handleOnClick} >Return Tool</button></div> : null } */}
                {/* {(!tool.borrower && tool.owner.id !== this.props.currentUserId) ? <button onClick={this.handleOnClick} >Borrow Tool</button> : null } */}
                <UpdateButton tool={tool} currentUserId={this.props.currentUserId} />
            </div>
        )
    }

}

export default Tool;