import React from 'react';
import { deleteTool } from '../actions/categoriesAndTools';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

const DeleteButton = ({tool, currentUserId, parentUrl, deleteTool}) => {
    const history = useHistory();
    const handleOnClick = () => {
        deleteTool(tool.id);
        if(parentUrl !== "/profile") {
            history.push(`/${tool.category.name}/tools`)
        }
    }

    if (tool.owner.id === currentUserId) {
        return (
            <button className="delete-button" onClick={handleOnClick} >Remove Tool</button>
        )
    } else {
        return null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteTool: (toolId) => dispatch(deleteTool(toolId))
    }
}

export default connect(null, mapDispatchToProps)(DeleteButton);