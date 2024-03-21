import style from '../style/ExperienceSection.module.css';
import Image from 'next/image';
import reactjs from '../../public/reactjs.png';
import styleMain from '../style/Page.module.css';
const Experience = () => {
    return (
        <div id="experience" className={style.experience}>
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
                                        <div className={style.main_title}>Frontend Intern</div>
                                        <div className={style.sub_title}>Titkul</div>
                                        <div className={style.date_title}>09/2022 - 12/2022</div>
                                    </div>
                                </div>
                                <div className={style.content}>
                                    <span className={style.main_content}>
                                        During my internship, I gained extensive knowledge of API
                                        and executed UI testing. I also became proficient in data
                                        input and contributed to project deployments. This
                                        experience enhanced my programming skills and provided a
                                        solid understanding of industry workflow processes.
                                    </span>
                                    <br />
                                    <div className={style.skill}>
                                        <b>Skills:</b>
                                        <div className={style.skill_ls}>
                                            <div className={style.skill_name}>API,</div>
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
                                        <Image alt="" src={reactjs}></Image>
                                    </div>
                                    <div className={style.title}>
                                        <div className={style.main_title}>BackEnd Intern</div>
                                        <div className={style.sub_title}>SGOD</div>
                                        <div className={style.date_title}>03/2024 - now</div>
                                    </div>
                                </div>
                                <div className={style.content}>
                                    <span className={style.main_content}>Comming soon ,.....</span>
                                    <br />
                                    <div className={style.skill}>
                                        <b>Skills:</b>
                                        <div className={style.skill_ls}>
                                            <div className={style.skill_name}>NestJS,</div>
                                            <div className={style.skill_name}>MongoDB</div>
                                            <div className={style.skill_name}>API</div>
                                            <div className={style.skill_name}>Jwt</div>
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
