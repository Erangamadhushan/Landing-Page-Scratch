import React from 'react'
import { SocialMedia } from './HeroSection/SocialMedia'
import { MainContent } from './HeroSection/MainContent'

export const HeroSection = () => {
  return (
    <div className="relative">
      <SocialMedia />
      <MainContent />
    </div>
  )
}
