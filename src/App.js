import PublishingList from './PublishingList';
import DesignList from './DesignList';
import SkillList from './SkillList';
function App() {
    return (
        <main id="portfolio">
            <section className="profile">
                <div className="wrap">
                    <h1>PROFILE</h1>
                </div>
            </section>
            <section className="web-publishing">
                <div className="wrap">
                    <h1>WEB PUBLISHING</h1>
                    <div className="slide-box">{PublishingList}</div>
                </div>
            </section>
            <section className="design">
                <div className="wrap">
                    <h1>DESIGN</h1>
                    <div className="slide-box">{DesignList}</div>
                </div>
            </section>
            <section className="skill">
                <div className="wrap">
                    <h1>SKILL</h1>
                    <div className="skill-box">{SkillList}</div>
                </div>
            </section>
        </main>
    );
}
export default App;