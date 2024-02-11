import Navigation from './components/Navigation';
import About from './components/About';
import Skill from './components/SkillsSection';
import Experience from './components/ExperienceSection';
import Project from './components/ProjectSection';
import Education from './components/Education';
import Footer from './components/Footer';

import style from './style/Page.module.css';

export default function Home() {
    return (
        <div className={style.main}>
            <Navigation />
            <About />
            <div className={style.container_skill_experience}>
                <div className={style.content_skill_experience}>
                    <Skill />
                    <Experience />
                </div>
            </div>
            <Project />
            <Education />
            <Footer />
        </div>
    );
}
