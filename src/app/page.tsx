import Navigation from './components/Navigation';
import About from './components/About';
import Skill from './components/SkillsSection';
import Experience from './components/ExperienceSection';
import Project from './components/ProjectSection';
import Education from './components/Education';
import Footer from './components/Footer';
export default function Home() {
    return (
        <div className="main">
            <Navigation />
            <About />
            <Skill />
            <Experience />
            <Project />
            <Education />
            <Footer />
        </div>
    );
}
