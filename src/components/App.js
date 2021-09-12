import Project from './Project.js';
import '../css/app.css';

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
        <>
        <div>
        </div>
        {drawProjects(projects)}
        <div>
        </div>
        </>
    );
}

/*
 * project {
 *  name,
 *  description,
 *  stack,
 *  [demo,]
 *  [github,]
 *  }
 */

const projects = [
    {
        name: "Luagon",
        description: "A physics engine working with polygons, written in lua",
        stack: ["lua", "love2D"],
        github: "https://github.com/mDeram/Luagon",
    },
    {
        name: "B",
        description: "description",
        stack: ["r"],
        github: "https://github.com/mDeram/kekos",
    }
]

export default App;
