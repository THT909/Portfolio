export type Skill = {
    name: string;
    /** Key into the centralized imageMap in utils/images.ts */
    imageKey: string;
    /** When true, the image wrapper gets a white background */
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
            { name: 'React Js',   imageKey: 'skill-react' },
            { name: 'Redux',      imageKey: 'skill-redux' },
            { name: 'Next Js',    imageKey: 'skill-nextjs',    whiteBg: true },
            { name: 'HTML',       imageKey: 'skill-html' },
            { name: 'CSS',        imageKey: 'skill-css' },
            { name: 'JavaScript', imageKey: 'skill-javascript' },
            { name: 'BootStrap',  imageKey: 'skill-bootstrap' },
        ],
    },
    {
        category: 'Backend',
        items: [
            { name: 'NestJs',     imageKey: 'skill-nestjs',    whiteBg: true },
            { name: 'NodeJs',     imageKey: 'skill-nodejs',    whiteBg: true },
            { name: 'Express',    imageKey: 'skill-express' },
            { name: 'JavaScript', imageKey: 'skill-javascript' },
            { name: 'Firebase',   imageKey: 'skill-firebase' },
            { name: 'MySQL',      imageKey: 'skill-mysql' },
        ],
    },
    {
        category: 'Android',
        items: [
            { name: 'Java',           imageKey: 'skill-java' },
            { name: 'XML',            imageKey: 'skill-xml' },
            { name: 'Android Studio', imageKey: 'skill-android-studio' },
            { name: 'Flutter',        imageKey: 'skill-flutter' },
        ],
    },
    {
        category: 'Other',
        items: [
            { name: 'Postman', imageKey: 'skill-postman' },
            { name: 'VS Code', imageKey: 'skill-vscode' },
            { name: 'Git',     imageKey: 'skill-git' },
            { name: 'GitHub',  imageKey: 'skill-github',  whiteBg: true },
            { name: 'Linux',   imageKey: 'skill-linux',   whiteBg: true },
            { name: 'Kafka',   imageKey: 'skill-kafka',   whiteBg: true },
        ],
    },
];
