import style from '../style/ExperienceSection.module.css';
import Image from 'next/image';
import reactjs from '../../public/reactjs.png';
import styleMain from '../style/Page.module.css';
const Experience = () => {
    return (
        <div className={style.experience}>
            <div className={style.experience_container}>
                <div className={style.experience_title}>
                    <div className={styleMain.title}>Experiences</div>
                    <div className={styleMain.sub_title}>Here are some of my experiences.</div>
                </div>
                <div className={style.experience_component}>
                    <ul className={style.menu}>
                        <li className={style.item}>
                            <div className={style.line_space}>
                                <span className={style.line_circle}></span>
                                <span className={style.main_line}></span>
                            </div>
                            <div className={style.tag}>
                                <div className={style.title_tag}>
                                    <div className={style.image_tag}>
                                        <Image alt="" src={reactjs}></Image>
                                    </div>
                                    <div className={style.title}>
                                        <div className={style.main_title}>
                                            Frontend Engineer Intern
                                        </div>
                                        <div className={style.sub_title}>Neurobit</div>
                                        <div className={style.date_title}>June 2023 - Nov 2023</div>
                                    </div>
                                </div>
                                <div className={style.content}>
                                    <span className={style.main_content}>
                                        Enhanced user experiences on Neurobit PSG & Hybrid, Portals
                                        by resolving bugs & reduced load time by 40%. Built Neurobit
                                        Analytics portal using React Js with seamless interaction of
                                        REST APIs using AXIOS optimized with React Query. Refactored
                                        previous code to TypeScript, updated with new dependency and
                                        integrated Vite with Jest for Unit Testing.
                                    </span>
                                    <br />
                                    <div className={style.skill}>
                                        <b>Skills:</b>
                                        <div className={style.skill_ls}>
                                            <div className={style.skill_name}>ReactJS,</div>
                                            <div className={style.skill_name}>Redux,</div>
                                            <div className={style.skill_name}>NodeJs,</div>
                                            <div className={style.skill_name}>HTML,</div>
                                            <div className={style.skill_name}>CSS,</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={style.item}>
                            <div className={style.line_space}>
                                <span className={style.line_circle}></span>
                                <span className={style.main_line}></span>
                            </div>
                            <div className={style.tag}>
                                <div className={style.title_tag}>
                                    <div className={style.image_tag}>
                                        <Image alt="" src={reactjs} width={50} height={50}></Image>
                                    </div>
                                    <div className={style.title}>
                                        <div className={style.main_title}>
                                            Frontend Engineer Intern
                                        </div>
                                        <div className={style.sub_title}>Neurobit</div>
                                        <div className={style.date_title}>June 2023 - Nov 2023</div>
                                    </div>
                                </div>
                                <div className={style.content}>
                                    <span className={style.main_content}>
                                        Enhanced user experiences on Neurobit PSG & Hybrid, Portals
                                        by resolving bugs & reduced load time by 40%. Built Neurobit
                                        Analytics portal using React Js with seamless interaction of
                                        REST APIs using AXIOS optimized with React Query. Refactored
                                        previous code to TypeScript, updated with new dependency and
                                        integrated Vite with Jest for Unit Testing.
                                    </span>
                                    <br />
                                    <div className={style.skill}>
                                        <b>Skill:</b>
                                        <div className={style.skill_ls}>
                                            <div className={style.skill_name}>ReactJS</div>
                                            <div className={style.skill_name}>Redux</div>
                                            <div className={style.skill_name}>NodeJs</div>
                                            <div className={style.skill_name}>HTML</div>
                                            <div className={style.skill_name}>CSS</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default Experience;
