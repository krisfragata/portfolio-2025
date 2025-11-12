'use client';
import React, { JSX, useState } from "react";
import { Work, works } from "./work_list";
import { Education, educationList } from "./education_list";
import EducationModal from "@/components/EducationModal";
import WorkModal from "@/components/WorkModal";

const Experiences: React.FC = () => {
    // state trackers
    const [isEducationExpanded, setIsEducationExpanded] = useState<boolean>(true);
    const [isEducationModalOpen, setIsEducationModalOpen] = useState<boolean>(false);
    const [isWorkExpanded, setIsWorkExpanded] = useState<boolean>(true);
    const [isWorkModalOpen, setIsWorkModalOpen] = useState<boolean>(false);
    const [educationModalZIndex, setEducationModalZIndex] = useState<string>('');
    const [workModalZIndex, setWorkModalZindex] = useState<string>('');

    /**
     * 
     * @returns {JSX} - component containing education list
     */
    const renderEducationList = () => {
      return  <div className="experiences-list-container mb-2">
        <ul className="">{renderEducationListItems}</ul>
        <div 
            className="more-button"
            onClick={() => {
                sendInfoToFront('edu');
                const isOpen = isEducationModalOpen;
                setIsEducationModalOpen(!isOpen);
            }}
        >
            (more info...)
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
            extraStyling={educationModalZIndex}
        />
    }
    
    /**
     * @returns {JSX} - component containing work list
     */
    const renderWorkList = () => {
        return <div className="experiences-list-container mb-15">
        <ul className="">{renderWorkListItems}</ul>
        <div 
            className="more-button"
            onClick={() => {
                sendInfoToFront('work');
                const isOpen = isWorkModalOpen;
                setIsWorkModalOpen(!isOpen);
            }}
        >(more info...)</div>
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

    /**
     * @returns {JSX} - education modal component
     */
    const renderWorkInfoModal = () => {
        return <WorkModal 
            workList={works}
            isModalOpen={isWorkModalOpen}
            setIsModalOpen={setIsWorkModalOpen}
            extraStyling={workModalZIndex}
        />
    }

    /**
     * @description loops through modals and sets appropriate z index
     */
    const sendInfoToFront = (modal: string) => {
        if (modal === 'edu') {
            setWorkModalZindex('');
            setEducationModalZIndex('z-100');
        } else {
            setWorkModalZindex('z-100');
            setEducationModalZIndex('');
        }
    }

    return (
        <div className="left-main-text">
            <ul className="edu-work-icons">
                <li 
                    className="experiences-icon"
                    onClick={() => {
                        const isExpanded = isEducationExpanded;
                        setIsEducationExpanded(!isExpanded);
                    }}
                >{`EDUCATION`}</li>
                {
                    isEducationExpanded && renderEducationList()
                }
                <li 
                    className="experiences-icon"
                    onClick={() => {
                        const isExpanded = isWorkExpanded;
                        setIsWorkExpanded(!isExpanded);
                    }}
                >{`WORK`}</li>
                {
                    isWorkExpanded && renderWorkList()
                }
            </ul>
            {renderEducationInfoModal()}
            {renderWorkInfoModal()}
        </div>
    );
};

export default Experiences