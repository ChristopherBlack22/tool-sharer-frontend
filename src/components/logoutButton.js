import React, { Component } from 'react';
import { connect } from 'react-redux';

class LogoutButton extends Component {

    handleOnClick = () => {
        this.props.logoutUser()
    }

    render() {
        return (
            <button className="logout-button" onClick={this.handleOnClick} >
                Logout
            </button>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logoutUser: () => dispatch({type: "LOGOUT_USER"})
      }
}

export default connect(null, mapDispatchToProps)(LogoutButton);