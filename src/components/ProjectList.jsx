import Project from "./Project.jsx";
import projects from "../projects.json";

function ProjectList() {
    return (
        <section className="relative flex flex-col items-center">
            <div className={`
                bg-scroll -z-20 bottom-0 h-screen w-screen
                bg-gradient-to-b from-emerald-400 to-purple-400 fixed
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
