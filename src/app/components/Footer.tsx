import style from '../style/Footer.module.css';
import { FacebookSvg, GitHubSvg } from '../utils/image';
import { about } from '../data/about';

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.name}>{about.name}</div>
            <div className={style.sub_nav}>
                <a href="#about" className={style.nav}>
                    About
                </a>
                <a href="#skill" className={style.nav}>
                    Skills
                </a>
                <a href="#experience" className={style.nav}>
                    Experience
                </a>
                <a href="#project" className={style.nav}>
                    Projects
                </a>
                <a href="#education" className={style.nav}>
                    Education
                </a>
            </div>
            <div className={style.icon_ls}>
                <a href={about.facebookUrl} className={style.icon}>
                    <FacebookSvg />
                </a>
                <a href={about.githubUrl} className={style.icon}>
                    <GitHubSvg />
                </a>
            </div>
            <div className={style.copy_right}>© 2024 THT909. All rights reserved.</div>
        </div>
    );
};
export default Footer;
