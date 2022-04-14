import React from 'react'
import { ProjectSection, Myh2, Title } from './Projects.Style'
import ProjectCard from './ProjectCard'

const Projects = ()=>{
    return(
        <ProjectSection id='Projects'> 
            <Title>
                <Myh2>Projects</Myh2>
            </Title>
            <ProjectCard></ProjectCard>
        </ProjectSection>
    )
}
export default Projects