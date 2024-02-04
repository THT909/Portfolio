import style from '../style/ProjectSection.module.css';
import Image from 'next/image';
import reactjs from '../../public/reactjs.png';
const Project = () => {
    return (
        <div className={style.Project}>
            <div className={style.project_title}>
                <div className={style.title}>Project</div>
                <div className={style.sub}>Here are some of my Experiences.</div>
            </div>
            <div className={style.project_component}>
                <div className={style.tag}>
                    <img src="" alt="" />
                    <div className={style.skill_tag}></div>
                    <div className={style.project_name}></div>
                    <div className={style.project_day}></div>
                    <div className={style.description}></div>
                </div>
            </div>
        </div>
    );
};
export default Project;
