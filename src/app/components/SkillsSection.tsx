import style from '../style/SkillsSection.module.css';
import styleMain from '../style/Page.module.css';
import * as ImageComponents from '../utils/image';
import { skills } from '../data/skills';

/** Maps imageKey strings from the data layer to their Image wrapper components */
const imageMap: Record<string, () => JSX.Element> = {
    React:     ImageComponents.React,
    Redux:     ImageComponents.Redux,
    Nextjs:    ImageComponents.Nextjs,
    HTML:      ImageComponents.HTML,
    CSS:       ImageComponents.CSS,
    Js:        ImageComponents.Js,
    Bootstrap: ImageComponents.Bootstrap,
    NestJS:    ImageComponents.NestJS,
    NodeJs:    ImageComponents.NodeJs,
    Express:   ImageComponents.Express,
    Firebase:  ImageComponents.Firebase,
    MySQL:     ImageComponents.MySQL,
    Java:      ImageComponents.Java,
    XML:       ImageComponents.XML,
    As:        ImageComponents.As,
    Flutter:   ImageComponents.Flutter,
    Postman:   ImageComponents.Postman,
    VSCode:    ImageComponents.VSCode,
    Git:       ImageComponents.Git,
    GitHub:    ImageComponents.GitHub,
    Linux:     ImageComponents.Linux,
    Kafka:     ImageComponents.Kafka,
};

const Skill = () => {
    return (
        <div id="skill" className={style.Skill}>
            <div className={style.skill_container}>
                <div className={style.skill_title}>
                    <div className={styleMain.title}>Skills</div>
                    <div className={styleMain.sub_title}>Here are some of my skills.</div>
                </div>
                <div className={style.skill_component}>
                    {skills.map((group, groupIndex) => {
                        const ImageComponent = imageMap[group.items[0]?.imageKey];
                        return (
                            <div key={groupIndex} className={style.skill_menu}>
                                <div className={style.skill_menu_title}>{group.category}</div>
                                <div className={style.skill_item_list}>
                                    {group.items.map((skill, skillIndex) => {
                                        const SkillImage = imageMap[skill.imageKey];
                                        return (
                                            <div key={skillIndex} className={style.skill_item}>
                                                <div
                                                    className={style.skill_image}
                                                    style={
                                                        skill.whiteBg
                                                            ? { background: 'white', borderRadius: '20px' }
                                                            : undefined
                                                    }
                                                >
                                                    {SkillImage && <SkillImage />}
                                                </div>
                                                <a className={style.skill_name}>{skill.name}</a>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
export default Skill;
