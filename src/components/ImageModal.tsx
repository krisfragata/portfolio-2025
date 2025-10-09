import React from "react";
import { Project } from "../app/software-projects/project-list";

interface ImageModalProps {
    project: Project; 
    setIsModalOpen: Function;
    isModalOpen: boolean;
    extraStyling: string;
}

const ImageModal: React.FC<ImageModalProps> = ({project, setIsModalOpen, isModalOpen, extraStyling}) => {
    const handleClose = () => {
        setIsModalOpen(false);
    }
    const renderModal = () => {
        const modal = isModalOpen ? <div className={`image-modal ${extraStyling}`}>
            <div className="image-container">

            </div>
            <div className="image-modal-actions">
                <div className="image-modal-button">(more...)</div>
                <div className="image-modal-button" onClick={handleClose}>(close)</div>
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