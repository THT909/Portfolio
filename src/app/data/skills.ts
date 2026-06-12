export type Skill = {
    name: string;
    /** Matches a named export in utils/image.tsx */
    imageKey: string;
    /** When true, the image wrapper needs a white background (mirrors existing inline style) */
    whiteBg?: boolean;
};

export type SkillCategory = {
    category: string;
    items: Skill[];
};

export const skills: SkillCategory[] = [
    {
        category: 'Frontend',
        items: [
            { name: 'React Js',   imageKey: 'React' },
            { name: 'Redux',      imageKey: 'Redux' },
            { name: 'Next Js',    imageKey: 'Nextjs',    whiteBg: true },
            { name: 'HTML',       imageKey: 'HTML' },
            { name: 'CSS',        imageKey: 'CSS' },
            { name: 'JavaScript', imageKey: 'Js' },
            { name: 'BootStrap',  imageKey: 'Bootstrap' },
        ],
    },
    {
        category: 'Backend',
        items: [
            { name: 'NestJs',     imageKey: 'NestJS',    whiteBg: true },
            { name: 'NodeJs',     imageKey: 'NodeJs',    whiteBg: true },
            { name: 'Express',    imageKey: 'Express' },
            { name: 'JavaScript', imageKey: 'Js' },
            { name: 'Firebase',   imageKey: 'Firebase' },
            { name: 'MySQL',      imageKey: 'MySQL' },
        ],
    },
    {
        category: 'Android',
        items: [
            { name: 'Java',           imageKey: 'Java' },
            { name: 'XML',            imageKey: 'XML' },
            { name: 'Android Studio', imageKey: 'As' },
            { name: 'Flutter',        imageKey: 'Flutter' },
        ],
    },
    {
        category: 'Other',
        items: [
            { name: 'Postman', imageKey: 'Postman' },
            { name: 'VS Code', imageKey: 'VSCode' },
            { name: 'Git',     imageKey: 'Git' },
            { name: 'GitHub',  imageKey: 'GitHub',  whiteBg: true },
            { name: 'Linux',   imageKey: 'Linux',   whiteBg: true },
            { name: 'Kafka',   imageKey: 'Kafka',   whiteBg: true },
        ],
    },
];
