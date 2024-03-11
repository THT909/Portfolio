import style from '../style/About.module.css';
import { Background } from '../utils/utils';
const About = () => {
    return (
        <div id="about" className={style.about}>
            <div className={style.pd}>
                <div className={style.main_content}>
                    <div className={style.right_content}>
                        <div className={style.title}>
                            Hi, I am
                            <br />
                            Trầm Hiệp Thành
                        </div>
                        <div className={style.sub}>
                            I am a<span> Web developer</span>
                        </div>
                        <div className={style.description}>
                            I am a recent graduate in Information Technology, eager to continuously
                            expand my experience and knowledge. I am a well-rounded individual with
                            a keen interest in the Information Technology field, particularly in
                            roles like Developer. I am actively seeking a position related to
                            Development in a professional work environment
                        </div>
                        <div className={style.btn}>
                            <a
                                href="https://drive.google.com/file/d/1j1mi5csCtL_BBz79TfjBZszEKTOdDjDE/view?usp=sharing"
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
