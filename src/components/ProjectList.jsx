import Project from "./Project.jsx";
import projects from "../projects.json";

function ProjectList() {
    return (
        <section className="bg-gradient-to-b from-emerald-400 to-purple-400 flex flex-col items-center">
            {projects.map(project => (
                <Project
                    key={project.name}
                    {...project}
                />
            ))}
        </section>
    );
}

export default ProjectList;
