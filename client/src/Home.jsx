import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="Create LandingHome" style={{margin:'10rem'}}>
            <h1>Homepage</h1>
            <button><Link to='/login'>Login</Link></button>
            <h1>LifeBoard – A Beautiful & Interactive Personal Dashboard Website</h1>
    
            <h2>Introduction</h2>
<p>Welcome to <strong>LifeBoard</strong> — your all-in-one personal productivity and lifestyle dashboard. From tracking daily habits and screen time to managing finances, emails, calendars, and todos — LifeBoard seamlessly brings together everything you need to stay on top of your day.</p>

<h2>Key Features</h2>

<h3> Habit & Screen Time Tracker</h3>
<ul>
    <li>Track your screen usage across devices and monitor digital wellbeing.</li>
    <li>Set daily or weekly goals to build positive habits.</li>
    <li>Visualize your progress with intuitive charts.</li>
</ul>

<h3> Finance Overview</h3>
<ul>
    <li>Log your daily expenses and categorize them for better budgeting.</li>
    <li>Track investments and stock watchlists all in one place.</li>
    <li>Real-time insights into your spending habits and financial trends.</li>
</ul>

<h3> Mails & Communication</h3>
<ul>
    <li>Centralized inbox view for all your linked email accounts.</li>
    <li>Quick actions like archiving, flagging, or deleting from the dashboard.</li>
</ul>

<h3> Calendar & Scheduling</h3>
<ul>
    <li>Integrated calendar to view and manage your events, deadlines, and reminders.</li>
    <li>Syncs with Google Calendar or iCal for real-time updates.</li>
</ul>

<h3> Robust Todo System (Server-Side)</h3>
<ul>
    <li>Create, edit, and delete tasks with full backend support for reliability.</li>
    <li>Todos persist across sessions and devices thanks to server-side architecture.</li>
    <li>Organize tasks with categories, due dates, and priority flags.</li>
</ul>

<h3> Notes & Quick Thoughts</h3>
<ul>
    <li>Maintain personal notes for ideas, logs, or important information.</li>
    <li>Color-coded sticky notes and rich text support.</li>
</ul>

<h2>User Experience & Design</h2>
<ul>
    <li>Clean and modern UI focused on productivity.</li>
    <li>Fully responsive design — works flawlessly on phones, tablets, and desktops.</li>
    <li>Dark/light theme toggle for comfortable use anytime.</li>
</ul>

<h2>Why LifeBoard?</h2>
<p><strong>LifeBoard</strong> isn’t just another dashboard — it's a command center for your day. Whether you're managing your time, finances, or to-dos, LifeBoard brings everything together into a smart, efficient experience that actually helps you get things done.</p>

<p> Start taking control of your life today — one dashboard to rule them all!</p>
</div>
    );
}

export default Home;