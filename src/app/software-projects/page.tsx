import React from "react";
import projects from './project-list';
const SoftwareProjects: React.FC = () => {
    const list = projects.map((project, index) => {
        <li key={index}>{project.title}</li>
    })
    return (
        <div>
            <ol>list</ol>
        </div>
    );
}

export default SoftwareProjects;