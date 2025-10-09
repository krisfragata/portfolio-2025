interface Project {
    title: string;
    year: string;
    description: string[];
    githubLink: string;
    imageSources: string[];
    plans: string;
    figma: string;
    otherLinks: Link[];
}

interface Link {
    label: string;
    href: string;
}

const projects:Project[] = [
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
        title: 'this.portfolio',
        year: '2025',
        description: [
            "this.portfolio ;) is a software and art portfolio designed from scratch with the goal of summarizing, to the best of my ability, all my most impressive work.",
            "The design of this portfolio went through a few iterations which can be seen on the figma link listed on the left (below for mobile). I struggled with determining how to display the multiple disciplines that I take part in; software, music, writing, photography. Ultimately, I decided on a design that was clean but still expressed my personality both because I felt that simplicity would help drive progress towards a complete portfolio and to reduce the brain clutter that comes with taking on a multi-disciplinary portfolio. What helped most was grouping my projects into 2 simple categories, software and art.",
            "The implementation was made with NextJS 15, typescript, React and vanilla CSS. After a couple years of working with component libraries and the like, I found this project to be a refreshing experience, allowing me to appreciate the simplicity and power of TSX + vanilla CSS.",
            "This is the first project I'm embarking on since my recent unemployment. In order to stay motivated, I decided to continue the organizational habits I kept from my last role. In the links section you'll find the Jira Kanban Board I am using to organize this project (as well as other projects) and my Daily Standup Spreadsheet."
        ],
        githubLink: 'https://github.com/krisfragata/portfolio-2025',
        figma: 'https://www.figma.com/design/YbeBREcMmnx4Rc5NnjY9uB/PORTFOLIO-2024?node-id=1-2&p=f&t=I7weaie9PBFcH5DR-0',
        imageSources: [],
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
        title: "What's The Flow Web Scraper",
        year: '2024',
        description: [
            "What's the Flow Web Scraper was part of an overarching idea to build a mobile River Flow Tracking App for Raft Guides. It was built primarily as a foray into the Golang programming language.", 
            "I quite enjoyed Go's error handling and type handling. I found the language to be robust, clean, and I found it refreshing to be able to avoid compiling errors before they happened (looking at you, Typescript). In comparison to the two languages I had extensive experience in (Java, Javascript/Typescript), I found go to be the lovely in-between. Go's package management is reminiscent to Java but isn't as locked into Object Oriented Programming and was perfect for a small project like this. And while Typescript is also statically typed, I find that the Typescript/Javascript un-opinionated workflow is at times, a detriment when starting a small project. Overall, this experience helped me gain better language evaluation skills and understanding of project requirements.",
            "However, if I were to do the project again, with the better understanding I have of the Go, I would organize the project in a way that aligns with the Go intentions."
        ],
        githubLink: 'https://github.com/krisfragata/flow-scraper-bridge/tree/main',
        imageSources: [],
        plans: "Currently, there is no plan to continue the What's the Flow mobile application but perhaps this application can be leveraged in other ways.",
        figma: 'NA',
        otherLinks: [],
    },
    {
        title: 'Svisualize',
        year: '2023',
        description: [
            "Svisualize is a Svelte component visualizer built for developers. The VS Code extension allows developers to see the shape of their web application as they code. Svisualize was developed by a team of 4 under an agile workflow.",
            "The implementation was done using Typescript, Svelte, and D3.js for generating a dynamic, interactive component tree, and Node file system library. I enjoyed this project as Svelte was a new framework for me. Working with Svelte has allowed me to see that most Javascript frameworks share many common grounds that can applied to each other. From a soft skills point of view, this project helped develop my skills as a mentor. Particularly, a mentor that can point their team members in the right direction without doing the problem solving for them.",
            "A challenge that my team and I found was the lack of documentation for Svelte and D3.js which made implementation slow and cumbersome. We had started the project with the focus of exploring new Javascript frameworks but without this goal, if I were to do this again, I would choose either a more compatible framework for D3.js or a more compatible data visualization library for Svelte.",
            "For future implementation, I would also suggest a more robust and detailed commit message structure to aid in maintenance and readability.",
            "Feel free to check out the landing page for the application on the links to the left (or below for mobile)."
        ],
        githubLink: 'NA',
        imageSources: [],
        plans: "There are currently no plans to expand on Svisualize, but future implementors are welcome!",
        figma: 'NA',
        otherLinks: [{
            label: 'Landing Page',
            href: 'https://svisualize.dev/'
        }],
    }, 
    {
        title: 'Daily Dose',
        year: '2020',
        description: [
            "'Daily Dose is a digital repository of Sol Lewitt's Wall Drawings, framed as a tool to form creative habits' - Andriana Levytsky, Designer.",
            "I developed the HTML5 Canvas functionality in Daily Dose. During the project, I worked with designer, Andriana Levytsky, to create the interactive gallery seen in the links section. This was my first collaborative coding project, and the project that birthed my love for programming.",
            "I found HTML5 Canvas to be frustrating but rewarding. It's finnicky, but also so simple and with the right logic, and math, one can so many fun things as seen in this project. This project was made very early on in my programming journey so if I were to do it again, I would do a better job of documenting and structuring the code to be more readable and maintainable. Lastly, this project also taught me the necessary skills to communicate and translate the needs of a designer into the desired output."
        ],
        githubLink: 'https://github.com/andrianalevytsky/dailydose',
        imageSources: [],
        plans: "There are currently no plans to expand on the Wall Drawings but this is a project I would gladly expand on in the future.",
        figma: 'NA',
        otherLinks: [{
            label: "Daily Dose site",
            href: "https://alevytsky.work/daily-dose"
        }],
    }
];

export default projects;