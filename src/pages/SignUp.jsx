import React from 'react'
import { useState, useEffect } from 'react';

export const SignUp = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSignUpFormSubmition = (e) => {
        e.preventDefault();
    }
    return (
        <div className='bg-black text-yellow-400 p-8 rounded-lg shadow-lg max-w-md w-full'>
            <h1 className='text-3xl font-bold text-yellow-400 text-center'>Sign Up Page</h1>
            <form className="space-y-4 w-full max-w-md bg-black text-yellow-400 p-8 rounded-lg shadow-lg mt-6" onSubmit={handleSignUpFormSubmition}>
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
                        placeholder="Create a password"
                        required
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label className="block mb-2">Confirm Password</label>
                    <input type="password"
                        className="w-full p-3 rounded bg-neutral-800 border border-yellow-400 text-yellow-400"
                        placeholder="Confirm your password"
                        required
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit" className="w-full p-3 rounded bg-yellow-400 text-neutral-900 hover:bg-yellow-500 transition-colors">Sign Up</button>
            </form>
            <div>
                <p className="mt-4 text-sm text-center text-neutral-400">
                    Already have an account? <a href="/Landing-Page-Scratch/signin" className="text-yellow-400 hover:underline">Sign In</a>
                </p>
            </div>
        </div>
    )
}
