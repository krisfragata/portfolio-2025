'use client'
import React, { MouseEvent, MouseEventHandler, useRef, useState } from "react";
import { projects } from './project-list';
import ImageModal from "../../components/ImageModal";

const SoftwareProjects: React.FC = () => {
    // track the state of each project?
    const [isPortfolioImageOpen, setIsPortfolioImageOpen] = useState(false);
    const [isWebScraperImageOpen, setIsWebScraperImageOpen] = useState(false);
    const [isSvisualizeImageOpen, setIsSvisualizeImageOpen] = useState(false); 
    const [isDailyDoseImageOpen, setIsDailyDoseImageOpen] = useState(false);


    const renderImageModals = () => {
        return projects.map(project => {
            switch (project.id) {
                case 'portfolio':
                    return <ImageModal project={project} setIsModalOpen={setIsPortfolioImageOpen} isModalOpen={isPortfolioImageOpen} key={project.id} extraStyling=""/>
                case 'flow_scraper':
                    return <ImageModal project={project} setIsModalOpen={setIsWebScraperImageOpen} isModalOpen={isWebScraperImageOpen} key={project.id} extraStyling="mb-10" />
                case 'svisualize':
                    return <ImageModal project={project} setIsModalOpen={setIsSvisualizeImageOpen} isModalOpen={isSvisualizeImageOpen} key={project.id} extraStyling="mb-30"/>
                case 'daily_dose':
                    return <ImageModal project={project} setIsModalOpen={setIsDailyDoseImageOpen} isModalOpen={isDailyDoseImageOpen} key={project.id} extraStyling=""/>
            }
        })
    }
    
    const list = projects.map((project, index) => {
        switch (project.id) {
            case 'portfolio':
                return <li className="software-projects-list-item" key={index} value={project.id} onClick={() => { console.log('lol'); setIsPortfolioImageOpen(true)}}>{`${project.title}`}</li> 
            case 'flow_scraper':
                return <li className="software-projects-list-item" key={index} value={project.id} onClick={() => setIsWebScraperImageOpen(true)}>{`${project.title}`}</li>
            case 'svisualize':
                return <li className="software-projects-list-item" key={index} value={project.id} onClick={() => setIsSvisualizeImageOpen(true)}>{`${project.title}`}</li>
            case 'daily_dose':
                return <li className="software-projects-list-item" key={index} value={project.id} onClick={() => setIsDailyDoseImageOpen(true)}>{`${project.title}`}</li>
        }
    });



    return (
        <div className="left-main-text">
            <ol className="software-project-list">{list}</ol>
            {renderImageModals()}
        </div>
    );
}

export default SoftwareProjects;