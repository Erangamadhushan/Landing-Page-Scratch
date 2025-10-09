import React from 'react'
import { useParams } from 'react-router-dom'
import blogPosts from '../data/blogPosts';

export const ReadBlogPost = () => {
    const { post } = useParams();
    const blogPost = blogPosts.find(p => p.id === parseInt(post));
    if (!blogPost) {
        return <div className='text-3xl font-bold text-yellow-400 flex items-center justify-center h-screen'>Blog post not found</div>;
    }
    return (
        <div className='max-w-7xl grid grid-cols-1 md:grid-cols-2 mx-auto p-8 bg-neutral-900 rounded-lg my-16'>
            <div>
                <h1 className='text-4xl font-bold text-white'>{blogPost.title}</h1>
                <p className='text-neutral-400'>{blogPost.date}</p>
                <img src={blogPost.image} alt={blogPost.title} className='my-4' />
                <p className='text-neutral-400'>{blogPost.excerpt}</p>
            </div>
            <div className='mt-8 py-10 px-5'>
                <h2 className='text-2xl font-bold text-white mb-4'>Full Article</h2>
                <p className='text-neutral-400'>{blogPost.description}</p>
            </div>
        </div>
    )
}
