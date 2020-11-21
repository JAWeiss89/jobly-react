import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="Nav">
            <div className="Nav-home">
                <Link to="/">Home</Link>
            </div>
            {localStorage._token ? 
                <div className="Nav-links">
                    <Link to="/companies">Companies</Link>
                    <Link to="/jobs">Jobs</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/logout">Logout</Link>
                </div>
            :
                <div className="Nav-links">
                    <Link to="/login">Login</Link>
                </div>}


        </div>
    )
}

export default Nav;