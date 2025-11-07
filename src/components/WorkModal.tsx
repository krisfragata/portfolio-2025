import { Work } from "@/app/experiences/work_list";
import React, { JSX } from "react"

interface WorkModalProps {
    workList: Work[];
    isModalOpen: boolean;
    setIsModalOpen: Function;
    extraStyling: string;   
}

const WorkModal: React.FC<WorkModalProps> = ({workList, isModalOpen, setIsModalOpen, extraStyling}) => {

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
    const renderWorkInfo = workList.map((work: Work, index) => {
        return <div className="experience-info-item" key={index}>
           <div className="info-left" key={index}>
                <div className="experiences-title-section">
                    <p className="text-primary">{work.companyName}</p>
                    <p className="">{work.years}</p>
                    <p className="info-header font-semibold">{work.position}</p>
                </div>
            </div>  
            <div className="info-right">
                {
                    work.description.map((line, i) => (
                        <p className="description-paragraph" key={i}>{line}</p>
                    ))   
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
                   renderWorkInfo
                }
            </div>
       </div> : null
    )
}

export default WorkModal;