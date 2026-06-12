import type { StaticImageData } from 'next/image';

import appNote     from '../../public/project/Note_app.png';
import bookingCare from '../../public/project/Booking_care.png';
import music       from '../../public/project/Music.png';
import weather     from '../../public/project/Weather_app.png';
import theBand     from '../../public/project/The_band.png';
import thisPage    from '../../public/project/This_page.png';

export type Project = {
    name: string;
    period: string;
    description: string;
    skills: string[];
    image: StaticImageData;
    link: string;
};

export const projects: Project[] = [
    {
        name: 'Note app',
        period: '12/2023 - 1/2024',
        description:
            'The Note application is developed in Java with a simple interface, utilizing Firebase for storage and user authentication. Ensuring stable performance, I enhanced skills in data storage and user authentication during development.',
        skills: ['Java', 'XML', 'Fire base', 'Android Studio'],
        image: appNote,
        link: 'https://github.com/THT909/Notes_application',
    },
    {
        name: 'Booking care',
        period: '5/2023 - 10/2023',
        description:
            'The Booking Care Appointment Booking project is a sophisticated web application. The frontend is built using ReactJS, Redux, Axios, Bootstrap, SCSS, and HTML. The backend is developed with NodeJS, MySQL, Express, and tested using Postman. Throughout the development process, I not only acquired programming skills but also gained in-depth understanding of web development models and project management.',
        skills: ['ReactJs', 'Html', 'NodeJs', 'Css', 'Bootstrap', 'MySql', 'Redux', 'Express', 'Axios'],
        image: bookingCare,
        link: 'https://github.com/THT909/Project_SERN',
    },
    {
        name: 'Music web app',
        period: '12/2022',
        description:
            'My Web App Music, built with HTML, JS, and CSS, features a simple interface and functionality, serving both educational and personal use purposes.',
        skills: ['Html', 'Css', 'JavaScrip', 'Local Storage'],
        image: music,
        link: 'https://musicforme909.netlify.app/',
    },
    {
        name: 'The band',
        period: '8/2022',
        description:
            'This is a simple static website I created when I first started learning HTML, CSS, and JavaScript.',
        skills: ['Html', 'Css', 'JavaScript'],
        image: theBand,
        link: 'https://github.com/THT909/The_band',
    },
    {
        name: 'Weather web app',
        period: '9/2022',
        description:
            'My Weather Forecast app, fueled by the OpenWeather API, refines my skills in API interaction and applies programming knowledge learned previously.',
        skills: ['Html', 'Css', 'API'],
        image: weather,
        link: 'https://63103eb7c014d2192e0172db--my-weather-909.netlify.app/',
    },
    {
        name: 'This page',
        period: '1/2024-2/2024',
        description:
            'This page is the current website you are viewing. I used Next.js and pure CSS to create it. In addition to showcasing my skills for you, it also serves the purpose of reinforcing my existing knowledge and gaining hands-on experience in coding with Next.js.',
        skills: ['NexJs', 'Html', 'Css'],
        image: thisPage,
        link: '',
    },
];
