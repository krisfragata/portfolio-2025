import { Education } from "@/app/experiences/education_list";
import React, { JSX } from "react"

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
     * @description handles rendering 'title' and 'description' information including school name and year
     * @returns {JSX[]}
     */
    const renderEducationInfo = educationList.map((edu: Education, index) => {
        return <div className="experience-info-item" key={index}>
           <div className="info-left" key={index}>
                <div className="experiences-title-section">
                    <p className="text-primary">{edu.schoolName}</p>
                    <p className="info-header">{edu.years}</p>
                </div>
            </div>  
            <div className="info-right">
                {
                    <p className="description-paragraph">{edu.description}</p>
                }
            </div>
        </div>
    })

    return (
       isModalOpen ? <div className={`info-modal ${extraStyling}`}>
            <div className="image-modal-actions">
                <div className="image-modal-button" onClick={handleClose}>(close)</div>
            </div>
            <div className="experience-modal-info-container">
                {
                   renderEducationInfo
                }
            </div>
       </div> : null
    )
}

export default EducationModal;