import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { Navigate, useLocation } from 'react-router-dom';

export const Projects = () => {
    const { user } = useContext(UserContext);
    // to get previous location: const location = useLocation();
    const location = useLocation();

    console.log('Current location:', location);

    if (!user) {
        console.log('User not found, redirecting to sign-in');
        localStorage.setItem('redirectAfterLogin', location.pathname);
        return <Navigate to="/signin" />;
    }

    return (
        <div className="text-center text-yellow-400">
            <h1 className="text-4xl font-bold mb-6">Your Projects</h1>
            <p className="text-lg">This is where your projects will be displayed.</p>
        </div>
    )
}
