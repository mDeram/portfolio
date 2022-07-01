import Project from "./Project.jsx";
import projects from "../projects.json";

function ProjectList() {
    return (
        <section className="relative flex flex-col items-center">
            <div className={`
                fixed -z-10 top-0 h-screen w-screen
                bg-gradient-to-b from-emerald-400 to-purple-400
            `}></div>
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
