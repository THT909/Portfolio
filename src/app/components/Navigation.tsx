import style from '../style/Navigation.module.css';
import { Icon } from '../utils/utils';
const Navigation = () => {
    return (
        <div className={style.header}>
            <div className={style.pd}>
                <div className={style.icon}>
                    <a href="#top">
                        <Icon />
                    </a>
                    <div className={style.portfolio}>Portfolio</div>
                </div>
                <div className={style.title_nav}>
                    <a href="#about" className={style.text_header}>
                        About
                    </a>
                    <a href="#skill" className={style.text_header}>
                        Skills
                    </a>
                    <a href="#experience" className={style.text_header}>
                        Experience
                    </a>
                    <a href="#project" className={style.text_header}>
                        Project
                    </a>
                    <a href="#education" className={style.text_header}>
                        Education
                    </a>
                </div>
                <a href="https://github.com/THT909/" className={style.bnt_git}>
                    Github Profile
                </a>
            </div>
        </div>
    );
};
export default Navigation;
