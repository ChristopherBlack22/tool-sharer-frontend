import React, { Component } from 'react';
import { updateTool } from '../actions/categoriesAndTools';
import { connect } from 'react-redux';

class UpdateButton extends Component {

    handleOnClick = () => {
        let newBorrowerId;
        if(this.props.tool.borrower) {
            newBorrowerId = null
        } else {
            newBorrowerId = this.props.currentUserId
        }
        this.props.updateTool({
            tool: {
                id: this.props.tool.id,
                borrower_id: newBorrowerId
            }
        })
    }

    render() {
        // let {tool, currentUserId} = this.state;
        // debugger
        if(this.props.tool.borrower && this.props.tool.borrower.id === this.props.currentUserId) {
            return (
                <button onClick={this.handleOnClick} >Return Tool</button>
            )
        } else if(!this.props.tool.borrower && this.props.tool.owner.id !== this.props.currentUserId) {
            return (
                <button onClick={this.handleOnClick} >Borrow Tool</button>
            )
        } else {
            return null
        }
    }

}

const mapDispatchToProps = dispatch => {
    return {
        updateTool: (toolData) => dispatch(updateTool(toolData))
      }
}

export default connect(null, mapDispatchToProps)(UpdateButton);