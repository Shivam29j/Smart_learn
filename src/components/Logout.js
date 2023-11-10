import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from "./firebase.js";
import './css/logout.css'; // Replace with the path to your logout.css file
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        const user = auth.currentUser;

        // Check if a user is signed in before attempting to delete
        if (user) {
            // Delete the user permanently from Firebase Authentication
            user.delete().then(() => {
                // Logout successful
                alert('logout Successful');
                navigate("/");
            }).catch((error) => {
                // An error happened while logging out
                console.error('Error logging out:', error);
            });
        } else {
            // If no user is signed in, simply sign out without deleting
            signOut(auth).then(() => {
                // Logout successful
                alert('logout Successful');
                navigate("/");
            }).catch((error) => {
                // An error happened while logging out
                console.error('Error logging out:', error);
            });
        }
    };

    return (
        <div className="logout-container">
            <h1>Logout Page</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;
