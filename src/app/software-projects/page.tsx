'use client'
import React, { MouseEvent, MouseEventHandler, useEffect, useRef, useState } from "react";
import { Project, projects } from './project-list';
import ImageModal from "../../components/ImageModal";
import MoreInfoModal from "@/components/MoreInfoModal";

interface ProjectControlData {
    project: Project;
    imageModalState: boolean;
    imageModalSetter: React.Dispatch<React.SetStateAction<boolean>>;
    infoModalState: boolean;
    infoModalSetter: React.Dispatch<React.SetStateAction<boolean>>;
    imageModalZIndex: string;
    imageZIndexSetter: React.Dispatch<React.SetStateAction<string>>;
    infoModalZIndex: string;
    infoZIndexSetter: React.Dispatch<React.SetStateAction<string>>;
    id: string;
    extraImageStyling: string;
}

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
    const [portfolioTextZIndex, setPortfolioTextZIndex] = useState<string>('');
    const [webScraperTextZIndex, setWebScraperTextZIndex] = useState<string>('');
    const [svisualizeTextZIndex, setSvisualizeTextZIndex] = useState<string>('');
    const [dailyDoseTextZIndex, setDailyDoseTextZIndex] = useState<string>('');

    // tracks state of image modal z-indices
    const [portfolioZIndex, setPortfolioZIndex] = useState<string>('');
    const [webScraperZIndex, setWebScraperZIndex] = useState<string>('');
    const [svisualizeZIndex, setSvisualizeZIndex] = useState<string>('');
    const [dailyDoseZIndex, setDailyDoseZIndex] = useState<string>('');

    interface ModalSetter {
        type: String,
        setter: Function,
    }

    useEffect(() => {
    },[]);

    /**
     * @description tracks all states and setters of project
     */
    const projectControlData: ProjectControlData[] = projects.map((project) => {
            switch (project.id) {
                case 'portfolio':
                    return { 
                        id: project.id,
                        project: project,
                        imageModalState: isPortfolioImageOpen,
                        imageModalSetter: setIsPortfolioImageOpen,
                        infoModalState: isPortfolioTextOpen,
                        infoModalSetter: setIsPortfolioTextOpen,
                        infoModalZIndex: portfolioTextZIndex,
                        infoZIndexSetter: setPortfolioTextZIndex,
                        imageModalZIndex: portfolioZIndex,
                        imageZIndexSetter: setPortfolioZIndex,
                        extraImageStyling: '',
                    }
                case 'svisualize':
                   return { 
                        id: project.id,
                        project: project,
                        imageModalState: isSvisualizeImageOpen,
                        imageModalSetter: setIsSvisualizeImageOpen,
                        infoModalState: isSvisualizeTextOpen,
                        infoModalSetter: setIsSvisualizeTextOpen,
                        infoModalZIndex: svisualizeTextZIndex,
                        infoZIndexSetter: setSvisualizeTextZIndex,
                        imageModalZIndex: svisualizeZIndex,
                        imageZIndexSetter: setSvisualizeZIndex,
                        extraImageStyling: 'mb-10',
                    } 
                case 'daily_dose':
                    return {
                        id: project.id,
                        project: project,
                        imageModalState: isDailyDoseImageOpen,
                        imageModalSetter: setIsDailyDoseImageOpen,
                        infoModalState: isDailyDoseTextOpen,
                        infoModalSetter: setIsDailyDoseTextOpen,
                        infoModalZIndex: dailyDoseTextZIndex,
                        infoZIndexSetter: setDailyDoseTextZIndex,
                        imageModalZIndex: dailyDoseZIndex,
                        imageZIndexSetter: setDailyDoseZIndex,
                        extraImageStyling: 'mb-15',
                    }
                default:
                    return undefined;
                }
        }).filter((p) => p !== undefined);
    

    /**
     * @description loops thorugh info modals and sets appropriate z index
     * @param project 
     */
    const sendInfoToFront = (project: string) => {
        // loops through projectControlData and ensures that passed in project is sent to front and all others are null.
        projectControlData.forEach((controlData) => {
            if (controlData.id === project) {
                controlData.infoZIndexSetter('z-100');
            } else {
               controlData.infoZIndexSetter('');
            }
        });
    }

    /**
     * @description loops through image modals and sets appropriate z index
     * @param project describing name of project
     */
    const sendImageToFront = (project: string) => {
        projectControlData.forEach((controlData) => {
            if (controlData.id === project) {
                controlData.imageZIndexSetter('z-100');
            } else {
                controlData.imageZIndexSetter('');
            }
        })
    }

    const renderImageModals = () => {
        return projectControlData.map(controlData => {
            return <ImageModal 
                project={controlData.project}
                setIsModalOpen={controlData.imageModalSetter}
                isModalOpen={controlData.imageModalState}
                key={controlData.id}
                extraStyling={`${controlData.extraImageStyling} ${controlData.imageModalZIndex}`}
                handleTextToggle={() => {
                    sendInfoToFront(controlData.project.id);
                    const isTextOpen = controlData.infoModalState;
                    controlData.infoModalSetter(!isTextOpen);
                }}
            />
        })
    }

    const renderInfoModals = () => {
        return projectControlData.map(controlData => {
            return <MoreInfoModal 
                project={controlData.project}
                setIsModalOpen={controlData.infoModalSetter}
                isModalOpen={controlData.infoModalState}
                key={controlData.id}
                extraStyling={`${controlData.infoModalZIndex}`}
            />
        })
    }

    const list = projectControlData.map((controlData, index) => {
        return <li 
            className="software-projects-list-item"
            key={index}
            value={controlData.id}
            onClick={() => {
                sendImageToFront(controlData.id);
                const isOpen = controlData.imageModalState;
                controlData.imageModalSetter(!isOpen);
            }}
        ><span className="text-primary">{`0${index} - `}</span>{`${controlData.project.title}`}</li>
    })

    // const list = projects.map((project, index) => {
    //     switch (project.id) {
    //         case 'portfolio':
    //             return <li className="software-projects-list-item" key={index} value={project.id} onClick={() => { sendImageToFront('portfolio'); const isOpen = isPortfolioImageOpen; setIsPortfolioImageOpen(!isOpen)}}><span className="text-primary">{`01. `}</span>{`${project.title}`}</li> 
    //         case 'flow_scraper':
    //             return <li className="software-projects-list-item" key={index} value={project.id} onClick={() => { sendImageToFront('flow_scraper'); const isOpen = isWebScraperImageOpen; setIsWebScraperImageOpen(!isOpen)} }>{`02. ${project.title}`}</li>
    //         case 'svisualize':
    //             return <li className="software-projects-list-item" key={index} value={project.id} onClick={() => { sendImageToFront('svisualize'); const isOpen = isSvisualizeImageOpen; setIsSvisualizeImageOpen(!isOpen)}}>{`02. ${project.title}`}</li>
    //         case 'daily_dose':
    //             return <li className="software-projects-list-item" key={index} value={project.id} onClick={() => { sendImageToFront('daily_dose'); const isOpen = isPortfolioImageOpen; setIsDailyDoseImageOpen(!isOpen)}}>{`03. ${project.title}`}</li>
    //     }
    // });



    return (
        <div className="left-main-text">
            <ol className="software-project-list">{list}</ol>
            {renderImageModals()}
            {renderInfoModals()}
        </div>
    );
}

export default SoftwareProjects;