import React from 'react'
import { Send } from "lucide-react";

const navigation = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About us', icon: Info },
    { id: 'services', label: 'Services', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
    { id: 'blog', label: 'Blog', icon: BookOpen },
];

export const Footer = () => {
    return (
        <footer className="bg-black border-t border-neutral-800 py-12">
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-4 gap-8 mb-8">
                    <div>
                        <h4 className="text-white font-bold text-lg mb-4">Interior Design Agency</h4>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            Creating beautiful spaces that inspire and transform the way you live.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {navigation.map((item) => (
                                <li key={item.id}>
                                    <button
                                        onClick={() => setActiveSection(item.id)}
                                        className="text-neutral-400 hover:text-yellow-400 text-sm transition-colors"
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Services</h4>
                        <ul className="space-y-2 text-neutral-400 text-sm">
                            <li className="hover:text-yellow-400 transition-colors cursor-pointer">Interior Design</li>
                            <li className="hover:text-yellow-400 transition-colors cursor-pointer">Residential Design</li>
                            <li className="hover:text-yellow-400 transition-colors cursor-pointer">Commercial Design</li>
                            <li className="hover:text-yellow-400 transition-colors cursor-pointer">Renovation</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Newsletter</h4>
                        <p className="text-neutral-400 text-sm mb-4">Subscribe to our newsletter for design tips and updates.</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-l-lg text-white text-sm focus:outline-none focus:border-yellow-400"
                            />
                            <button className="px-4 py-2 bg-yellow-400 text-neutral-900 rounded-r-lg hover:bg-yellow-300 transition-colors">
                                <Send size={18} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="border-t border-neutral-800 pt-8 flex justify-between items-center">
                    <p className="text-neutral-400 text-sm">© 2025 Interior Design Agency. All rights reserved.</p>
                    <div className="flex space-x-6 text-neutral-400 text-sm">
                        <a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-yellow-400 transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
