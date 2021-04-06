import React from 'react'
import { Link } from 'react-router-dom'
import pic from '../assets/Open Peeps - Sitting.png'


const Hero = () => {
    return (
        <div className="md:flex bg-black">
            <img className="w-32 h-32 w-auto h-auto rounded-none rounded-full mx-auto" src={pic} alt="" />
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block text-white xl:inline">👋  Hello! 👋</span>
                    <span className="block text-indigo-600 xl:inline"> I'm Ryan Baird</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  I'm a Full Stack Web Developer with a focus on a MERN (MongoDB, Express, React, Node.js) stack. 
                  My background involves sales, business automation, mobile communications technologies, and team management.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <a href="mailto:ryanjohnbaird@gmail.com" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                        <svg className=" group-hover:text-gray-300 mr-4 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        Get in touch
                      </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <Link to="/portfolio" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                        <svg className=" group-hover:text-gray-300 mr-4 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                        </svg>
                        See my work
                      </Link>
                    </div>
                  </div>
                </div>
              </main>
        </div>
    )
}

export default Hero