import Navigation from './components/Navigation';
import About from './components/About';
import Skill from './components/SkillsSection';
import Experience from './components/ExperienceSection';
export default function Home() {
    return (
        <div className="main">
            <Navigation />
            <About />
            <Skill />
            <Experience />
        </div>
    );
}
