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

    // tracks state of info-modal z-indices
    const [portfolioTextZIndez, setPortfolioTextZIndex] = useState<string>('');
    const [webScraperZIndex, setWebScraperZIndex] = useState<string>('');
    const [sviualizeZIndex, setSvisualizeZIndex] = useState<string>('');
    const [dailyDoseZIndex, setDailyDoseZIndex] = useState<string>('');

    interface ModalSetter {
        type: String,
        setter: Function,
    }

    const sendInfoToFront = (project: string) => {
        // array holding all info-modal state setters
        const modalSetters: ModalSetter[] = [
            {
                type: 'portfolio',
                setter: setPortfolioTextZIndex,
            },
            {
                type: 'flow_scraper',
                setter: setWebScraperZIndex,
            },
            {
                type: 'svisualize',
                setter: setSvisualizeZIndex,
            },
            {
                type: 'daily_dose',
                setter: setDailyDoseZIndex,
            }
        ];

        // method that loops through modalSetters and ensures that passed in project is sent to front and all others are null.
        modalSetters.forEach((modal) => {
            if (modal.type === project) {
                modal.setter('z-100');
            } else {
                modal.setter(null);
            }
        });
    }

    const renderImageModals = () => {
        return projects.map(project => {
            switch (project.id) {
                case 'portfolio':
                    return <ImageModal project={project} setIsModalOpen={setIsPortfolioImageOpen} isModalOpen={isPortfolioImageOpen} key={project.id} extraStyling={``} handleTextToggle={() => { sendInfoToFront('portfolio'); const isTextOpen = isPortfolioTextOpen; setIsPortfolioTextOpen(!isTextOpen)}}/>
                case 'flow_scraper':
                    return <ImageModal project={project} setIsModalOpen={setIsWebScraperImageOpen} isModalOpen={isWebScraperImageOpen} key={project.id} extraStyling={`mb-10`}  handleTextToggle={() => { sendInfoToFront('flow_scraper'); const isTextOpen = isWebScraperTextOpen; setIsWebScraperTextOpen(!isTextOpen)}}/>
                case 'svisualize':
                    return <ImageModal project={project} setIsModalOpen={setIsSvisualizeImageOpen} isModalOpen={isSvisualizeImageOpen} key={project.id} extraStyling={`mb-30`} handleTextToggle={() => { sendInfoToFront('svisualize'); const isTextOpen = isSvisualizeTextOpen; setIsSvisualizeTextOpen(!isTextOpen)}}/>
                case 'daily_dose':
                    return <ImageModal project={project} setIsModalOpen={setIsDailyDoseImageOpen} isModalOpen={isDailyDoseImageOpen} key={project.id} extraStyling={``} handleTextToggle={() => { sendInfoToFront('daily_dose'); const isTextOpen = isDailyDoseTextOpen; setIsDailyDoseTextOpen(!isTextOpen)}}/>
            }
        })
    }

    const renderInfoModals = () => {
        return projects.map(project => {
            switch (project.id) {
                case 'portfolio':
                    return <MoreInfoModal project={project} setIsModalOpen={setIsPortfolioTextOpen} isModalOpen={isPortfolioTextOpen} key={project.id} extraStyling={`${portfolioTextZIndez}`}/>
                case 'flow_scraper':
                    return <MoreInfoModal project={project} setIsModalOpen={setIsWebScraperTextOpen} isModalOpen={isWebScraperTextOpen} key={project.id} extraStyling={`${webScraperZIndex}`} />
                case 'svisualize':
                    return <MoreInfoModal project={project} setIsModalOpen={setIsSvisualizeTextOpen} isModalOpen={isSvisualizeTextOpen} key={project.id} extraStyling={`${setSvisualizeZIndex}`}/>
                case 'daily_dose':
                    return <MoreInfoModal project={project} setIsModalOpen={setIsDailyDoseTextOpen} isModalOpen={isDailyDoseTextOpen} key={project.id} extraStyling={`${setSvisualizeZIndex}`}/>
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