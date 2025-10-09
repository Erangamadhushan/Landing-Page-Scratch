import React from 'react'
import { Twitter, Facebook, Instagram, Youtube } from "lucide-react";

export const SocialmediaLinks = () => {
    return (
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
    )
}
