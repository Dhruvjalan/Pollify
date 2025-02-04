import React from 'react';
import { useParams } from "react-router-dom";


const UserHome = () => {
    const {user} = useParams()
    // const user="Dhruv"
    

    return (
        <div>
            <header>
                <h1>Welcome to {user} Home</h1>
            </header>
            <main>
                <p>This is the user home page.</p>
            </main>
            <footer>
                <p>&copy; 2023 Your Company</p>
            </footer>
        </div>
    );
};

export default UserHome;