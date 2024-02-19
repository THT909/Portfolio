import style from '../style/Education.module.css';
import Image from 'next/image';
import UTH from '../../public/UHT_logo.jpg';
import styleMain from '../style/Page.module.css';
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
                        <li className={style.item}>
                            <div className={style.tag}>
                                <div className={style.title_tag}>
                                    <div className={style.image_tag}>
                                        <Image alt="" src={UTH} width={50} height={50}></Image>
                                    </div>
                                    <div className={style.title}>
                                        <div className={style.main_title}>
                                            Ho Chi Minh City University of Transport
                                        </div>
                                        <div className={style.sub_title}>
                                            Batch 19, specializing in Information Technology.
                                        </div>
                                        <div className={style.date_title}>9/2019 - 12/2023</div>
                                    </div>
                                </div>
                                <div className={style.grade}>
                                    <div className={style.grade_title}>Grade: </div>{' '}
                                    <div>2,7 Gpa</div>
                                </div>
                                <div className={style.content}>
                                    <span className={style.main_content}>
                                        After 4 years, I delved into courses like Data Structures
                                        and Algorithms, Introduction to Programming, and Computer
                                        Architecture. Through these experiences, I not only gained
                                        technical knowledge but also developed problem-solving
                                        skills and shaped my career interests.
                                    </span>
                                </div>
                            </div>
                            <div className={style.line_space}>
                                <span className={style.line_circle}></span>
                                <span className={style.main_line}></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default Education;
