import React from 'react'
import { useState, useEffect } from 'react';
import { ArrowRight } from "lucide-react";
import blogPosts from '../data/blogPosts';
import { useNavigate } from 'react-router-dom';

export const Blog = () => {
    const [blogPostsCount, setBlogPostsCount] = useState(3);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setBlogPostsCount(3);
    }, []);

    const loadMoreArticles = () => {
        if(blogPostsCount < blogPosts.length) {
            setBlogPostsCount(prevCount => prevCount + 3);
        }
        else if(blogPostsCount + 3 >= blogPosts.length) {
            alert('No more articles to load.');
            setLoading(true);
        }
        else {
            setBlogPostsCount(blogPosts.length);
            setLoading(true);
            alert('No more articles to load.');
        }
    }

    return (
        <section className="min-h-screen py-24">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-16">
                    <div className="inline-block border-l-4 border-yellow-400 pl-6 text-left">
                        <p className="text-yellow-400 text-sm font-medium mb-4 tracking-wider">OUR BLOG</p>
                        <h2 className="text-5xl font-bold text-white mb-6">
                            Latest <span className="text-yellow-400">insights.</span>
                        </h2>
                        <p className="text-neutral-400 text-lg max-w-2xl">
                            Explore design trends, tips, and inspiration from our team of expert interior designers.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-8">
                    {blogPosts.slice(0, blogPostsCount).map((post, index) => (
                        <article
                            key={index}
                            className="group bg-neutral-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute top-4 left-4 px-4 py-2 bg-yellow-400 text-neutral-900 text-xs font-semibold rounded-full">
                                    {post.category}
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-neutral-400 text-sm mb-3">
                                    {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                </p>
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-neutral-400 mb-4 leading-relaxed">
                                    {post.excerpt}
                                </p>
                                <button className="text-yellow-400 font-medium flex items-center space-x-2 group-hover:translate-x-2 transition-transform" onClick={() => navigate(`/Landing-Page-Scratch/blog/${post.id}`)}>
                                    <span>Read more</span>
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="px-10 py-4 border-2 border-yellow-400 cursor-pointer text-yellow-400 font-medium rounded-full hover:bg-yellow-400 hover:text-neutral-900 transition-all" disabled={loading} onClick={loadMoreArticles}>
                        Load More Articles
                    </button>
                </div>
            </div>
        </section>
    )
}
