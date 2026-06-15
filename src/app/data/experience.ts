export type Experience = {
    title: string;
    company: string;
    /** Key into the centralized imageMap in utils/images.ts */
    imageKey: string;
    period: string;
    description: string;
    skills: string[];
};

export const experiences: Experience[] = [
    {
        title: 'Frontend Intern',
        company: 'Titkul',
        imageKey: 'company-titkul',
        period: '09/2022 - 12/2022',
        description:
            'During my internship, I gained extensive knowledge of API and executed UI testing. I also became proficient in data input and contributed to project deployments. This experience enhanced my programming skills and provided a solid understanding of industry workflow processes.',
        skills: ['API', 'HTML', 'CSS'],
    },
    {
        title: 'BackEnd Intern',
        company: 'SGOD',
        imageKey: 'company-sgod',
        period: '03/2024 - 07/2024',
        description:
            'In this role, I had the opportunity to explore new technologies like TypeScript, MongoDB, and NestJS. I gained hands-on experience in backend development, learning how real-world systems are architected and how they function in practice. Additionally, this experience greatly enhanced my teamwork skills as I collaborated closely with my colleagues to solve complex problems and build robust solutions.',
        skills: ['NestJS', 'MongoDB', 'API', 'Jwt'],
    },
    {
        title: 'BackEnd Fresher',
        company: 'SGOD',
        imageKey: 'company-sgod',
        period: '08/2024 - 12/2024',
        description:
            'During my time working here, I gained valuable insights into backend development, particularly around microservices. I had the chance to explore technologies such as Docker, Kafka, and gRPC, which deepened my understanding of system architecture and how scalable systems are built. This experience allowed me to apply these technologies in real-world scenarios, enhancing my technical skills while also improving my problem-solving and collaboration abilities within the team.',
        skills: ['NestJS', 'MongoDB', 'API', 'Kafka', 'Grpc', 'Mongo', 'Redis', 'Microservice,...'],
    },
];
