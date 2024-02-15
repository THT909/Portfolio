import exp from 'constants';
import style from '../style/Footer.module.css';
import Image from 'next/image';
import { FacebookSvg, GitHubSvg } from '../utils/image';
const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.name}>Trầm Hiệp Thành</div>
            <div className={style.sub_nav}>
                <a href="" className={style.nav}>
                    About
                </a>
                <a href="" className={style.nav}>
                    Skills
                </a>
                <a href="" className={style.nav}>
                    Experience
                </a>
                <a href="" className={style.nav}>
                    Projects
                </a>
                <a href="" className={style.nav}>
                    Education
                </a>
            </div>
            <div className={style.icon_ls}>
                <div className={style.icon}>
                    <FacebookSvg />
                </div>
                <div className={style.icon}>
                    <GitHubSvg />
                </div>
            </div>
            <div className={style.copy_right}>© 2023 THT909. All rights reserved.</div>
        </div>
    );
};
export default Footer;
