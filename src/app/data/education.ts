export type Education = {
    institution: string;
    degree: string;
    period: string;
    classification: string;
    description: string;
    /** Maps to an image import in the Education component */
    logoKey: 'UTH';
};

export const educations: Education[] = [
    {
        institution: 'Ho Chi Minh City University of Transport',
        degree: 'Batch 19, specializing in Information Technology.',
        period: '9/2019 - 12/2023',
        classification: 'Good',
        description:
            'After 4 years, I delved into courses like Data Structures and Algorithms, Introduction to Programming, and Computer Architecture. Through these experiences, I not only gained technical knowledge but also developed problem-solving skills and shaped my career interests.',
        logoKey: 'UTH',
    },
];
