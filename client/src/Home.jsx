import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="Create LandingHome">
            <h1>Homepage</h1>
            <p>Welcome to Pollify!</p>
            <button><Link to='/login'>Login</Link></button>
            <button><Link to='/register'>Register</Link></button>
            <h1>Polllify – A Beautiful & Interactive Polling Website</h1>
    
    <h2>Introduction</h2>
    <p>Polllify is a dynamic and engaging polling platform where users can create, participate in, and explore polls seamlessly. Designed with a sleek and interactive UI, the website encourages open discussions and data-driven insights through real-time statistics and sharing capabilities.</p>
    
    <h2>Key Features</h2>
    
    <h3>Create & Manage Polls</h3>
    <ul>
        <li>Users can post their own polls effortlessly with customizable options.</li>
        <li>Ability to delete polls when they are no longer relevant.</li>
        <li>Live updates on poll participation.</li>
    </ul>
    
    <h3>Real-Time Poll Statistics</h3>
    <ul>
        <li>Once a user votes, they gain access to detailed analytics of the poll.</li>
        <li>Visual data representation (graphs, charts) to showcase voting trends.</li>
    </ul>
    
    <h3>Search & Discover Polls</h3>
    <ul>
        <li>A smart search feature allows users to find polls based on keywords or categories.</li>
        <li>Users can browse trending polls for popular discussions.</li>
    </ul>
    
    <h3>Participate & Engage</h3>
    <ul>
        <li>Vote on polls with a single click.</li>
        <li>Option to add comments or discuss poll topics.</li>
    </ul>
    
    <h3>Share Polls Easily</h3>
    <ul>
        <li>Share polls via social media, email, or direct links.</li>
        <li>Embed polls on external websites for wider participation.</li>
        <li>You can also share the unique poll-ids and let you friends participate in polls.</li>
    </ul>
    
    <h2>User Experience & Design</h2>
    <ul>
        <li>Minimalist and modern UI, making navigation smooth.</li>
        <li>Mobile-responsive design ensures accessibility across devices.</li>
    </ul>
    
    <h2>Why Polllify?</h2>
    <p>Polllify is more than just a polling site—it's a platform for opinions, discussions, and insights. Whether you're conducting a survey, gathering feedback, or just curious about public opinion, Polllify makes it easy, engaging, and fun!</p>
    
    <p>🚀 Join the conversation, create your poll, and make your voice heard today!</p>
        </div>
    );
}

export default Home;