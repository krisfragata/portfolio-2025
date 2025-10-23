import React, { useState } from "react";
import { Project } from "../app/software-projects/project-list";
import Image from "next/image";

interface ImageModalProps {
    project: Project; 
    setIsModalOpen: Function;
    isModalOpen: boolean;
    extraStyling: string;
    handleOpenText: Function;
}

const ImageModal: React.FC<ImageModalProps> = ({project, setIsModalOpen, isModalOpen, extraStyling, handleOpenText}) => {
    const [imageIndex, setImageIndex] = useState(0);

    const handleClose = () => {
        setIsModalOpen(false);
    }

    const handleNextImage = () => {
        switch(imageIndex) {
            case project.imageSources.length - 1: 
                setImageIndex(0);
                break;
            default:
                setImageIndex(imageIndex + 1);
                break;
        }
    }

    const handleBackImage = () => {
        switch(imageIndex) {
            case 0: 
                setImageIndex(project.imageSources.length - 1);
                break;
            default:
                setImageIndex(imageIndex - 1);
                break;
        }
    }

    const renderImages = () => {
        
        return project.imageSources[0] !== undefined ? <Image src={project.imageSources[imageIndex]} alt="left" /> : null
    }
    const renderModal = () => {
        const modal = isModalOpen ? <div className={`image-modal ${extraStyling}`}>
            <div className="image-modal-actions">
                <div className="image-modal-button" onClick={() => handleOpenText()}>(more info...)</div>
                <div className="image-modal-button" onClick={handleClose}>(close)</div>
            </div>
            <div className="image-container" onClick={handleNextImage}>
                <div className="arrow arrow-left">
                    <svg className="w-6 h-6 text-primary arrow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                        <path stroke="#D22727" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"/>
                    </svg>
                </div>
                {renderImages()}
                <div className="arrow arrow-right" onClick={handleBackImage}>
                    <svg className="w-6 h-6 text-primary-red arrow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                        <path stroke="#D22727" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                    </svg>
                </div>
                
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

export default ImageModal;