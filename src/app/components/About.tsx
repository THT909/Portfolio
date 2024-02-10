import style from '../style/About.module.css';
import { Background } from '../utils/utils';
const About = () => {
    return (
        <div className={style.about}>
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
                            I am a motivated and versatile individual, always eager to take on new
                            challenges. With a passion for learning I am dedicated to delivering
                            high-quality results. With a positive attitude and a growth mindset, I
                            am ready to make a meaningful contribution and achieve great things.
                        </div>
                        <div>
                            <a href="#" className={style.btn_check_resume}>
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
