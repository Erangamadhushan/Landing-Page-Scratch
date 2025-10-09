import React from 'react'
import { Send } from "lucide-react";


export const ContactForm = () => {

    const handleContactFormSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        alert('Message sent! We will get back to you soon.');
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
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-neutral-400 mb-2">Email Address</label>
                    <input
                        type="email"
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                        placeholder="john@example.com"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-neutral-400 mb-2">Phone Number</label>
                    <input
                        type="tel"
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                        placeholder="+1 (555) 000-0000"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-neutral-400 mb-2">Project Type</label>
                    <select className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors">
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
