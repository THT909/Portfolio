import Image from 'next/image';
import style from '../style/Education.module.css';
import styleMain from '../style/Page.module.css';
import { educations } from '../data/education';
import { getImagePath } from '../utils/images';

const Education = () => {
    return (
        <div id="education" className={style.experience}>
            <div className={style.experience_container}>
                <div className={style.experience_title}>
                    <div className={styleMain.title}>Education</div>
                    <div className={styleMain.sub_title}>Here are some of my experiences.</div>
                </div>
                <div className={style.experience_component}>
                    <ul className={style.menu}>
                        {educations.map((edu, index) => (
                            <li key={index} className={style.item}>
                                <div className={style.tag}>
                                    <div className={style.title_tag}>
                                        <div className={style.image_tag}>
                                            <Image
                                                src={getImagePath(edu.imageKey)}
                                                alt={edu.institution}
                                                width={50}
                                                height={50}
                                            />
                                        </div>
                                        <div className={style.title}>
                                            <div className={style.main_title}>
                                                {edu.institution}
                                            </div>
                                            <div className={style.sub_title}>
                                                {edu.degree}
                                            </div>
                                            <div className={style.date_title}>{edu.period}</div>
                                        </div>
                                    </div>
                                    <div className={style.grade}>
                                        <div className={style.grade_title}>Degree classification: </div>{' '}
                                        <div>{edu.classification}</div>
                                    </div>
                                    <div className={style.content}>
                                        <span className={style.main_content}>
                                            {edu.description}
                                        </span>
                                    </div>
                                </div>
                                <div className={style.line_space}>
                                    <span className={style.line_circle}></span>
                                    <span className={style.main_line}></span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default Education;
