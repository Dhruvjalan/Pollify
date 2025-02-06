import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="Create LandingHome">
            <h1>Homepage</h1>
            <p>Welcome to Pollify!</p>
            <button><Link to='/login'>Login</Link></button>
            <button><Link to='/register'>Register</Link></button>
        </div>
    );
}

export default Home;