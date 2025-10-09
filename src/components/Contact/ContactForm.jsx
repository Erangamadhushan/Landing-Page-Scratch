import React, { useState } from 'react'
import { Send } from "lucide-react";


export const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        projectType: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleContactFormSubmit = (e) => {
        e.preventDefault();
        
        // Handle form submission logic here (e.g., send data to an API)
        if(formData.fullName && formData.email && formData.phone){
            alert('Thank you for reaching out! We will get back to you soon.');
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                projectType: '',
                message: ''
            });
        } else {
            alert('Please fill in all required fields with valid information.');
        }

        
    }

    return (
        <>
            <form className="space-y-6" onSubmit={handleContactFormSubmit}>
                <div>
                    <label className="block text-sm font-medium text-neutral-400 mb-2">Full Name</label>
                    <input
                        type="text"
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                        placeholder="John Doe"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        pattern="^[a-zA-Z\s\-'.]+$"
                        required
                    />
                    <p className="mt-2 text-sm text-red-800 invisible peer-invalid:visible  ">Enter valid name</p>
                </div>
                <div>
                    <label className="block text-sm font-medium text-neutral-400 mb-2">Email Address</label>
                    <input
                        type="email"
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                        placeholder="john@example.com"
                        name='email'
                        value={formData.email}
                        onChange={handleInputChange}
                        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                        required
                    />
                    <p className="mt-2 text-sm text-red-800 invisible peer-invalid:visible  ">Enter valid email address</p>
                </div>
                <div>
                    <label className="block text-sm font-medium text-neutral-400 mb-2">Phone Number</label>
                    <input
                        type="tel"
                        className="w-full px-4 py-3 bg-neutral-900 border peer border-neutral-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                        placeholder="+1 (555) 000-0000"
                        name='phone'
                        value={formData.phone}
                        onChange={handleInputChange}
                        pattern="^\+?[1-9]\d{1,14}$"
                        required
                    />
                    <p className="mt-2 text-sm text-red-800 invisible peer-invalid:visible  ">Enter valid phone number</p>
                </div>
                <div>
                    <label className="block text-sm font-medium text-neutral-400 mb-2">Project Type</label>
                    <select className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors" name='projectType' value={formData.projectType} onChange={handleInputChange}>
                        <option>Interior Design</option>
                        <option>Residential Design</option>
                        <option>Commercial Design</option>
                        <option>Renovation</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-neutral-400 mb-2">Message</label>
                    <textarea
                        rows={4}
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                        placeholder="Tell us about your project..."
                        name='message'
                        value={formData.message}
                        onChange={handleInputChange}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full px-8 py-4 bg-yellow-400 text-neutral-900 font-medium rounded-lg hover:bg-yellow-300 transition-colors flex items-center justify-center space-x-2"
                >
                    <span>Send Message</span>
                    <Send size={18} />
                </button>
            </form>
        </>
    )
}
