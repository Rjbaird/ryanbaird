import React from 'react'
import pic from '../assets/profile_pic.jpg'
import headshot from '../assets/professional_pic.jpg'
import Header from './Header'
import AboutMini from './AboutMini'

const AboutCard = () => {
    return (
        <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0 py-16">
            <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                <img className="object-cover shadow-lg rounded-lg" src={headshot} alt="" />
            </div>
            <div className="sm:col-span-2">
                <div className="space-y-12 lg:space-y-0">
                    <AboutMini
                    header="From Mobile Expert to Software Developer"
                    data="My interest in software development started while I was working sales at Best Buy Mobile. 
                    In my free time, I learned about mobile automation software like IFTTT, Tasker, and Zapier. 
                    While not full on development, I grew a solid understanding of concepts such as functions, variables, conditionals, loops, testing, and error handling. 
                    As my interest grew, I moved on to full-fledged programming languages, primarily Javascript."
                    />
                    <AboutMini
                    header="What am I doing now?"
                    data="Right now, I'm using my sales and Javascript skills to help small businesses increase their productivity with custom automations. 
                    My main work is with G Suite and Google Apps Scripts. 
                    I also help create IoT integrations with services like IFTTT and Zapier."
                    />
                    <AboutMini
                    header="Future Goals and Hobbies"
                    data="In my free time, I create personal automations with Siri Shortcuts, manage my home with Home Assistant on a Raspberry Pi and create personal assistants with Slack bots. 
                    I'm also learning more about databases and how to work with Serverless technologies like Firebase and AWS."
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutCard
