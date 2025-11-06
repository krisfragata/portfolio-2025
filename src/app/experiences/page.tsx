'use client';
import React, { JSX, useState } from "react";
import { Work, works } from "./work_list";
import { Education, educationList } from "./education_list";
import EducationModal from "@/components/EducationModal";

const Experiences: React.FC = () => {
    // state trackers
    const [isEducationExpanded, setIsEducationExpanded] = useState<boolean>(true);
    const [isEducationModalOpen, setIsEducationModalOpen] = useState<boolean>(false);
    const [isWorkExpanded, setIsWorkExpanded] = useState<boolean>(true);
    const [isWorkModalOpen, setIsWorkModalOpen] = useState<boolean>(false);

    /**
     * 
     * @returns {JSX} - component containing education list
     */
    const renderEducationList = () => {
      return  <div className="experiences-list-container">
        <ul className="">{renderEducationListItems}</ul>
        <div 
            className="more-button"
            onClick={() => {
                const isOpen = isEducationModalOpen;
                setIsEducationModalOpen(!isOpen);
            }}
        >
            (more info)
        </div>
      </div>
    }

    /**
     * @description loops through education list and returns numbered list
     * 
     */
    const renderEducationListItems = educationList.map((edu, index) => {
        return <li
           className="experiences-list-item" 
           key={index}
           value={edu.id}
        ><span className="text-primary list-numbers-container">{`0${index}`}</span>{`${edu.schoolName}`}</li>
    });

    /**
     * @returns {JSX} - education modal component
     */
    const renderEducationInfoModal = () => {
        return <EducationModal 
            educationList={educationList}
            isModalOpen={isEducationModalOpen}
            setIsModalOpen={setIsEducationModalOpen}
            extraStyling=""
        />
    }
    
    /**
     * @returns {JSX} - component containing work list
     */
    const renderWorkList = () => {
        return <div className="experiences-list-container">
        <ul className="">{renderWorkListItems}</ul>
        <div 
            className="more-button"
            onClick={() => {
                const isOpen = isWorkModalOpen;
                setIsWorkModalOpen(!isOpen);
            }}
        >
            (more info)
        </div>
      </div>
    }
    /**
     * @description loops through work list and returns numbered list
     *
     */
    const renderWorkListItems = works.map((work, index) => {
        return <li
            className="experiences-list-item"
            key={index}
            value={work.id}
        ><span className="text-primary list-numbers-container">{`0${index}`}</span>{`${work.companyName}`}</li>
    });
    return (
        <div className="left-main-text">
            <ul className="edu-work-icons">
                <li 
                    className="experiences-icon"
                    onClick={() => {
                        const isExpanded = isEducationExpanded;
                        setIsEducationExpanded(!isExpanded);
                    }}
                >{`> EDUCATION`}</li>
                {
                    isEducationExpanded && renderEducationList()
                }
                <li 
                    className="experiences-icon"
                    onClick={() => {
                        const isExpanded = isWorkExpanded;
                        setIsWorkExpanded(!isExpanded);
                    }}
                >{`> WORK`}</li>
                {
                    isWorkExpanded && renderWorkList()
                }
            </ul>
            {renderEducationInfoModal()}
        </div>
    );
};

export default Experiences