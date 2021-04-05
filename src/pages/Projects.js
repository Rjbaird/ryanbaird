import React from 'react'
import Header from '../components/Header'
import profilePic from '../assets/profile_pic.jpg'

import ProjectCard from '../components/ProjectsCard'
import weatherImg from '../assets/weather_mage.png'
import passwordImg from '../assets/password_image.png'

const Projects = () => {
    return (
        <div className="md:flex bg-black py-16">
            <div className="mx-auto max-w-md px-4  sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                <Header
                header_sm="Ryan Baird's"
                header_lg="Projects & Portfolio"
                subtext="Here you can find my favorite projects and GitHub repos."
                /> 
                <ProjectCard
                    title="Ryanbaird.com"
                    src={profilePic}
                    data="My personal website and portfolio. You'll find links to my (rarely used) social media accounts, contact information and links to my projects."
                    tech="React, Tailwind CSS & Firebase"
                    link="https://www.google.com/"
                    linkBtn="Learn more here"
                    repo="https://github.com/Rjbaird/ryanbaird"
                    repoBtn="See the code"
                />
                <ProjectCard
                    title="Google Apps Scripts Collection"
                    src="data:image/png;base64,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"
                    data="My evergrowing collection of functions in Google Apps Scripts. As I complete more Apps Scripts projects for clients, I plan to add new functions to this Github repo."
                    tech="JavaScript & Google APIs"
                    link="https://developers.google.com/apps-script"
                    linkBtn="Learn more here"
                    repo="https://github.com/Rjbaird/GoogleAppsScripts"
                    repoBtn="See the code"
                />
                <ProjectCard
                    title="Password Generator"
                    src={passwordImg}
                    data="Stop using the same passwords for every app and use this simple password generator. Click 'Generate Password', answer the questions and recieve a randomly created password."
                    tech="HTML, CSS & JavaScript"
                    link="https://rjbaird.github.io/PasswordGenerator/"
                    linkBtn="Try it out"
                    repo="https://github.com/Rjbaird/PasswordGenerator"
                    repoBtn="See the code"
                />
                <ProjectCard
                    title="Weather Dashboard"
                    src={weatherImg}
                    data="Search current and future weather conditions using the OpenWeather API. You'll recieve the following information: Temperature, Humidity, Wind Speed and UV Index. Oh and a gif from the Giphy API!"
                    tech="Bootstrap & Axios"
                    link="https://rjbaird.github.io/WeatherDashboard/"
                    linkBtn="Try it out"
                    repo="https://github.com/Rjbaird/WeatherDashboard"
                    repoBtn="See the code"
                />
            </div>
        </div>
    )
}

export default Projects
