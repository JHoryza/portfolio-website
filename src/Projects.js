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
                        description="An app for helping you cultivate new habits to improve your life. Care for plants that represent the habits you'd like to maintain. User defined habits are stored locally using SQLite."
                        img="./img/project1.jpg"
                        repo="https://github.com/JHoryza/cultivate-app" />
                    <ProjectCard name="Blackjack" tags={['REACT', 'REST API', 'JavaScript']}
                        description="A Blackjack browser game built using REACT component architecture. Deck shuffle and card draw are implemented using an external card deck API."
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