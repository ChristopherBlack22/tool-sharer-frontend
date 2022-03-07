import React from 'react';
import { updateTool } from '../actions/tools';
import { connect } from 'react-redux';

const UpdateButton = ({tool, currentUserId, updateTool}) => {

    const handleOnClick = () => {
        let newBorrowerId;
        //toggle between null and currentUserId
        if(tool.borrower) {
            newBorrowerId = null
        } else {
            newBorrowerId = currentUserId
        }
        updateTool({
            tool: {
                id: tool.id,
                borrower_id: newBorrowerId
            }
        });
    }

    if(tool.borrower && tool.borrower.id === currentUserId) {
        return (
            <button className="update-button" onClick={handleOnClick} >Return Tool</button>
        )
    } else if(!tool.borrower && tool.owner.id !== currentUserId) {
        return (
            <button className="update-button" onClick={handleOnClick} >Borrow Tool</button>
        )
    } else {
        return null
    }

}

const mapDispatchToProps = dispatch => {
    return {
        updateTool: (toolData) => dispatch(updateTool(toolData))
      }
}

export default connect(null, mapDispatchToProps)(UpdateButton);