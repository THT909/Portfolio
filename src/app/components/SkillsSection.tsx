import style from '../style/SkillsSection.module.css';
import Image from 'next/image';
import reactjs from '../../public/reactjs.png';
import styleMain from '../style/Page.module.css';
import {
    Redux,
    React,
    Nextjs,
    HTML,
    CSS,
    Js,
    NodeJs,
    Express,
    Firebase,
    MySQL,
    Java,
    XML,
    As,
    Flutter,
    Postman,
    VSCode,
    Git,
    GitHub,
    Linux,
    Bootstrap,
} from '../utils/image';
const Skill = () => {
    return (
        <div className={style.Skill}>
            <div className={style.skill_container}>
                <div className={style.skill_title}>
                    <div className={styleMain.title}>Skills</div>
                    <div className={styleMain.sub_title}>Here are some of my skills.</div>
                </div>
                <div className={style.skill_component}>
                    <div className={style.skill_menu}>
                        <div className={style.skill_menu_title}>Frontend</div>
                        <div className={style.skill_item_list}>
                            <div className={style.skill_item}>
                                <div className={style.skill_image}>
                                    <React />
                                </div>
                                <a className={style.skill_name}>React Js</a>
                            </div>
                            <div className={style.skill_item}>
                                <div className={style.skill_image}>
                                    <Redux />
                                </div>
                                <a className={style.skill_name}>Redux</a>
                            </div>
                            <div className={style.skill_item}>
                                <div
                                    style={{ background: 'white', borderRadius: '20px' }}
                                    className={style.skill_image}
                                >
                                    <Nextjs />
                                </div>
                                <a className={style.skill_name}>Next Js</a>
                            </div>
                            <div className={style.skill_item}>
                                <div className={style.skill_image}>
                                    <HTML />
                                </div>
                                <a className={style.skill_name}>HTML</a>
                            </div>
                            <div className={style.skill_item}>
                                <div className={style.skill_image}>
                                    <CSS />
                                </div>
                                <a className={style.skill_name}>CSS</a>
                            </div>
                            <div className={style.skill_item}>
                                <div className={style.skill_image}>
                                    <Js />
                                </div>
                                <a className={style.skill_name}>JavaScript</a>
                            </div>
                            <div className={style.skill_item}>
                                <div className={style.skill_image}>
                                    <Bootstrap />
                                </div>
                                <a className={style.skill_name}>BootStrap</a>
                            </div>
                        </div>
                    </div>
                    <div className={style.skill_menu}>
                        <div className={style.skill_menu_title}>Backend</div>
                        <div className={style.skill_item_list}>
                            <div className={style.skill_item}>
                                <div
                                    style={{ background: 'white', borderRadius: '20px' }}
                                    className={style.skill_image}
                                >
                                    <NodeJs />
                                </div>
                                <a className={style.skill_name}>NodeJs</a>
                            </div>
                            <div className={style.skill_item}>
                                <div className={style.skill_image}>
                                    <Express />
                                </div>
                                <a className={style.skill_name}>Express</a>
                            </div>
                            <div className={style.skill_item}>
                                <div className={style.skill_image}>
                                    <Js />
                                </div>
                                <a className={style.skill_name}>JavaScript</a>
                            </div>
                            <div className={style.skill_item}>
                                <div className={style.skill_image}>
                                    <Firebase />
                                </div>
                                <a className={style.skill_name}>Firebase</a>
                            </div>
                            <div className={style.skill_item}>
                                <div className={style.skill_image}>
                                    <MySQL />
                                </div>
                                <a className={style.skill_name}>MySQL</a>
                            </div>
                        </div>
                    </div>
                    <div className={style.skill_menu}>
                        <div className={style.skill_menu_title}>Android</div>
                        <div className={style.skill_item_list}>
                            <div className={style.skill_item}>
                                <div className={style.skill_image}>
                                    <Java />
                                </div>
                                <a className={style.skill_name}>Java</a>
                            </div>
                            <div className={style.skill_item}>
                                <div className={style.skill_image}>
                                    <XML />
                                </div>
                                <a className={style.skill_name}>XML</a>
                            </div>
                            <div className={style.skill_item}>
                                <div className={style.skill_image}>
                                    <As />
                                </div>
                                <a className={style.skill_name}>Android Studio</a>
                            </div>
                            <div className={style.skill_item}>
                                <div className={style.skill_image}>
                                    <Flutter />
                                </div>
                                <a className={style.skill_name}>Flutter</a>
                            </div>
                        </div>
                    </div>
                    <div className={style.skill_menu}>
                        <div className={style.skill_menu_title}>Other</div>
                        <div className={style.skill_item_list}>
                            <div className={style.skill_item}>
                                <div className={style.skill_image}>
                                    <Postman />
                                </div>
                                <a className={style.skill_name}>Postman</a>
                            </div>
                            <div className={style.skill_item}>
                                <div className={style.skill_image}>
                                    <VSCode />
                                </div>
                                <a className={style.skill_name}>VS Code</a>
                            </div>
                            <div className={style.skill_item}>
                                <div className={style.skill_image}>
                                    <Git />
                                </div>
                                <a className={style.skill_name}>Git</a>
                            </div>
                            <div className={style.skill_item}>
                                <div
                                    style={{ background: 'white', borderRadius: '20px' }}
                                    className={style.skill_image}
                                >
                                    <GitHub />
                                </div>
                                <a className={style.skill_name}>GitHub</a>
                            </div>
                            <div className={style.skill_item}>
                                <div
                                    style={{ background: 'white', borderRadius: '20px' }}
                                    className={style.skill_image}
                                >
                                    <Linux />
                                </div>
                                <a className={style.skill_name}>Linux</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Skill;
