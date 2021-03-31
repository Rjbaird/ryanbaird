import React from 'react'
import ProjectCard from '../components/ProjectsCard'
import weatherImg from '../assets/weather_mage.png'
import passwordImg from '../assets/password_image.png'


const Projects = () => {
    return (
        <div className="md:flex bg-black py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-md px-4  sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                <h2 className="text-base text-center font-semibold tracking-wider text-indigo-600 uppercase">
                    Deploy faster
                    </h2>
                <p className="mt-2 text-center text-3xl font-extrabold text-gray-200 tracking-tight sm:text-4xl">
                    Everything you need to deploy your app
                    </p>
                <p className="mt-5 text-center max-w-prose mx-auto text-xl text-gray-500">
                    Here's an overview of what I do
                    </p>
                <ProjectCard
                    title="Project 1 Title"
                    src="https://images.unsplash.com/photo-1507207611509-ec012433ff52?ixlib=rb-1.2.1&ixqx=1Q58JdKz5f&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80"
                    data="Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames."
                    link="https://www.google.com/"
                    repo="https://github.com/Rjbaird/GoogleAppsScripts"
                />
                <ProjectCard
                    title="Project 2 Title"
                    src="https://images.unsplash.com/photo-1507207611509-ec012433ff52?ixlib=rb-1.2.1&ixqx=1Q58JdKz5f&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80"
                    data="Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames."
                    link="https://www.google.com/"
                    repo="https://github.com/Rjbaird/GoogleAppsScripts"
                />
                <ProjectCard
                    title="Password Generator"
                    src={passwordImg}
                    data="Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames."
                    link="https://rjbaird.github.io/PasswordGenerator/"
                    repo="https://github.com/Rjbaird/PasswordGenerator"
                />
                <ProjectCard
                    title="Weather Dashboard"
                    src={weatherImg}
                    data="Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames."
                    link="https://rjbaird.github.io/WeatherDashboard/"
                    repo="https://github.com/Rjbaird/WeatherDashboard"
                />
            </div>
        </div>
    )
}

export default Projects
