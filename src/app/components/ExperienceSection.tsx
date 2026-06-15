import Image from 'next/image';
import style from '../style/ExperienceSection.module.css';
import styleMain from '../style/Page.module.css';
import { experiences } from '../data/experience';
import { getImagePath } from '../utils/images';

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
                        {experiences.map((exp, index) => (
                            <li key={index} className={style.item}>
                                <div className={style.line_space}>
                                    <span className={style.line_circle}></span>
                                    <span className={style.main_line}></span>
                                </div>
                                <div className={style.tag}>
                                    <div className={style.title_tag}>
                                        <div className={style.image_tag}>
                                            <Image
                                                src={getImagePath(exp.imageKey)}
                                                alt={exp.company}
                                                width={50}
                                                height={50}
                                            />
                                        </div>
                                        <div className={style.title}>
                                            <div className={style.main_title}>{exp.title}</div>
                                            <div className={style.sub_title}>{exp.company}</div>
                                            <div className={style.date_title}>{exp.period}</div>
                                        </div>
                                    </div>
                                    <div className={style.content}>
                                        <span className={style.main_content}>
                                            {exp.description}
                                        </span>
                                        <br />
                                        <div className={style.skill}>
                                            <b>Skills:</b>
                                            <div className={style.skill_ls}>
                                                {exp.skills.map((skill, skillIndex) => (
                                                    <div key={skillIndex} className={style.skill_name}>
                                                        {skill}{skillIndex < exp.skills.length - 1 ? ',' : ''}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default Experience;
