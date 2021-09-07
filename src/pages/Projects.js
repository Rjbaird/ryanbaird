import React from 'react'
import Header from '../components/Header'
import profilePic from '../assets/profile_pic.jpg'

import ProjectCard from '../components/ProjectsCard'
import weatherImg from '../assets/weather_mage.png'
import passwordImg from '../assets/password_image.png'
import ynabImg from '../assets/Coinbase_YNAB_Sync.png'
import simImg from '../assets/SIM_checker.png'

const Projects = () => {
    return (
        <div className="md:flex bg-black py-16">
            <div className="mx-auto max-w-md px-4 items-stretch sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
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
                    link="https://ryanbaird.com/"
                    linkBtn="Learn more here"
                    repo="https://github.com/Rjbaird/ryanbaird"
                    repoBtn="See the code"
                />
                <ProjectCard
                    title="Coinbase & YNAB Sync"
                    src={ynabImg}
                    data="This Python script uses the You Need A Budget and Coinbase APIs to automatically update an investment or tracking account in YNAB"
                    tech="Python & REST APIs"
                    link="https://www.youneedabudget.com/"
                    linkBtn="Learn about YNAB"
                    repo="https://github.com/Rjbaird/YNAB-Coinbase-Sync"
                    repoBtn="See the code"
                />
                <ProjectCard
                    title="SIM Inventory Checker"
                    src={simImg}
                    data="This Google Apps Script helped save us hours of time each week by finding missing and extra SIM cards in our inventory."
                    tech="JavaScript & Google App Scripts"
                    link="https://www.google.com/script/start/"
                    linkBtn="Learn about Google App Scripts"
                    repo="https://github.com/Rjbaird/GoogleAppsScripts/tree/main/Full_Projects/SIM_Checker"
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
