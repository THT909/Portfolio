import style from '../style/About.module.css';
import { Background } from '../utils/utils';
import { about } from '../data/about';

const About = () => {
    return (
        <div id="about" className={style.about}>
            <div className={style.pd}>
                <div className={style.main_content}>
                    <div className={style.right_content}>
                        <div className={style.title}>
                            Hi, I am
                            <br />
                            {about.name}
                        </div>
                        <div className={style.sub}>
                            I am a<span> {about.role}</span>
                        </div>
                        <div className={style.description}>
                            {about.description}
                        </div>
                        <div className={style.btn}>
                            <a
                                href={about.resumeUrl}
                                className={style.btn_check_resume}
                            >
                                Check resume
                            </a>
                        </div>
                    </div>
                    <div className={style.left_content}>
                        <div className={style.background_left}>
                            <Background />
                        </div>
                        <div className={style.image}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default About;
