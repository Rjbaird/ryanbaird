import React from 'react'
import ExperienceCard from './ExperienceCard'
import { Link } from 'react-router-dom'


const Experience = () => {
    return (
        <div className="md:flex bg-black py-16 sm:py-24 lg:py-32">
            {/* <div className="md:flex bg-black py-16 sm:py-24 lg:py-32"> */}
            <div className="mx-auto max-w-md px-4  sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">
                    Deploy faster
                </h2>
                <p className="mt-2 text-3xl font-extrabold text-gray-200 tracking-tight sm:text-4xl">
                    Everything you need to deploy your app
                </p>
                <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                    Here's an overview of what I do
                </p>

                </div>



                <section className="bg-black">
                    <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
                        <ExperienceCard
                            data="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis. Nemo expedita voluptas culpa sapiente alias molestiae."
                            time="2009 - 2013"
                            location=""
                        />
                        <ExperienceCard
                            data="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis. Nemo expedita voluptas culpa sapiente alias molestiae."
                            time="2009 - 2013"
                            location=""
                        />
                        <ExperienceCard
                            data="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis. Nemo expedita voluptas culpa sapiente alias molestiae."
                            time="2009 - 2013"
                            location=""
                        />
                        <ExperienceCard
                            data="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis. Nemo expedita voluptas culpa sapiente alias molestiae."
                            time="2009 - 2013"
                            location=""
                        />
                    </div>
                </section>
                <div className="md:flex bg-black">
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight text-center font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                <span className="block text-white">CTA 1</span>
                                <span className="block text-indigo-600"> CTA 2</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis. Nemo expedita voluptas culpa sapiente alias molestiae.
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <Link href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                                        PDF
                                    </Link>
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <Link to="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                                        Doc (Word)
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Experience
