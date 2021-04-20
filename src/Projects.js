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
                        repo="https://github.com/JHoryza/cultivate-app" />
                    <ProjectCard name="Joker's Wild" tags={['REACT', 'REST API', 'JavaScript']}
                        description="A REACT based hub for traditional card games. All deck functions such as shuffling and drawing are handled using an external API. Currently supports Blackjack."
                        img="./img/project2.jpg"
                        repo="https://github.com/JHoryza/jokers-wild" />
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