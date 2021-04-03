import React from 'react'
import WorkCard from './WorkCard'
import resumePDF from '../assets/Ryan Baird - WebDev - 2021.pdf'
import resumeDOCX from '../assets/Ryan Baird - WebDev - 2021.docx'
import Header from './Header'
import SchoolCard from './SchoolCard'



const Experience = () => {
    return (
        <div className="md:flex bg-black py-16">
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                <Header
                header_sm="Ryan Baird's"
                header_lg="Work & Education"
                subtext="
                Here's everything (and more) that you'll want to know about my work experience and formal education.
                I've had various career paths/interest so feel free to ask about anything.
                You can download a simplified copy of my resume below."
                />
                <section className="bg-black py-8">
                    <h2 className="mt-2 text-3xl text-center font-extrabold text-white tracking-tight sm:text-4xl">
                        Employment
                    </h2>
                    <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
                        <WorkCard
                            title="Google Apps Scripts Developer"
                            company="Self-employeed"
                            icon="data:image/png;base64,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"
                            data="Developed custom scripts and systems using Google Apps Scripts for freelance clients. Projects include inventory validation systems, invoice generators, Gmail filters, and Google Sheets automations."
                            time="2020 - Present"
                            location="Remote"
                        />
                        <WorkCard
                            title="Mobile Expert"
                            company="T-Mobile"
                            icon="https://icons.iconarchive.com/icons/martz90/circle-addon1/512/t-mobile-icon.png"
                            data="Closed sales of T-Mobile devices and services based on customer needs. Partnered with coworkers and management for device troubleshooting, customer billing issues, and daily administrative tasks"
                            time="2019 - Present"
                            location="Minneapolis, MN"
                        />
                        <WorkCard
                            title="Lead Sales Consultant"
                            company="Best Buy"
                            icon="https://logodownload.org/wp-content/uploads/2020/05/best-buy-logo-2.png"
                            data="Managed staff in Mobile, Tablets, and Connected Home departments. Responsibilities include department scheduling, sales quotas, staff development and handling customer escalations."
                            time="2013 - 2018"
                            location="Sioux Falls, SD"
                        />
                        <WorkCard
                            title="Inside Sales Representative"
                            company="Lifetouch National School Studios"
                            icon="https://pbs.twimg.com/profile_images/1291736861594058752/4_HhqY6N_400x400.png"
                            data="Made sales calls to schools across North America for Outside Sales Professionals. Additional job skills include remote/asynchronous collaboration and spreadsheet management."
                            time="2018 - 2019"
                            location="Minneapolis, MN"
                        />
                    </div>
                </section>
                <section className="bg-black py-8">
                    <h2 className="mt-2 text-3xl text-center font-extrabold text-white tracking-tight sm:text-4xl">
                        Education
                    </h2>
                    <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
                        <SchoolCard
                        degree="Full Stack Development Bootcamp"
                        institution="University of Minnesota"
                        icon="https://university-relations.umn.edu/sites/university-relations.umn.edu/files/m-static_0.png"
                        alt=""
                        data="Completed a twelve week immersive bootcamp in Full Stack Web Development. Projects focused around skills around the MERN (MongoDB, Express, React, and Node.js) stack."
                        time="2020"
                        location="Remote"
                        />
                        <SchoolCard
                        degree="Bachelor of Arts in Psychology"
                        institution="Augustana University"
                        icon="https://pbs.twimg.com/profile_images/1039616822084071425/1K5cbgi9_400x400.jpg"
                        alt=""
                        data="Emphasis in Psychology and Philosophy. Coursework included non-verbal communication, persuasion, decision-making, attention, business leadership and ethics. "
                        time="2009 - 2013"
                        location="Sioux Falls, SD"
                        />
                    </div>
                </section>
                <div className="md:flex bg-black">
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-12 lg:mt-12 lg:px-8">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight text-center font-extrabold text-gray-900 sm:text-5xl">
                                {/* <span className="block text-white">CTA 1</span> */}
                                <span className="block text-indigo-600"> Resumes</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                If you need a copy of my developer resume, you can download a PDF or DOCX copy below.
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex justify-center">
                                <div className="rounded-md center shadow">
                                    <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                                        PDF
                                    </a>
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <a href={resumeDOCX} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                                        DOCX (Word)
                                    </a>
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
