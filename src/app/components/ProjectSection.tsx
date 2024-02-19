import style from '../style/ProjectSection.module.css';
import Image from 'next/image';
import styleMain from '../style/Page.module.css';

import appNote from '../../public/project/Note_app.png';
import bookingCare from '../../public/project/Booking_care.png';
import music from '../../public/project/Music.png';
import weather from '../../public/project/Weather_app.png';
import theBand from '../../public/project/The_band.png';
import thisPage from '../../public/project/This_page.png';

const Project = () => {
    return (
        <div id="project" className={style.Project}>
            <div className={style.project_title}>
                <div className={styleMain.title}>Project</div>
                <div className={styleMain.sub_title}>Here are some of my Experiences.</div>
            </div>
            <div className={style.project_component}>
                <div className={style.project_content}>
                    <div className={style.tag}>
                        <div className={style.image}>
                            <Image alt="" src={appNote}></Image>
                        </div>
                        <div className={style.skill_ls}>
                            <div className={style.skill_tag}>Java</div>
                            <div className={style.skill_tag}>XML</div>
                            <div className={style.skill_tag}>Fire base</div>
                            <div className={style.skill_tag}>Android Studio</div>
                        </div>
                        <div className={style.text_component}>
                            <div className={style.project_name}>Note app</div>
                            <div className={style.project_day}>12/2023 - 1/2024</div>
                            <div className={style.description}>
                                The Note application is developed in Java with a simple interface,
                                utilizing Firebase for storage and user authentication. Ensuring
                                stable performance, I enhanced skills in data storage and user
                                authentication during development.
                            </div>
                        </div>
                        <div className={style.btn_container}>
                            <a
                                href="https://github.com/THT909/Notes_application"
                                className={style.btn_project}
                            >
                                View
                            </a>
                        </div>
                    </div>
                    <div className={style.tag}>
                        <div className={style.image}>
                            <Image alt="" src={bookingCare}></Image>
                        </div>
                        <div className={style.skill_ls}>
                            <div className={style.skill_tag}>ReactJs</div>
                            <div className={style.skill_tag}>Html</div>
                            <div className={style.skill_tag}>NodeJs</div>
                            <div className={style.skill_tag}>Css</div>
                            <div className={style.skill_tag}>Bootstrap</div>
                            <div className={style.skill_tag}>MySql</div>
                            <div className={style.skill_tag}>Redux</div>
                            <div className={style.skill_tag}>Express</div>
                            <div className={style.skill_tag}>Axios</div>
                        </div>
                        <div className={style.text_component}>
                            <div className={style.project_name}>Booking care</div>
                            <div className={style.project_day}>5/2023 - 10/2023</div>
                            <div className={style.description}>
                                The Booking Care Appointment Booking project is a sophisticated web
                                application. The frontend is built using ReactJS, Redux, Axios,
                                Bootstrap, SCSS, and HTML. The backend is developed with NodeJS,
                                MySQL, Express, and tested using Postman. Throughout the development
                                process, I not only acquired programming skills but also gained
                                in-depth understanding of web development models and project
                                management.
                            </div>
                        </div>
                        <div className={style.btn_container}>
                            <a
                                href="https://github.com/THT909/Project_SERN"
                                className={style.btn_project}
                            >
                                View
                            </a>
                        </div>
                    </div>
                    <div className={style.tag}>
                        <div className={style.image}>
                            <Image alt="" src={music}></Image>
                        </div>
                        <div className={style.skill_ls}>
                            <span className={style.skill_tag}>Html</span>
                            <span className={style.skill_tag}>Css</span>
                            <span className={style.skill_tag}>JavaScrip</span>
                            <span className={style.skill_tag}>Local Storage</span>
                        </div>
                        <div className={style.text_component}>
                            <div className={style.project_name}>Music web app </div>
                            <div className={style.project_day}>12/2022</div>
                            <div className={style.description}>
                                My Web App Music, built with HTML, JS, and CSS, features a simple
                                interface and functionality, serving both educational and personal
                                use purposes.
                            </div>
                        </div>
                        <div className={style.btn_container}>
                            <a
                                href="https://musicforme909.netlify.app/"
                                className={style.btn_project}
                            >
                                View
                            </a>
                        </div>
                    </div>
                    <div className={style.tag}>
                        <div className={style.image}>
                            <Image alt="" src={theBand}></Image>
                        </div>
                        <div className={style.skill_ls}>
                            <span className={style.skill_tag}>Html</span>
                            <span className={style.skill_tag}>Css</span>
                            <span className={style.skill_tag}>JavaScript</span>
                        </div>
                        <div className={style.text_component}>
                            <div className={style.project_name}>The band</div>
                            <div className={style.project_day}>8/2022</div>
                            <div className={style.description}>
                                This is a simple static website I created when I first started
                                learning HTML, CSS, and JavaScript.
                            </div>
                        </div>
                        <div className={style.btn_container}>
                            <a
                                href="https://github.com/THT909/The_band"
                                className={style.btn_project}
                            >
                                View
                            </a>
                        </div>
                    </div>
                    <div className={style.tag}>
                        <div className={style.image}>
                            <Image alt="" src={weather}></Image>
                        </div>
                        <div className={style.skill_ls}>
                            <span className={style.skill_tag}>Html</span>
                            <span className={style.skill_tag}>Css</span>
                            <span className={style.skill_tag}>API</span>
                        </div>
                        <div className={style.text_component}>
                            <div className={style.project_name}>Weather web app</div>
                            <div className={style.project_day}>9/2022</div>
                            <div className={style.description}>
                                My Weather Forecast app, fueled by the OpenWeather API, refines my
                                skills in API interaction and applies programming knowledge learned
                                previously.
                            </div>
                        </div>
                        <div className={style.btn_container}>
                            <a
                                href="https://63103eb7c014d2192e0172db--my-weather-909.netlify.app/"
                                className={style.btn_project}
                            >
                                View
                            </a>
                        </div>
                    </div>
                    <div className={style.tag}>
                        <div className={style.image}>
                            <Image alt="" src={thisPage}></Image>
                        </div>
                        <div className={style.skill_ls}>
                            <span className={style.skill_tag}>NexJs</span>
                            <span className={style.skill_tag}>Html</span>
                            <span className={style.skill_tag}>Css</span>
                        </div>
                        <div className={style.text_component}>
                            <div className={style.project_name}>This page</div>
                            <div className={style.project_day}>1/2024-2/2024</div>
                            <div className={style.description}>
                                This page is the current website you are viewing. I used Next.js and
                                pure CSS to create it. In addition to showcasing my skills for you,
                                it also serves the purpose of reinforcing my existing knowledge and
                                gaining hands-on experience in coding with Next.js.
                            </div>
                        </div>
                        <div className={style.btn_container}>
                            <a href="" className={style.btn_project}>
                                View
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Project;
