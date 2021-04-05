import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ toggle }) => {
    return (
        <nav className ="flex bg-indigo-600 items-center justify-between px-5 py-3 relative">
            <div className="hover:animate-pulse">
                <Link to="/" className="h-8 text-white text-2xl font-bold">Ryan Baird</Link>
            </div>
            <div className="md:hidden" onClick={ toggle }>
                <button>
                    <svg className="hover:animate-pulse text-white w-6 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                </button>
            </div>
            <div className="md:block hidden text-lg font-semibold">
                <Link to="/portfolio" className="text-white w-6 h-8 p-4">Portfolio</Link>
                <Link to="/resume" className="text-white w-6 h-8 p-4">Resume</Link>
                <Link to="/about" className="text-white w-6 h-8 p-4">About</Link>
            </div>
        </nav>
    )
}

export default Navbar