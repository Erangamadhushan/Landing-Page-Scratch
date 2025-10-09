import React from 'react'
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Navigate } from 'react-router-dom';

export const SignIn = () => {
    const { user, login } = useContext(UserContext);

    useEffect(() => {
        document.title = "Sign In - DevConnector";
    }, []);

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }
    const handleSignInFormSubmition = (e) => {
        e.preventDefault();
        if (formData.email && formData.password) {
            alert('Sign In Successful!');
            setFormData({
                email: '',
                password: ''
            });
            // Redirect to the previous location or default to home
            const redirectPath = localStorage.getItem('redirectAfterLogin') || '/Landing-Page-Scratch/';
            if (redirectPath && redirectPath === '/Landing-Page-Scratch/user')
                login({ email: formData.email, name: "John Doe" });
            else
                login({ email: formData.email, name: "Guest User" });
            localStorage.removeItem('redirectAfterLogin');
            return window.location.href = redirectPath;
        } else {
            alert('Please fill in all required fields with valid information.');
        }
    }
    return (
        <div className="bg-black text-yellow-400 p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
            <form className="space-y-4" onSubmit={handleSignInFormSubmition}>
                <div>
                    <label className="block mb-2">Email</label>
                    <input type="email" 
                    className="w-full p-3 rounded bg-neutral-800 border border-yellow-400 text-yellow-400" 
                    placeholder="Enter your email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange} 
                    />
                </div>
                <div>
                    <label className="block mb-2">Password</label>
                    <input type="password" 
                    className="w-full p-3 rounded bg-neutral-800 border border-yellow-400 text-yellow-400" 
                    placeholder="Enter your password" 
                    required
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    />
                </div>
                <button type="submit" className="w-full p-3 rounded bg-yellow-400 text-neutral-900 hover:bg-yellow-500 transition-colors">Sign In</button>
            </form>
            <div>
                <p className="mt-4 text-sm text-center text-neutral-400">
                    Don't have an account? <a href="/Landing-Page-Scratch/signup" className="text-yellow-400 hover:underline">Sign Up</a>
                </p>
            </div>
        </div>
    )
}
