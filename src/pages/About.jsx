import React from 'react'

export const About = () => {
    return (
        <section className="min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-8 py-16">
                <div className="grid grid-cols-2 gap-16 items-center mb-20">
                    <div className="grid grid-cols-2 gap-6">
                        <img
                            src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="About 1"
                            className="w-full h-96 object-cover rounded-lg"
                        />
                        <img
                            src="https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="About 2"
                            className="w-full h-96 object-cover rounded-lg mt-12"
                        />
                    </div>
                    <div>
                        <div className="border-l-4 border-yellow-400 pl-6">
                            <p className="text-yellow-400 text-sm font-medium mb-4 tracking-wider">ABOUT US</p>
                            <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
                                Creating spaces that <span className="text-yellow-400">inspire living.</span>
                            </h2>
                            <p className="text-neutral-400 text-lg leading-relaxed mb-6">
                                With over 15 years of experience in interior design, we transform ordinary spaces into extraordinary experiences. Our team of passionate designers brings creativity, expertise, and attention to detail to every project.
                            </p>
                            <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                                We believe that great design is more than aesthetics. It's about creating environments that enhance the way you live, work, and feel. Every project is a unique journey, and we're here to guide you through it.
                            </p>
                            <div className="grid grid-cols-3 gap-8">
                                <div>
                                    <h3 className="text-4xl font-bold text-yellow-400 mb-2">500+</h3>
                                    <p className="text-neutral-400">Projects Completed</p>
                                </div>
                                <div>
                                    <h3 className="text-4xl font-bold text-yellow-400 mb-2">50+</h3>
                                    <p className="text-neutral-400">Awards Won</p>
                                </div>
                                <div>
                                    <h3 className="text-4xl font-bold text-yellow-400 mb-2">15+</h3>
                                    <p className="text-neutral-400">Years Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-8">
                    <div className="bg-neutral-800 p-8 rounded-lg border-t-4 border-yellow-400">
                        <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                        <p className="text-neutral-400 leading-relaxed">
                            To be the leading interior design agency that sets new standards in creativity, sustainability, and client satisfaction worldwide.
                        </p>
                    </div>
                    <div className="bg-neutral-800 p-8 rounded-lg border-t-4 border-yellow-400">
                        <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                        <p className="text-neutral-400 leading-relaxed">
                            To create inspiring spaces that enhance lives through innovative design, sustainable practices, and exceptional service.
                        </p>
                    </div>
                    <div className="bg-neutral-800 p-8 rounded-lg border-t-4 border-yellow-400">
                        <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
                        <p className="text-neutral-400 leading-relaxed">
                            Creativity, integrity, sustainability, and client-focused excellence drive everything we do.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

