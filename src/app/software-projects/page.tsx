'use client'
import React, { MouseEvent, MouseEventHandler, useRef, useState } from "react";
import { projects } from './project-list';
import ImageModal from "../../components/ImageModal";
import MoreInfoModal from "@/components/MoreInfoModal";

const SoftwareProjects: React.FC = () => {
    // track the state of each project?
    // tracks state of image modals
    const [isPortfolioImageOpen, setIsPortfolioImageOpen] = useState(false);
    const [isWebScraperImageOpen, setIsWebScraperImageOpen] = useState(false);
    const [isSvisualizeImageOpen, setIsSvisualizeImageOpen] = useState(false); 
    const [isDailyDoseImageOpen, setIsDailyDoseImageOpen] = useState(false);

    // tracks state of more info modals
    const [isPortfolioTextOpen, setIsPortfolioTextOpen] = useState(false);
    const [isWebScraperTextOpen, setIsWebScraperTextOpen] = useState(false);
    const [isSvisualizeTextOpen, setIsSvisualizeTextOpen] = useState(false); 
    const [isDailyDoseTextOpen, setIsDailyDoseTextOpen] = useState(false);

    const renderImageModals = () => {
        return projects.map(project => {
            switch (project.id) {
                case 'portfolio':
                    return <ImageModal project={project} setIsModalOpen={setIsPortfolioImageOpen} isModalOpen={isPortfolioImageOpen} key={project.id} extraStyling="" handleOpenText={() => setIsPortfolioTextOpen(true)}/>
                case 'flow_scraper':
                    return <ImageModal project={project} setIsModalOpen={setIsWebScraperImageOpen} isModalOpen={isWebScraperImageOpen} key={project.id} extraStyling="mb-10"  handleOpenText={() => setIsWebScraperTextOpen(true)}/>
                case 'svisualize':
                    return <ImageModal project={project} setIsModalOpen={setIsSvisualizeImageOpen} isModalOpen={isSvisualizeImageOpen} key={project.id} extraStyling="mb-30" handleOpenText={() => setIsSvisualizeTextOpen(true)}/>
                case 'daily_dose':
                    return <ImageModal project={project} setIsModalOpen={setIsDailyDoseImageOpen} isModalOpen={isDailyDoseImageOpen} key={project.id} extraStyling="" handleOpenText={() => setIsDailyDoseTextOpen(true)}/>
            }
        })
    }

    const renderInfoModals = () => {
        return projects.map(project => {
            switch (project.id) {
                case 'portfolio':
                    return <MoreInfoModal project={project} setIsModalOpen={setIsPortfolioTextOpen} isModalOpen={isPortfolioTextOpen} key={project.id} extraStyling=""/>
                case 'flow_scraper':
                    return <MoreInfoModal project={project} setIsModalOpen={setIsWebScraperTextOpen} isModalOpen={isWebScraperTextOpen} key={project.id} extraStyling="" />
                case 'svisualize':
                    return <MoreInfoModal project={project} setIsModalOpen={setIsSvisualizeTextOpen} isModalOpen={isSvisualizeTextOpen} key={project.id} extraStyling=""/>
                case 'daily_dose':
                    return <MoreInfoModal project={project} setIsModalOpen={setIsDailyDoseTextOpen} isModalOpen={isDailyDoseTextOpen} key={project.id} extraStyling=""/>
            }
        })
    }


    
    const list = projects.map((project, index) => {
        switch (project.id) {
            case 'portfolio':
                return <li className="software-projects-list-item" key={index} value={project.id} onClick={() => {const isOpen = isPortfolioImageOpen; setIsPortfolioImageOpen(!isOpen)}}>{`${project.title}`}</li> 
            case 'flow_scraper':
                return <li className="software-projects-list-item" key={index} value={project.id} onClick={() => {const isOpen = isWebScraperImageOpen; setIsWebScraperImageOpen(!isOpen)} }>{`${project.title}`}</li>
            case 'svisualize':
                return <li className="software-projects-list-item" key={index} value={project.id} onClick={() => {const isOpen = isSvisualizeImageOpen; setIsSvisualizeImageOpen(!isOpen)}}>{`${project.title}`}</li>
            case 'daily_dose':
                return <li className="software-projects-list-item" key={index} value={project.id} onClick={() => {const isOpen = isPortfolioImageOpen; setIsDailyDoseImageOpen(!isOpen)}}>{`${project.title}`}</li>
        }
    });



    return (
        <div className="left-main-text">
            <ol className="software-project-list">{list}</ol>
            {renderImageModals()}
            {renderInfoModals()}
        </div>
    );
}

export default SoftwareProjects;