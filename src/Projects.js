import React from 'react';
import ProjectCard from './ProjectCard.js';

function Projects() {
    return (
        <div id="projects">
            <div className="container-fluid">
                <div className="row">
                    <h1 className="content-header">Projects</h1>
                </div>
                <hr className="section-hr" />
                <div className="row project-wrap">
                    {/* Add project cards here */}
                    <ProjectCard name="Cultivate" tags={['Android', 'Java', 'SQL']}
                        description="An app for helping you cultivate new habits to improve your life. Care for plants that represent the habits you'd like to maintain."
                        img="./img/project1.jpg"
                        repo="" />
                    <ProjectCard name="Cultivate" tags={['Android', 'Java', 'SQL']}
                        description="An app for helping you cultivate new habits to improve your life. Care for plants that represent the habits you'd like to maintain."
                        img="./img/project1.jpg"
                        repo="" />
                    <ProjectCard name="Cultivate" tags={['Android', 'Java', 'SQL']}
                        description="An app for helping you cultivate new habits to improve your life. Care for plants that represent the habits you'd like to maintain."
                        img="./img/project1.jpg"
                        repo="" />
                </div>
                <hr className="section-hr" />
            </div>
        </div>
    );
}

export default Projects