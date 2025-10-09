import React from 'react'

export const SignIn = () => {
  return (
    <div className="bg-black text-yellow-400 p-8 rounded-lg shadow-lg max-w-md w-full">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <form className="space-y-4">
            <div>
                <label className="block mb-2">Email</label>
                <input type="email" className="w-full p-3 rounded bg-neutral-800 border border-yellow-400 text-yellow-400" placeholder="Enter your email" />
            </div>
            <div>
                <label className="block mb-2">Password</label>
                <input type="password" className="w-full p-3 rounded bg-neutral-800 border border-yellow-400 text-yellow-400" placeholder="Enter your password" />
            </div>
            <button type="submit" className="w-full p-3 rounded bg-yellow-400 text-neutral-900 hover:bg-yellow-500 transition-colors">Sign In</button>
        </form>
        <div>
            <p className="mt-4 text-sm text-center text-neutral-400">
                Don't have an account? <a href="/Landing-Page-Scratch/signup" className="text-yellow-400 hover:underline">Sign Up</a>
            </p>
        </div>
    </div>
  )
}
