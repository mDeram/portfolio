import { SiGithub, SiMaildotru } from "react-icons/si";

// TODO change font?
// TODO animate when things appear
// TODO make background static?
// TODO superset defaults (like text selection)

function Project({ src, alt, title, href, content }) {
    return (
        <div className="flex flex-col gap-16 border border-blue-800/50 rounded-2xl bg-purple-200/50">
            <div className="rounded-2xl p-8 flex flex-col gap-8 sm:gap-0 sm:flex-row text-neutral-900">
                <div className="w-full sm:w-1/3 mr-4">
                    <a href={href} target="_blank" className="hover:text-purple-500 transition-all"><h3 className="font-medium text-xl" rel="noopener noreferrer">{title}</h3></a>
                    <div className="text-neutral-500 pl-2">
                        {content}
                    </div>
                </div>
                <img src={src} alt={alt} className="w-full sm:w-2/3 rounded-2xl magic-border" />
            </div>
        </div>
    )
}

function App() {
    return (
        <>
        <header className="border-b border-neutral-400 pt-16">
            <h1 className="text-2xl text-neutral-900 font-medium tracking-tight">Deramecourt Mathurin</h1>
            <p className="text-neutral-500">Fullstack Engineer</p>
            <div className="flex gap-4 py-8">
                <a href="https://github.com/mDeram" aria-label="My Github page" className="text-xl"><SiGithub /></a>
                <a href="mailto:contact@mderam.com" aria-label="My contact email" className="text-xl"><SiMaildotru /></a>
            </div>
        </header>
        <main className="py-8">
            <section>
                <h2 className="text-xl text-neutral-900 font-medium mb-4 underline decoration-2 decoration-blue-500">About</h2>
                <p className="text-gray-600">
                    Hello, I'm Mathurin.
                    <br /><br />
                    Back in 2015, curious about computers automation capabilities, I started creating web applications, later I had fun with 2D game development. Fast-forward to today, I've built multiple
                    applications for myself, friends and a start-up.
                    <br /><br />
                    I love logic and satisfaction brough by well built systems. I have an interest in infrastructure architecture. I'm a curious autonomous team player.
                    <br /><br />
                    Nowadays I'm focused on building reactive and reliable systems with an interest for efficiency, I'm currently learning Go.
                    <br /><br />
                    When I'm not at a computer, I'm usually doing gymnastics, playing piano, hanging out with my friends or solving rubik's cubes.
                </p>
            </section>
            <section className="mt-16">
                <h2 className="text-xl text-neutral-900 font-medium mb-4 underline decoration-2 decoration-emerald-500">Experience</h2>
                <ul>
                    <li>
                        <div className="flex items-center gap-2">
                            <div className="border-emerald-500 rounded-full border-2 w-3 h-3" />
                            <h3 className="text-neutral-900 font-medium pl-1 text-lg pt-0.5">Fullstack Engineer</h3>
                            <p className="border border-blue-800/50 text-neutral-500 rounded-full px-1 pt-0.5 text-xs py-0 inline-block">PRESENT</p>
                        </div>
                        <div className="pl-9 text-neutral-500">
                            <p>DUALEAP - Connected aircrafts</p>
                            <p className="mt-4">
                                In that company I did the following: Worked with system developers to handle incoming data.
                                Built a CD/CI pipeline.
                                Along with databases management I improved existing schemas.
                                Designed and implemented web interfaces with React while integrating a 3D environment.
                                Worked on user authentication, authorization and management, multiple APIs, billing reports, 3D visualization.
                                Optimized performances of the existing code and architecture.
                            </p>
                        </div>
                    </li>
                </ul>
            </section>
            <section className="mt-16">
                <h2 className="text-xl text-neutral-900 font-medium mb-8 underline decoration-2 decoration-purple-500">Projects</h2>
                <div className="flex flex-col gap-16">
                    <Project title="Drive" src="/img/drive_index.png" alt="Homepage of the drive project I made." href="https://github.com/mDeram/cloud-frontend" content={
                        <p>Upload, store and download files from everywhere with an internet connection.</p>
                    } />
                    <Project title="Multiplayer Sudoku" src="/img/sudoku.png" alt="Sudoku game in the multiplayer sudoku website I made." href="https://github.com/mDeram/sudoku-frontend" content={
                        <p>Choose difficulty, share a link with one or more friends and as soon as they join, the game starts. You colaboratively solving a sudoku.</p>
                    } />
                    <Project title="2D Map Editor" src="/img/2d_map_editor.png" alt="Map building example with the 2D Map Editor I made. " href="https://github.com/mDeram/2DMapEditor" content={
                        <p>A simple map editor to help game developers with their map building.</p>
                    } />
                </div>
            </section>
        </main>
        <footer className="text-neutral-500 pt-8 pb-16 text-center">
            Deramecourt Mathurin
        </footer>
        </>
    )
}

export default App
