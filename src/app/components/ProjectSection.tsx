import style from '../style/ProjectSection.module.css';
import Image from 'next/image';
import reactjs from '../../public/reactjs.png';
import styleMain from '../style/Page.module.css';
const Project = () => {
    return (
        <div className={style.Project}>
            <div className={style.project_title}>
                <div className={styleMain.title}>Project</div>
                <div className={styleMain.sub_title}>Here are some of my Experiences.</div>
            </div>
            <div className={style.project_component}>
                <div className={style.project_content}>
                    <div className={style.tag}>
                        <div className={style.image}>
                            <Image alt="" width={100} height={100} src={reactjs}></Image>
                        </div>
                        <div className={style.skill_ls}>
                            <div className={style.skill_tag}>react</div>
                            <div className={style.skill_tag}>mongoo</div>
                            <div className={style.skill_tag}>node</div>
                            <div className={style.skill_tag}>aaa</div>
                        </div>
                        <div className={style.text_component}>
                            <div className={style.project_name}>prject a</div>
                            <div className={style.project_day}>adsfsdfsf</div>
                            <div className={style.description}>asdfsadf</div>
                        </div>
                    </div>
                    <div className={style.tag}>
                        <div className={style.image}>
                            <Image alt="" width={100} height={100} src={reactjs}></Image>
                        </div>
                        <div className={style.skill_ls}>
                            <div className={style.skill_tag}>react</div>
                            <div className={style.skill_tag}>mongoo</div>
                            <div className={style.skill_tag}>node</div>
                            <div className={style.skill_tag}>aaa</div>
                        </div>
                        <div className={style.text_component}>
                            <div className={style.project_name}>prject a</div>
                            <div className={style.project_day}>adsfsdfsf</div>
                            <div className={style.description}>asdfsadf</div>
                        </div>
                    </div>
                    <div className={style.tag}>
                        <div className={style.image}>
                            <Image alt="" width={100} height={100} src={reactjs}></Image>
                        </div>
                        <div className={style.skill_ls}>
                            <span className={style.skill_tag}>react</span>
                            <span className={style.skill_tag}>mongoo</span>
                            <span className={style.skill_tag}>node</span>
                            <span className={style.skill_tag}>aaa</span>
                        </div>
                        <div className={style.text_component}>
                            <div className={style.project_name}>prject a</div>
                            <div className={style.project_day}>adsfsdfsf</div>
                            <div className={style.description}>asdfsadf</div>
                        </div>
                    </div>
                    <div className={style.tag}>
                        <div className={style.image}>
                            <Image alt="" width={100} height={100} src={reactjs}></Image>
                        </div>
                        <div className={style.skill_ls}>
                            <span className={style.skill_tag}>react</span>
                            <span className={style.skill_tag}>mongoo</span>
                            <span className={style.skill_tag}>node</span>
                            <span className={style.skill_tag}>aaa</span>
                        </div>
                        <div className={style.text_component}>
                            <div className={style.project_name}>prject a</div>
                            <div className={style.project_day}>adsfsdfsf</div>
                            <div className={style.description}>asdfsadf</div>
                        </div>
                    </div>
                    <div className={style.tag}>
                        <div className={style.image}>
                            <Image alt="" width={100} height={100} src={reactjs}></Image>
                        </div>
                        <div className={style.skill_ls}>
                            <span className={style.skill_tag}>react</span>
                            <span className={style.skill_tag}>mongoo</span>
                            <span className={style.skill_tag}>node</span>
                            <span className={style.skill_tag}>aaa</span>
                        </div>
                        <div className={style.text_component}>
                            <div className={style.project_name}>prject a</div>
                            <div className={style.project_day}>adsfsdfsf</div>
                            <div className={style.description}>asdfsadf</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Project;
