import React from 'react'
import ProjectCard from '../components/ProjectsCard'
const Projects = () => {
    return (
        <div>
            <ProjectCard
            title="Project 1 Title"
            src="https://images.unsplash.com/photo-1507207611509-ec012433ff52?ixlib=rb-1.2.1&ixqx=1Q58JdKz5f&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80"
            data="Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames."
            link="https://www.google.com/"
            repo="https://github.com/Rjbaird/GoogleAppsScripts"
            />
            <ProjectCard/>
            <ProjectCard/>

        </div>
    )
}

export default Projects
