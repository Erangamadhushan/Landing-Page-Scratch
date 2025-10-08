import React from 'react'
import { RightImage } from './RightImage'
import { LeftContent } from './LeftContent'

export const MainContent = () => {
    return (
        <div className="container max-w-7xl mx-auto px-6 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <LeftContent />

                {/* Right Images */}
                <RightImage />
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center space-x-3 mt-16">
                <button className="w-3 h-3 rounded-full bg-primary"></button>
                <button className="w-3 h-3 rounded-full bg-muted hover:bg-primary transition-colors"></button>
            </div>
        </div>
    )
}
