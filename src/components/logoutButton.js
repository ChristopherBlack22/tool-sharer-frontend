import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

const LogoutButton = ({logoutUser}) => {
    const history = useHistory();

    const handleOnClick = () => {
        logoutUser();
        history.push("/")
    }

    return (
        <button className="logout-button" onClick={handleOnClick} >
            Logout
        </button>
    ) 
}

const mapDispatchToProps = dispatch => {
    return {
        logoutUser: () => dispatch({type: "LOGOUT_USER"})
      }
}

export default connect(null, mapDispatchToProps)(LogoutButton);