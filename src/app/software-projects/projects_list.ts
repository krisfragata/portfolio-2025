import portfolioGif from '@/../public/software-projects/portfolio.gif';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
// svisualize image imports
import svisualizeUpdate from '@/../public/software-projects/svisualize_update.gif';
import svisualizePhoto from '@/../public/software-projects/svisualize.png';
// daily dose image imports
import dailyDose1 from '@/../public/software-projects/daily_dose1.gif';
import dailyDose3 from '@/../public/software-projects/daily_dose3.gif'
import dailyDose4 from '@/../public/software-projects/daily_dose4.gif'


export interface Project {
    title: string;
    year: string;
    description: string[];
    githubLink: string;
    imageSources: StaticImport[];
    plans: string;
    figma: string;
    otherLinks: Link[];
    id: string;
}

interface Link {
    label: string;
    href: string;
}


export const projects:Project[] = [
    // {
    //     title: 'Music Through Data (in progress)',
    //     year: '2025',
    //     description: [
    //         ''
    //     ],
    //     githubLink: 'NA',
    //     imageSources: [],
    //     plans: '',
    //     figma: '',
    //     otherLinks: [],
    // },
    {
        title: 'this.Portfolio',
        year: '2025',
        description: [
            "this.Portfolio was designed from scratch with the goal of summarizing, to the best of my ability, all my most impressive work.",
            "It went through a few iterations which can be seen on the figma link listed on the left (above for mobile). I struggled with determining how to display the multiple disciplines that I take part in; software, music, writing, photography. Ultimately, I grouped my works into 2 simple categories, software and art.",
            "I decided on a design that was clean but still expressed my personality both because I felt that simplicity would help drive progress towards a complete portfolio and to reduce the brain clutter that comes with taking on a multi-disciplinary portfolio.",
            "This was made with NextJS 15, typescript, React and vanilla CSS.",
            "In the links section you'll find the Jira Kanban Board I am using to organize this project (as well as other projects) and my Daily Standup Spreadsheet."
        ],
        githubLink: 'https://github.com/krisfragata/portfolio-2025',
        figma: 'https://www.figma.com/design/YbeBREcMmnx4Rc5NnjY9uB/PORTFOLIO-2024?node-id=1-2&p=f&t=I7weaie9PBFcH5DR-0',
        imageSources: [portfolioGif],
        plans: "I'd like to eventually incorporate a small, platform, climbing game into the home page of this site. To implement it, I'm thinking of incorporating HTML5 Canvas or venture into Three.JS",
        otherLinks: [
            {
                label: "Jira Kanban",
                href: "https://rafthouseofficial.atlassian.net/jira/software/projects/PP/boards/1"
            },
            {
                label: "Daily Standup",
                href: "https://docs.google.com/spreadsheets/d/1OQFnopnFvUKSWVXVcS_JFpXz5dXvF2bc8bWRuYQ0DuE/edit?usp=sharing"
            }
        ],
        id: 'portfolio',
    },
    //  {
    //     title: 'Guitar Trainer (in progress)',
    //     year: '2025',
    //     description: [
    //         "Guitar Trainer is a work in progr"
    //     ],
    //     plans: '',
    //     githubLink: 'https://github.com/krisfragata/guitar-training-app',
    //     imageSources: [],
    //     figma: 'NA',
    //     otherLinks: [{
    //         label: "Kanban Board",
    //         href: "https://rafthouseofficial.atlassian.net/jira/software/projects/GTA/boards/7"
    //     }],
    // },
    {
        title: 'Svisualize',
        year: '2023',
        description: [
            "Svisualize is a Svelte component visualizer built for developers. Svisualize was developed by a team of 4 under an agile workflow.",
            "It was built with Typescript, Svelte, and D3.js. I enjoyed this project as Svelte was a new framework for me. Working with Svelte has allowed me to see that most Javascript frameworks share many common grounds that can applied to each other.",
            "A challenge that my team and I found was the lack of documentation for D3.js under Svelte which made implementation slow.",
            "For future implementation, I would implement a more robust and detailed commit message structure to aid in maintenance and readability. I would also choose either a more compatible framework for D3.js or a more compatible data visualization library for Svelte.",
            "I've linked the landing page on the links section to the left (or above for mobile)."
        ],
        githubLink: 'NA',
        imageSources: [svisualizeUpdate, svisualizePhoto],
        plans: "There are currently no plans to expand on Svisualize, but future implementors are welcome!",
        figma: 'NA',
        otherLinks: [{
            label: 'Landing Page',
            href: 'https://svisualize.dev/'
        }],
        id: 'svisualize',
    }, 
    //  {
    //     title: "What's The Flow Web Scraper",
    //     year: '2024',
    //     description: [
    //         "What's the Flow Web Scraper was part of an overarching idea to build a mobile River Flow Tracking App for Raft Guides. It was built primarily as a foray into the Golang programming language.", 
    //         "I quite enjoyed Go's error handling and type handling. I found the language to be robust, clean, and I found it refreshing to be able to avoid compiling errors before they happened (looking at you, Typescript). In comparison to the two languages I had extensive experience in (Java, Javascript/Typescript), I found go to be the lovely in-between. Go's package management is reminiscent to Java but isn't as locked into Object Oriented Programming and was perfect for a small project like this. And while Typescript is also statically typed, I find that the Typescript/Javascript un-opinionated workflow is at times, a detriment when starting a small project. Overall, this experience helped me gain better language evaluation skills and understanding of project requirements.",
    //         "However, if I were to do the project again, with the better understanding I have of the Go, I would organize the project in a way that aligns with the Go intentions."
    //     ],
    //     githubLink: 'https://github.com/krisfragata/flow-scraper-bridge/tree/main',
    //     imageSources: [],
    //     plans: "Currently, there is no plan to continue the What's the Flow mobile application but perhaps this application can be leveraged in other ways.",
    //     figma: 'NA',
    //     otherLinks: [],
    //     id: 'flow_scraper',
    // },
    {
        title: 'Daily Dose',
        year: '2020',
        description: [
            "<<Daily Dose is a digital repository of Sol LeWitt's Wall Drawings, framed as a tool to form creative habits>> - Andriana Levytsky, Graphic Designer.",
            "For Daily Dose, I worked with graphic designer, Andriana Levytsky, to create an interactive gallery using HTML5 Canvas and a bit of math.",
            "This was my first collaborative coding project, and the project that birthed my love for programming. I found HTML5 Canvas to be finnicky but rewarding. With the right logic and math one can so many fun things.",
            "This project was made very early on in my programming journey so if I were to do it again, I would do a better job of documenting and structuring the code to be more readable and maintainable. This project also taught me the necessary skills to communicate and translate the needs of a designer into the desired output."
        ],
        githubLink: 'https://github.com/andrianalevytsky/dailydose',
        imageSources: [dailyDose1, dailyDose3, dailyDose4],
        plans: "There are currently no plans to expand on the Wall Drawings but this is a project I would gladly expand on in the future.",
        figma: 'NA',
        otherLinks: [{
            label: "Daily Dose site",
            href: "https://andrianalevytsky.github.io/dailydose/"
        }],
        id: 'daily_dose',
    }
];
