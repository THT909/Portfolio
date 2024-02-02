import style from '../style/ExperienceSection.module.css';
import Image from 'next/image';
import reactjs from '../../public/reactjs.png';
const Experience = () => {
    return (
        <div className={style.Experience}>
            <div className={style.Experience_title}>
                <div className={style.title}>Experiences</div>
                <div className={style.sub}>Here are some of my Experiences.</div>
            </div>
            <div className={style.Experience_component}>
                <div className={style.Experience_menu}>
                    <div className={style.Experience_menu_title}>Frontend</div>
                    <div className={style.Experience_item_list}>
                        <div className={style.Experience_item}>
                            <img className={style.Experience_image} />
                            <a href="" className={style.Experience_name}>
                                React Js
                            </a>
                        </div>
                        <div className={style.Experience_item}>
                            <img className={style.Experience_image} />
                            <a href="" className={style.Experience_name}>
                                React Js
                            </a>
                        </div>
                        <div className={style.Experience_item}>
                            <Image
                                src={reactjs}
                                alt=""
                                className={style.Experience_image}
                                width={50}
                                height={50}
                            />
                            <a href="" className={style.Experience_name}>
                                React Js
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Experience;
