import React, { useState } from "react";
import { Project } from "../app/software-projects/projects_list";
import Image from "next/image";

interface ImageModalProps {
    project: Project; 
    setIsModalOpen: Function;
    isModalOpen: boolean;
    extraStyling: string;
    handleTextToggle: Function;
}

const ImageModal: React.FC<ImageModalProps> = ({project, setIsModalOpen, isModalOpen, extraStyling, handleTextToggle}) => {
    const [imageIndex, setImageIndex] = useState(0);
    const [isImageLoading, setIsImageLoading] = useState(true);

    const handleClose = () => {
        setIsModalOpen(false);
        setIsImageLoading(false);
    }

    const handleNextImage = () => {
        setIsImageLoading(true);
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
        setIsImageLoading(true);
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
        if (!project.imageSources[0]) return null;
        return (
            <div className="software-project-image">
                {
                    isImageLoading && <div className="absolute inset-0 flex justify-center items-center">
                        <div className="w-8 h-8 border-4 border-gray-300 border-t-primary-red rounded-full animate-spin"/>    
                    </div>
                }
                <Image 
                    src={project.imageSources[imageIndex]} 
                    alt="project image" 
                    className={`transition-opacity duration-300 ${isImageLoading ? "opacity-0" : "opacity-100"}`}
                    onLoadingComplete={() => {
                        setTimeout(() => setIsImageLoading(false), 0)
                    }}
                /> 
            </div>
        )
    }
    const renderModal = () => {
        const modal = isModalOpen ? <div className={`image-modal ${extraStyling}`}>
            <div className="image-modal-actions">
                <div className="image-modal-button" onClick={() => handleTextToggle()}>(more info...)</div>
                <div className="image-modal-button" onClick={handleClose}>(close)</div>
            </div>
            <div className="image-container" onClick={handleNextImage}>
                {/* only show arrows if there is more than one image */}
                {project.imageSources.length > 1 && <div className="arrow arrow-left">
                    <svg className="w-6 h-6 text-primary arrow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                        <path stroke="#D22727" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"/>
                    </svg>
                </div>}
                {renderImages()}
                {/* only show arrows if there is more than one image */}
                {project.imageSources.length > 1 && <div className="arrow arrow-right" onClick={handleBackImage}>
                    <svg className="w-6 h-6 text-primary-red arrow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                        <path stroke="#D22727" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                    </svg>
                </div>}
            </div>
            <div className="images-index">{`${imageIndex + 1}/${project.imageSources.length}`}</div>
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