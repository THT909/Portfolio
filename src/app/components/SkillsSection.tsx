import style from '../style/SkillsSection.module.css';
import Image from 'next/image';
import reactjs from '../../public/reactjs.png';
const Skill = () => {
    return (
        <div className={style.Skill}>
            <div className={style.skill_container}>
                <div className={style.skill_title}>
                    <div className={style.title}>Skills</div>
                    <div className={style.sub}>Here are some of my skills.</div>
                </div>
                <div className={style.skill_component}>
                    <div className={style.skill_menu}>
                        <div className={style.skill_menu_title}>Frontend</div>
                        <div className={style.skill_item_list}>
                            <div className={style.skill_item}>
                                <img className={style.skill_image} />
                                <a href="" className={style.skill_name}>
                                    React Js
                                </a>
                            </div>
                            <div className={style.skill_item}>
                                <img className={style.skill_image} />
                                <a href="" className={style.skill_name}>
                                    React Js
                                </a>
                            </div>
                            <div className={style.skill_item}>
                                <Image
                                    src={reactjs}
                                    alt=""
                                    className={style.skill_image}
                                    width={50}
                                    height={50}
                                />
                                <a href="" className={style.skill_name}>
                                    React Js
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Skill;
