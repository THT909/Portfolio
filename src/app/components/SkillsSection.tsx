import Image from 'next/image';
import style from '../style/SkillsSection.module.css';
import styleMain from '../style/Page.module.css';
import { skills } from '../data/skills';
import { getImagePath } from '../utils/images';

const Skill = () => {
    return (
        <div id="skill" className={style.Skill}>
            <div className={style.skill_container}>
                <div className={style.skill_title}>
                    <div className={styleMain.title}>Skills</div>
                    <div className={styleMain.sub_title}>Here are some of my skills.</div>
                </div>
                <div className={style.skill_component}>
                    {skills.map((group, groupIndex) => (
                        <div key={groupIndex} className={style.skill_menu}>
                            <div className={style.skill_menu_title}>{group.category}</div>
                            <div className={style.skill_item_list}>
                                {group.items.map((skill, skillIndex) => (
                                    <div key={skillIndex} className={style.skill_item}>
                                        <div
                                            className={style.skill_image}
                                            style={
                                                skill.whiteBg
                                                    ? { background: 'white', borderRadius: '20px' }
                                                    : undefined
                                            }
                                        >
                                            <Image
                                                src={getImagePath(skill.imageKey)}
                                                alt={skill.name}
                                                width={100}
                                                height={100}
                                            />
                                        </div>
                                        <a className={style.skill_name}>{skill.name}</a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Skill;
