import style from '../style/Navigation.module.css';
import Icon from '../utils/utils';
const Navigation = () => {
    return (
        <div className={style.header}>
            <div className={style.pd}>
                <div className={style.icon}>
                    <a href="#">
                        <Icon />
                    </a>
                    <div className={style.portfolio}>Portfolio</div>
                </div>
                <div className={style.title}>
                    <div className={style.text_header}>About</div>
                    <div className={style.text_header}>Skills</div>
                    <div className={style.text_header}>Experience</div>
                    <div className={style.text_header}>Project</div>
                    <div className={style.text_header}>Education</div>
                </div>
                <button className={style.bnt_git}>Github Profile</button>
            </div>
        </div>
    );
};
export default Navigation;
