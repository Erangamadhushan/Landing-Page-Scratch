import React from 'react'
import { Twitter, Facebook, Instagram, Youtube } from "lucide-react";

export const SocialMedia = () => {
    return (
        <div className="fixed left-6 top-1/2 -translate-y-1/2 flex flex-col space-y-6 z-100">
            <a href="#" className="text-yellow-400 hover:text-primary transition-colors">
                <Twitter className="h-6 w-6 hover:fill-yellow-800" />
            </a>
            <a href="#" className="text-yellow-400 hover:text-primary transition-colors">
                <Facebook className="h-6 w-6 hover:fill-yellow-800" />
            </a>
            <a href="#" className="text-yellow-400 hover:text-primary transition-colors">
                <Instagram className="h-6 w-6 hover:fill-yellow-800" />
            </a>
            <a href="#" className="text-yellow-400 hover:text-primary transition-colors">
                <Youtube className="h-6 w-6 hover:fill-yellow-800" />
            </a>
        </div>
    )
}
