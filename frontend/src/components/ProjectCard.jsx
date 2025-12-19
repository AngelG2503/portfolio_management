import React from 'react';

function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <img src={project.image} alt={project.name} className="project-image" />
            <div className="project-content">
                <h3 className="project-title">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <button className="view-project-btn">Read More</button>
            </div>
        </div>
    );
}

export default ProjectCard;
