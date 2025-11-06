import { Education } from "@/app/experiences/education_list";
import React from "react"

interface ExperiencesModalProps {
    educationList: Education[];
    isModalOpen: boolean;
    setIsModalOpen: Function;
    extraStyling: string;   
}

const EducationModal: React.FC<ExperiencesModalProps> = ({educationList, isModalOpen, setIsModalOpen, extraStyling}) => {

    /**
     * @description handle closing modal window
     */
    const handleClose = () => {
        setIsModalOpen(false);
    }

    /**
     * @description handles rendering 'title' information including school name and year
     */
    const renderTitleInfo = (edu: Education) => {
        <div className="info-left">
            <div className="experiences-title-section">
                <p className="text-primary">{edu.schoolName}</p>
                <p className="info-header">{edu.years}</p>
            </div>
        </div>
    }

    return (
       isModalOpen ? <div className={`info-modal ${extraStyling}`}>
            <div className="image-modal-actions">
                <div className="image-modal-button" onClick={handleClose}>(close)</div>
            </div>
            <div>

            </div>
       </div> : null
    )
}

export default EducationModal;