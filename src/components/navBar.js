import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    const link = {
        width: "100px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "black",
        textDecoration: "none",
        color: "white",
    };
    
    const activeLink = {
        background: "yellow",
        color: "black"
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
            <p>Logout goes here</p>
        </div>
    );
}

export default NavBar;