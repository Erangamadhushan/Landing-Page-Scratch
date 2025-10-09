import React from 'react'
import { ArrowRight } from "lucide-react";
import services from '../data/services.js';

export const Services = () => {
    return (
        <section className="min-h-screen py-24">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-16">
                    <div className="inline-block border-l-4 border-yellow-400 pl-6 text-left">
                        <p className="text-yellow-400 text-sm font-medium mb-4 tracking-wider">OUR SERVICES</p>
                        <h2 className="text-5xl font-bold text-white mb-6">
                            What we <span className="text-yellow-400">offer.</span>
                        </h2>
                        <p className="text-neutral-400 text-lg max-w-2xl">
                            Comprehensive interior design solutions tailored to bring your vision to life with style and functionality.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-16">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-neutral-800 p-10 rounded-lg hover:bg-neutral-750 transition-all duration-300 border-l-4 border-transparent hover:border-yellow-400"
                        >
                            <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-neutral-400 text-lg leading-relaxed mb-6">
                                {service.description}
                            </p>
                            <ul className="space-y-3">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-neutral-300">
                                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="mt-6 text-yellow-400 font-medium flex items-center space-x-2 group-hover:translate-x-2 transition-transform">
                                <span>Learn more</span>
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="bg-yellow-400 rounded-lg p-12 text-center">
                    <h3 className="text-4xl font-bold text-neutral-900 mb-4">Ready to transform your space?</h3>
                    <p className="text-neutral-800 text-lg mb-8 max-w-2xl mx-auto">
                        Let's discuss your project and create something extraordinary together.
                    </p>
                    <button className="px-10 py-4 bg-neutral-900 text-yellow-400 font-medium rounded-full hover:bg-neutral-800 transition-colors" onClick={() => window.location.href = '/user/projects'}>
                        Start Your Project
                    </button>
                </div>
            </div>
        </section>
    )
}
