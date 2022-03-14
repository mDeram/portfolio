import Project from "./Project.js";
import Presentation from "./Presentation.js";
import "../css/app.css";
import projects from "../projects.json";

function App() {
    function drawProjects(projects) {
        return projects.map(project => {
            return (
                <Project
                    key={project.name}
                    {...project}
                />
            );
        })
    }

    return (
        <div className="scroller">
            <Presentation />
            {drawProjects(projects)}
        </div>
    );
}

export default App;
