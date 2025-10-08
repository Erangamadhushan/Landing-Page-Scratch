import React from 'react'
import main_img_1 from '../../../assets/main_img_1.jpg';
import main_img_2 from '../../../assets/main_img_2.jpg';

export const RightImage = () => {
    return (
        <div className="relative">
            {/* Decorative Circle */}
            <div className="absolute -top-20 -right-20 w-96 h-96 border border-muted rounded-full opacity-20"></div>

            <div className="grid grid-cols-2 gap-6 relative z-10">
                <div className="space-y-6">
                    <img
                        src={main_img_1}
                        alt="Interior design showcase"
                        className="w-full h-80 object-cover"
                    />
                </div>
                <div className="space-y-6 pt-12">
                    <img
                        src={main_img_2}
                        alt="Interior design showcase"
                        className="w-full h-80 object-cover"
                    />
                    <img
                        src={main_img_1}
                        alt="Interior design showcase"
                        className="w-full h-60 object-cover"
                    />
                </div>
            </div>

            {/* Yellow Accent Block */}
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-primary opacity-90 -z-10"></div>
        </div>
    )
}
