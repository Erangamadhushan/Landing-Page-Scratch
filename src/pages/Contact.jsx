import React from 'react'
import { ArrowRight, Clock} from "lucide-react";


import { ContactHeroContent } from '../components/Contact/ContactHeroContent';
import { ContactForm } from '../components/Contact/ContactForm';
import { ContactDetailsCards } from '../components/Contact/ContactDetailsCards';
import { SocialmediaLinks } from '../components/Contact/SocialmediaLinks';

export const Contact = () => {
    return (
        <section className="min-h-screen py-24">
            <div className="max-w-7xl mx-auto px-8">
                <ContactHeroContent />

                <ContactDetailsCards />

                <div className="grid grid-cols-2 gap-8">
                    <div className="bg-neutral-800 p-10 rounded-lg">
                        <h3 className="text-3xl font-bold text-white mb-8">Send us a message</h3>
                        
                        <ContactForm />
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
                        
                        <SocialmediaLinks />
                    </div>
                </div>
            </div>
        </section>

    )
}
