import React from "react";
import { Project } from "./project-list";

interface ImageModalProps {
    project: Project; 
    setIsModalOpen: Function;
    isModalOpen: boolean;
}

const ImageModal: React.FC<ImageModalProps> = ({project, setIsModalOpen, isModalOpen}) => {

    const renderModal = () => {
        const modal = isModalOpen ? <div className="image-modal">
            <div className="image-container">

            </div>
            <div className="image-modal-buttons">
                <div>(more...)</div>
                <div>(close)</div>
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