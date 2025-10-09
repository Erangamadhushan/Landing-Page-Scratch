import React from 'react'
import { SocialMedia } from './HeroSection/SocialMedia'
import { MainContent } from './HeroSection/MainContent'

export const HeroSection = () => {
  return (
    <div className="relative z-0 bg-black text-yellow-400 min-h-[80vh] flex items-center justify-center">
      <SocialMedia />
      <MainContent />
    </div>
  )
}
