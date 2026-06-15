import Image from 'next/image';
import style from '../style/ProjectSection.module.css';
import styleMain from '../style/Page.module.css';
import { projects } from '../data/projects';
import { getImagePath } from '../utils/images';

const Project = () => {
    return (
        <div id="project" className={style.Project}>
            <div className={style.project_title}>
                <div className={styleMain.title}>Project</div>
                <div className={styleMain.sub_title}>Here are some of my Experiences.</div>
            </div>
            <div className={style.project_component}>
                <div className={style.project_content}>
                    {projects.map((project, index) => (
                        <div key={index} className={style.tag}>
                            <div className={style.image}>
                                <Image
                                    src={getImagePath(project.imageKey)}
                                    alt={project.name}
                                    width={400}
                                    height={240}
                                />
                            </div>
                            <div className={style.skill_ls}>
                                {project.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className={style.skill_tag}>
                                        {skill}
                                    </div>
                                ))}
                            </div>
                            <div className={style.text_component}>
                                <div className={style.project_name}>{project.name}</div>
                                <div className={style.project_day}>{project.period}</div>
                                <div className={style.description}>{project.description}</div>
                            </div>
                            <div className={style.btn_container}>
                                <a href={project.link} className={style.btn_project}>
                                    View
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Project;
