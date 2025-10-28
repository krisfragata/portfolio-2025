import React from "react";
import { Project } from "../app/software-projects/project-list";

interface MoreInfoModalProps {
    project: Project; 
    setIsModalOpen: Function;
    isModalOpen: boolean;
    extraStyling: string;
}

const MoreInfoModal: React.FC<MoreInfoModalProps> = ({project, setIsModalOpen, isModalOpen, extraStyling}) => {

    /**
     * @description handles closing modal window
     */
    const handleClose = () => {
        setIsModalOpen(false);
    }

    /**
     * @description handles rendering 'title' information, including project name, year, and relevant links
     */
    const renderTitleInfo = () => {
        return <div className="info-left">
            <div className="title-section">
                <p className="text-primary">{project.title}</p>
                <p className="info-header">{project.year}</p>
            </div>
            <div className="main-links">
                {
                    project.githubLink == '' || project.githubLink == 'NA' ? <p>Github: NA</p> : <a href={project.githubLink} target="_blank" className="link-item">Github</a>
                }
                {
                    project.figma == '' || project.figma == 'NA' ? <p>Figma: NA</p> : <a href={project.figma} target="_blank" className="link-item">Figma</a>
                }
            </div>
            <div>
                <p className="info-header">More Links:</p>
                <div className="links-list">
                    {
                        project.otherLinks.map((link) => (
                            <a key={link.href} href={link.href} target="_blank" className="link-item">{`${link.label}`}</a>
                        ))
                    }
                </div>
            </div>
        </div>
    }

    /**
     * @description renders project description 
     */
    const renderDescription = () => {
        return <div className="info-right">
                {
                    project.description.map((line, i) => (
                        <p key={i} className="description-paragraph">{line}</p>
                    ))
                }
        </div>
    }
    const renderModal = () => {
        const modal = isModalOpen ? <div className={`info-modal ${extraStyling}`}>
             <div className="image-modal-actions">
                <div className="image-modal-button" onClick={handleClose}>(close)</div>
            </div>
            <div className="info-container">
                {renderTitleInfo()}
                {renderDescription()}           
            </div>
        </div> : null
        return modal;
    }
    return (
        <>
            {renderModal()}
        </>
    )
}

export default MoreInfoModal;