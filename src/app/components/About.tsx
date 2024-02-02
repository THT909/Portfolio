import style from '../style/About.module.css';

const About = () => {
    return (
        <div className={style.about}>
            <div className={style.right_content}>
                <div className={style.title}>Hi, I am Trầm Hiệp Thành</div>
                <div className={style.sub}>I am a Android Developer|</div>
                <div className={style.description}>
                    I am a motivated and versatile individual, always eager to take on new
                    challenges. With a passion for learning I am dedicated to delivering
                    high-quality results. With a positive attitude and a growth mindset, I am ready
                    to make a meaningful contribution and achieve great things.
                </div>
                <button className={style.btn_check_resume}>Check resume</button>
            </div>
            <div className={style.left_content}>
                <div className={style.image}></div>
            </div>
        </div>
    );
};
export default About;