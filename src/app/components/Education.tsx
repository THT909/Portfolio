import style from '../style/Education.module.css';
import Image from 'next/image';
import reactjs from '../../public/reactjs.png';
const Education = () => {
    return (
        <div className={style.education}>
            <div className={style.education_title}>
                <div className={style.title}>educations</div>
                <div className={style.sub}>Here are some of my educations.</div>
            </div>
            <div className={style.education_component}>
                <div className={style.education_menu}>
                    <div className={style.education_menu_title}>Frontend</div>
                    <div className={style.education_item_list}>
                        <div className={style.education_item}>
                            <img className={style.education_image} />
                            <a href="" className={style.education_name}>
                                React Js
                            </a>
                        </div>
                        <div className={style.education_item}>
                            <img className={style.education_image} />
                            <a href="" className={style.education_name}>
                                React Js
                            </a>
                        </div>
                        <div className={style.education_item}>
                            <Image
                                src={reactjs}
                                alt=""
                                className={style.education_image}
                                width={50}
                                height={50}
                            />
                            <a href="" className={style.education_name}>
                                React Js
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Education;
