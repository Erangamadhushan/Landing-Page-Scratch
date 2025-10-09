import React from 'react'
import { Phone, Mail, MapPin } from "lucide-react";

export const ContactDetailsCards = () => {
    return (
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
                <p className="text-neutral-400 mb-2">contact@interiordesign.com</p>
                <p className="text-neutral-400">contact@interiordesign.com</p>
            </div>
            <div className="bg-neutral-800 p-8 rounded-lg text-center hover:bg-neutral-750 transition-colors">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="text-neutral-900" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                <p className="text-neutral-400 mb-2">123 Main Street</p>
                <p className="text-neutral-400">Rajagiriya, Colombo 8</p>
            </div>
        </div>
    )
}
