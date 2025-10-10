import React from "react";
import { Project } from "../app/software-projects/project-list";

interface ImageModalProps {
    project: Project; 
    setIsModalOpen: Function;
    isModalOpen: boolean;
    extraStyling: string;
    handleOpenText: Function;
}

const ImageModal: React.FC<ImageModalProps> = ({project, setIsModalOpen, isModalOpen, extraStyling, handleOpenText}) => {
    const handleClose = () => {
        setIsModalOpen(false);
    }
    const renderModal = () => {
        const modal = isModalOpen ? <div className={`image-modal ${extraStyling}`}>
            <div className="image-modal-actions">
                <div className="image-modal-button" onClick={() => handleOpenText()}>(more info...)</div>
                <div className="image-modal-button" onClick={handleClose}>(close)</div>
            </div>
            <div className="image-container">

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