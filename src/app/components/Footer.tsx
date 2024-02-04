import exp from 'constants';
import style from '../style/Footer.module.css';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.name}>Trầm Hiệp Thành</div>
            <div className={style.sub_nav}>
                <a href="" className={style.nav}></a>
                <a href="" className={style.nav}></a>
                <a href="" className={style.nav}></a>
                <a href="" className={style.nav}></a>
                <a href="" className={style.nav}></a>
            </div>
            <div className={style.icon_ls}>
                <i className={style.icon}></i>
                <i className={style.icon}></i>
                <i className={style.icon}></i>
            </div>
            <div className="copy-right">© 2023 THT909. All rights reserved.</div>
        </div>
    );
};
export default Footer;
