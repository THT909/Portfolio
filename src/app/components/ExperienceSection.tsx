import style from '../style/ExperienceSection.module.css';
import Image from 'next/image';
import reactjs from '../../public/reactjs.png';
const Experience = () => {
    return (
        <div className={style.experience}>
            <div className={style.experience_title}>
                <div className={style.title}>Experiences</div>
                <div className={style.sub}>Here are some of my experiences.</div>
            </div>
            <div className={style.experience_component}>
                <div className={style.experience_menu}>
                    <div className={style.experience_menu_title}>Frontend</div>
                    <div className={style.experience_item_list}>
                        <div className={style.experience_item}>
                            <img className={style.experience_image} />
                            <a href="" className={style.experience_name}>
                                React Js
                            </a>
                        </div>
                        <div className={style.experience_item}>
                            <img className={style.experience_image} />
                            <a href="" className={style.experience_name}>
                                React Js
                            </a>
                        </div>
                        <div className={style.experience_item}>
                            <Image
                                src={reactjs}
                                alt=""
                                className={style.experience_image}
                                width={50}
                                height={50}
                            />
                            <a href="" className={style.experience_name}>
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
