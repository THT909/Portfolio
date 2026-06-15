import Image from 'next/image';
import style from '../style/Footer.module.css';
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
                    <Image src="/facebook.svg" alt="Facebook" width={30} height={30} />
                </a>
                <a href={about.githubUrl} className={style.icon}>
                    <Image src="/github.svg" alt="GitHub" width={30} height={30} />
                </a>
            </div>
            <div className={style.copy_right}>© 2024 THT909. All rights reserved.</div>
        </div>
    );
};
export default Footer;
