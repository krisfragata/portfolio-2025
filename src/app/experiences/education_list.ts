export interface Education {
    schoolName: string;
    years: string;
    description: string;
    id: string;
}

export const educationList:Education[] = [
    {
        schoolName: 'University of London',
        years: '2025 - present',
        description: "I am currently undergoing a bachelor’s degree in Computer Science at University of London with a focus on Data Science and Machine Learning.",
        id: 'uni_london',
    },
    {
        schoolName: 'Codesmith',
        years: '2023 - 2024',
        description: "I studied software engineering fundamentals at Codesmith Software Engineering Bootcamp.",
        id: 'codesmith',
    },
    {
        schoolName: 'Washington University in St. Louis',
        years: '2017 - 2020',
        description: "I studied Fine Arts and Design at Washington University in St. Louis and gained introductory knowledge of Computer Science",
        id: 'washu'
    },
    {
        schoolName: 'Pikesville High School',
        years: '2013 - 2017',
        description: "I graduated as valedictorian at Pikesville High School.",
        id: 'phs'
    }
]