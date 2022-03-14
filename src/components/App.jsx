import Project from "./Project.jsx";
import Presentation from "./Presentation.jsx";
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
