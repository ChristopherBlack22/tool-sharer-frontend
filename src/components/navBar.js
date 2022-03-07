import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './logoutButton';

const NavBar = () => {

    const link = {
        position: "relative",
        top: "2px",
        width: "100px",
        padding: "10px 25px",
        margin: "0 6px 6px 6px",
        background: "rgb(23, 23, 23)",
        textDecoration: "none",
        color: "white",
    };
    
    const activeLink = {
        color: "rgb(248, 248, 50)",
        borderColor: "rgb(156, 174, 0)",
    };
    
    return (
        <div className="nav-bar">
            <NavLink to="/" exact
                style={ link }
                activeStyle={ activeLink }
            >Home</NavLink>
            <NavLink to="/profile" exact
                style={ link }
                activeStyle={ activeLink }
            >Profile</NavLink>
            <LogoutButton/>
        </div>
    );
}

export default NavBar;