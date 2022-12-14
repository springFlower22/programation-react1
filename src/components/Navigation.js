import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/" activeClassName='nav-active'>
                Categories
            </NavLink>
            <NavLink exact to="/clues" activeClassName='nav-active'>
                Clues
            </NavLink>
        </div>
    )
}

export default Navigation;