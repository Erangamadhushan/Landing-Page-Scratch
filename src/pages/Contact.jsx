import React from 'react'
import { ArrowRight, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { Twitter, Facebook, Instagram, Youtube } from "lucide-react";

export const Contact = () => {
    return (
        <section className="min-h-screen py-24">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-16">
                    <div className="inline-block border-l-4 border-yellow-400 pl-6 text-left">
                        <p className="text-yellow-400 text-sm font-medium mb-4 tracking-wider">GET IN TOUCH</p>
                        <h2 className="text-5xl font-bold text-white mb-6">
                            Let's create <span className="text-yellow-400">together.</span>
                        </h2>
                        <p className="text-neutral-400 text-lg max-w-2xl">
                            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-8 mb-16">
                    <div className="bg-neutral-800 p-8 rounded-lg text-center hover:bg-neutral-750 transition-colors">
                        <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Phone className="text-neutral-900" size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                        <p className="text-neutral-400 mb-2">+1 (555) 123-4567</p>
                        <p className="text-neutral-400">Mon-Fri 9am-6pm</p>
                    </div>
                    <div className="bg-neutral-800 p-8 rounded-lg text-center hover:bg-neutral-750 transition-colors">
                        <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Mail className="text-neutral-900" size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                        <p className="text-neutral-400 mb-2">hello@interiordesign.com</p>
                        <p className="text-neutral-400">info@interiordesign.com</p>
                    </div>
                    <div className="bg-neutral-800 p-8 rounded-lg text-center hover:bg-neutral-750 transition-colors">
                        <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                            <MapPin className="text-neutral-900" size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                        <p className="text-neutral-400 mb-2">123 Design Street</p>
                        <p className="text-neutral-400">New York, NY 10001</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                    <div className="bg-neutral-800 p-10 rounded-lg">
                        <h3 className="text-3xl font-bold text-white mb-8">Send us a message</h3>
                        <form className="space-y-6">
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
                    </div>
                    <div className="bg-neutral-800 p-10 rounded-lg">
                        <h3 className="text-3xl font-bold text-white mb-8">Office Hours</h3>
                        <div className="space-y-6 mb-8">
                            <div className="flex items-start space-x-4">
                                <Clock className="text-yellow-400 mt-1" size={24} />
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-2">Business Hours</h4>
                                    <p className="text-neutral-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
                                    <p className="text-neutral-400">Saturday: 10:00 AM - 4:00 PM</p>
                                    <p className="text-neutral-400">Sunday: Closed</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-neutral-900 p-6 rounded-lg mb-8">
                            <h4 className="text-lg font-semibold text-white mb-4">Visit Our Showroom</h4>
                            <p className="text-neutral-400 mb-4">
                                Experience our design expertise firsthand. Visit our showroom to see our latest projects and meet our team.
                            </p>
                            <button className="text-yellow-400 font-medium flex items-center space-x-2 hover:translate-x-2 transition-transform">
                                <span>Get Directions</span>
                                <ArrowRight size={18} />
                            </button>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-neutral-900 text-white transition-colors">
                                    <Twitter size={20} />
                                </a>
                                <a href="#" className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-neutral-900 text-white transition-colors">
                                    <Facebook size={20} />
                                </a>
                                <a href="#" className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-neutral-900 text-white transition-colors">
                                    <Instagram size={20} />
                                </a>
                                <a href="#" className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-neutral-900 text-white transition-colors">
                                    <Youtube size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
