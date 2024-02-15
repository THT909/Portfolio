import style from '../style/Navigation.module.css';
import { Icon } from '../utils/utils';
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
                <div className={style.title1}>
                    <div className={style.text_header}>About</div>
                    <div className={style.text_header}>Skills</div>
                    <div className={style.text_header}>Experience</div>
                    <div className={style.text_header}>Project</div>
                    <div className={style.text_header}>Education</div>
                </div>
                <a href="https://github.com/THT909/" className={style.bnt_git}>
                    Github Profile
                </a>
            </div>
        </div>
    );
};
export default Navigation;
