export interface Work {
    companyName: string;
    years: string;
    position: string;
    description: string[];
    id: string;
}

export const work:Work[] = [
   {
    companyName: 'Associated Environmental Systems',
    years: 'May 2024 - Sep 2025',
    position: 'Full Stack Developer',
    description: [
        "I worked on improving the reliability and scalability of OT system architecture and internal tools including a Golang-based Watchdog microservice that orchestrates containers across multiple process controllers, reducing downtime and enabling proactive recovery.",
        "This involved multiple projects and iteratively working with higher ups, using feedback to tailor solutions to clients’ needs. During this time I mostly worked with the following tools and languages: Golang, Javascript, PostgreSQL, MongoDB, NATS.io, Docker, React, and Redux. I was also able to gain experience in working with TimescaleDB (now TigerData), Swagger UI and gain foundational knowledge of communication protocols such as MODBUS TCP/RTU.",
    ],
    id: 'AES'
   },
   {
    companyName: 'Crab Apple Whitewater',
    years: 'May 2021 - Oct 2023',
    position: 'Trip Leader, Raft Guide, Photographer',
    description: [
        "After 2 years as a raft guide, I was given the position of Trip Leader for the Class III trips. This involved communicating safety procedures to guests as well as quickly strategizing new routes and procedures in case of unexpected obstacles on the river and effectively communicating changes to fellow guides. Most importantly, I delivered exceptional customer service resulting in returning customers and gathering an average of 15 5-star reviews on Trip Advisor and Google a season.",
        "As a photographer, I innovated the photo delivery system to clients resulting in a 50% boost in efficiency and reduced wait times for photo retrieval.",
        "At Crab Apple, I was able to strengthen my ability to listen, diagnose problems efficiently, and stay empathetic under pressure.",
    ],
    id: 'crab_apple'
   },
   {
    companyName: 'Four Seasons Vail',
    years: 'Dec 2018 - Mar 2020',
    position: 'Server, Bartender',
    description: [
        "I started at the resort as a back server and quickly worked my way up to server and eventually bartender at the Flame restaurant. In these roles, I focused on delivering memorable dining experiences through genuine customer service, strong communication, and deep knowledge of both the menu and the resort’s offerings.",
        "I took pride in creating a welcome atmosphere and going above and beyond to make sure each guest left satisfied. Whether it was pairing wines, crafting cocktails, or resolving concerns on the spot, I learned how to anticipate guests’ needs and maintain a high standard of hospitality in a fast-paced environment.",
    ],
    id: 'four_seasons'
   }, 
   {
    companyName: 'Washington University in St. Louis',
    years: 'Feb 2018 - Sep 2018',
    position: 'Orientation Leader (SOAR)',
    description: [
        "As an orientation leader, I welcomed new students to campus the summer before classes started. I helped make their transition as smooth and positive as possible by leading group activities and icebreakers, answering questions from both students and parents, and making sure everyone felt supported and included.",
        "I really enjoyed getting to build connections, share my experience, and help new students start their college journey with confidence and excitement.",
    ],
    id: 'washu'
   }
];
