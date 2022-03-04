import React from 'react';
import UpdateButton from './updateButton';
import DeleteButton from './deleteButton';

const Tool = ({match, tools, currentUserId}) => {

    const tool = tools.find(tool => tool.id === parseInt(match.params.tool_id));
    return (
        <div className="tool" >
            <h2>{tool.name}</h2>
            <p>{tool.description}</p>
            <img src={tool.image_url} alt={tool.name} width="280" />
            {tool.owner.id === currentUserId ? <p>Owner: You</p> : <p>Owner: {tool.owner.username}</p>}
            {tool.borrower ? <p>Currently Unavailable</p> : <p>Currently Available</p> }
            {(tool.borrower && tool.borrower.id === currentUserId) ? <p><small>This Tool is with You</small></p> : null }
            <UpdateButton tool={tool} currentUserId={currentUserId} />
            <DeleteButton tool={tool} currentUserId={currentUserId} />
        </div>
    )

}

export default Tool;