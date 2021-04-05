import React from 'react'
import Header from './Header'
import SkillsCard from './SkillsCard'

const Skills = () => {
    return (
        <div className="md:flex bg-black py-16">
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                <Header
                header_sm="What can I all do?"
                header_lg="Lots of Things!"
                subtext=""
                />
                <div className="mt-12">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <SkillsCard
                            svg="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                            title="Front End Development"
                            data="Javascript is my primary language. I also know how to work with HTML, CSS, MongoDB, MySQL, JSON and Markdown"
                        />

                        <SkillsCard
                            svg="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                            title="Sales & Communication"
                            data="Across sales, retail and management jobs, I have over a decade of experience in clear verbal and written communication"
                        />

                        <SkillsCard
                            svg="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            title="Remote Development"
                            data="From freelance clients to bootcamp projects, nearly all my development experience was completed remotely"
                        />

                        <SkillsCard
                            svg="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                            title="GTD & Agile Workflows"
                            data="All freelance, bootcamp and personal projects are created with a mix of Agile workflows and GTD task management"
                        />
                        
                        <SkillsCard
                            svg="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                            title="Mobile Technologies"
                            data="A near decade of experience selling, troublshooting, and automating mobile devices for personal/professional projects"
                        />

                        <SkillsCard
                            svg="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            title="Bad jokes"
                            data="Who isn't in need of a good laugh? While I usually aim for a mix of clever and silly, I just can't promise that they'll all be good."
                        />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
