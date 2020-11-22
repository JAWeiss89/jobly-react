import React from 'react';
import { Link } from 'react-router-dom';

const Home = ( {user} ) => {
    return (
    <div className="Home">
        <h1>Jobly</h1>
        <p>All the jobs in one, convenient place.</p>
        {user ? 
        <div>
            <p>Welcome Back!</p>
        </div>
        :
        <Link to="/login"><button>Log In</button></Link>
        }
    </div>
    )
}
    

export default Home;
