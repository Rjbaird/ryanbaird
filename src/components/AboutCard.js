import React from 'react'
import { Link } from 'react-router-dom'
import pic from '../assets/profile_pic.jpg'

const AboutCard = () => {
    return (
        <div className="md:flex bg-black py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                <h2 className="text-base text-center font-semibold tracking-wider text-indigo-600 uppercase">
                    Deploy faster
                </h2>
                <p className="mt-2 text-3xl text-center font-extrabold text-gray-200 tracking-tight sm:text-4xl">
                    Everything you need to deploy your app
                </p>
                <div className="mt-12">
                    <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
                            <div className="lg:col-span-2">
                                <ul className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
                                    <li className="sm:py-8">
                                        <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                                            <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                                                <img className="object-cover shadow-lg rounded-lg" src={pic} alt=""/>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <div className="space-y-4">
                                                    <div className="text-white text-lg leading-6 font-medium space-y-1">
                                                        <h3>Ryan Baird</h3>
                                                        <p className="text-indigo-600">Co-Founder / CEO</p>
                                                    </div>
                                                    <div className="text-lg">
                                                        <p className="text-gray-500">Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.</p>
                                                    </div>
                                                    <ul className="flex space-x-5">
                                                        <li>
                                                            <Link href="#" className="text-gray-400 hover:text-gray-500">
                                                                <span className="sr-only">Twitter</span>
                                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                                                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                                                </svg>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#" className="text-gray-400 hover:text-gray-500">
                                                                <span className="sr-only">LinkedIn</span>
                                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                                                    <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                                                                </svg>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutCard
