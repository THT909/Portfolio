import style from '../style/SkillsSection.module.css';
import reactjs from '../../public/reactjs.png';
import styleMain from '../style/Page.module.css';
import * as Image from '../utils/image';
const Skill = () => {
    return (
        <div id="skill" className={style.Skill}>
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
                                    <Image.React />
                                </div>
                                <a className={style.skill_name}>React Js</a>
                            </div>
                            <div className={style.skill_item}>
                                <div className={style.skill_image}>
                                    <Image.Redux />
                                </div>
                                <a className={style.skill_name}>Redux</a>
                            </div>
                            <div className={style.skill_item}>
                                <div
                                    style={{ background: 'white', borderRadius: '20px' }}
                                    className={style.skill_image}
                                >
                                    <Image.Nextjs />
                                </div>
                                <a className={style.skill_name}>Next Js</a>
                            </div>
                            <div className={style.skill_item}>
                                <div className={style.skill_image}>
                                    <Image.HTML />
                                </div>
                                <a className={style.skill_name}>HTML</a>
                            </div>
                            <div className={style.skill_item}>
                                <div className={style.skill_image}>
                                    <Image.CSS />
                                </div>
                                <a className={style.skill_name}>CSS</a>
                            </div>
                            <div className={style.skill_item}>
                                <div className={style.skill_image}>
                                    <Image.Js />
                                </div>
                                <a className={style.skill_name}>JavaScript</a>
                            </div>
                            <div className={style.skill_item}>
                                <div className={style.skill_image}>
                                    <Image.Bootstrap />
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
                                    <Image.NestJS />
                                </div>
                                <a className={style.skill_name}>NestJs</a>
                            </div>
                            <div className={style.skill_item}>
                                <div
                                    style={{ background: 'white', borderRadius: '20px' }}
                                    className={style.skill_image}
                                >
                                    <Image.NodeJs />
                                </div>
                                <a className={style.skill_name}>NodeJs</a>
                            </div>
                            <div className={style.skill_item}>
                                <div className={style.skill_image}>
                                    <Image.Express />
                                </div>
                                <a className={style.skill_name}>Express</a>
                            </div>
                            <div className={style.skill_item}>
                                <div className={style.skill_image}>
                                    <Image.Js />
                                </div>
                                <a className={style.skill_name}>JavaScript</a>
                            </div>
                            <div className={style.skill_item}>
                                <div className={style.skill_image}>
                                    <Image.Firebase />
                                </div>
                                <a className={style.skill_name}>Firebase</a>
                            </div>
                            <div className={style.skill_item}>
                                <div className={style.skill_image}>
                                    <Image.MySQL />
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
                                    <Image.Java />
                                </div>
                                <a className={style.skill_name}>Java</a>
                            </div>
                            <div className={style.skill_item}>
                                <div className={style.skill_image}>
                                    <Image.XML />
                                </div>
                                <a className={style.skill_name}>XML</a>
                            </div>
                            <div className={style.skill_item}>
                                <div className={style.skill_image}>
                                    <Image.As />
                                </div>
                                <a className={style.skill_name}>Android Studio</a>
                            </div>
                            <div className={style.skill_item}>
                                <div className={style.skill_image}>
                                    <Image.Flutter />
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
                                    <Image.Postman />
                                </div>
                                <a className={style.skill_name}>Postman</a>
                            </div>
                            <div className={style.skill_item}>
                                <div className={style.skill_image}>
                                    <Image.VSCode />
                                </div>
                                <a className={style.skill_name}>VS Code</a>
                            </div>
                            <div className={style.skill_item}>
                                <div className={style.skill_image}>
                                    <Image.Git />
                                </div>
                                <a className={style.skill_name}>Git</a>
                            </div>
                            <div className={style.skill_item}>
                                <div
                                    style={{ background: 'white', borderRadius: '20px' }}
                                    className={style.skill_image}
                                >
                                    <Image.GitHub />
                                </div>
                                <a className={style.skill_name}>GitHub</a>
                            </div>
                            <div className={style.skill_item}>
                                <div
                                    style={{ background: 'white', borderRadius: '20px' }}
                                    className={style.skill_image}
                                >
                                    <Image.Linux />
                                </div>
                                <a className={style.skill_name}>Linux</a>
                            </div>
                            <div className={style.skill_item}>
                                <div
                                    style={{ background: 'white', borderRadius: '20px' }}
                                    className={style.skill_image}
                                >
                                    <Image.Kafka />
                                </div>
                                <a className={style.skill_name}>Kafka</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Skill;
