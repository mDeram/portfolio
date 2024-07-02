import { SiGithub, SiMaildotru } from "react-icons/si";
import { PiArrowUpRightBold } from "react-icons/pi";

// change font?
// animate when things appear?

function Project({ src, alt, title, githubHref, demoHref, content }) {
    return (
        <>
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-0 text-neutral-900">
            <div className="w-full sm:w-1/2 mr-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="border-purple-500 rounded-full border-2 w-3 h-3" />
                        <h3 className="text-neutral-900 font-medium pl-1 text-lg pt-0.5">{title}</h3>
                    </div>
                    <div className="flex items-center gap-2">
                        <a href={demoHref} target="_blank" className="w-full hover:shadow-xl group">
                            <PiArrowUpRightBold className="text-xl group-hover:-translate-y-px" />
                        </a>
                        <a href={githubHref} target="_blank" className="w-full hover:shadow-xl group">
                            <SiGithub className="group-hover:-translate-y-px" />
                        </a>
                    </div>
                </div>
                <div className="pl-9 mt-4 text-neutral-600">
                    {content}
                </div>
            </div>
            <a href={demoHref} target="_blank"
                className="w-full flex-shrink h-min sm:w-1/2 rounded-2xl transition-all shadow-md hover:shadow-xl hover:scale-105 overflow-clip"
            >
                <img src={src} alt={alt} />
            </a>
        </div>
        </>
    )
}

function App() {
    return (
        <>
        <header className="border-b border-neutral-500/20 pt-16">
            <h1 className="text-4xl text-neutral-900 font-medium tracking-tight">Deramecourt Mathurin</h1>
            <p className="text-neutral-700 text-xl">Fullstack Engineer</p>
            <div className="flex gap-4 py-8">
                <a href="https://github.com/mDeram" aria-label="My Github page" className="text-xl group">
                    <SiGithub className="group-hover:-translate-y-px" />
                </a>
                <a href="mailto:contact@mderam.com" aria-label="My contact email" className="text-xl group">
                    <SiMaildotru className="group-hover:-translate-y-px" />
                </a>
            </div>
        </header>
        <main className="py-8">
            <section>
                <h2 className="text-xl text-neutral-900 font-medium mb-4 underline decoration-2 decoration-blue-500">About</h2>
                <p className="text-neutral-600">
                    In 2015, my curiosity about computer automation led me to start creating web applications.
                    I later explored 2D game development and what I loved the most was building libraries and tools to improve DX.
                    Fast-forward to today, I have built multiple applications, websites and APIs for myself, friends, and a startup.
                </p>
                <p className="mt-4 text-neutral-600">
                    I thrive utilizing and developing my strong logical thinking to develop applications.
                    Currently focused on building reactive and reliable systems with an emphasis on efficiency.
                    I am highly curious and a team player, but I also excel when working independently.
                </p>
                <p className="mt-4 text-neutral-600">
                    Outside of tech, I enjoy gymnastics, playing piano, hanging out with friends, and solving Rubik's cubes.
                </p>
            </section>
            <section className="mt-16 selection:bg-emerald-600 selection:text-emerald-100">
                <h2 className="text-xl text-neutral-900 font-medium mb-4 underline decoration-2 decoration-emerald-500">Experience</h2>
                <ul>
                    <li>
                        <div className="flex items-center gap-2">
                            <div className="border-emerald-500 rounded-full border-2 w-3 h-3" />
                            <h3 className="text-neutral-900 font-medium pl-1 text-lg pt-0.5">Fullstack Engineer</h3>
                            <p className="border border-emerald-800/70 text-emerald-800/70 rounded-full px-1 pt-0.5 text-xs py-0 inline-block">PRESENT</p>
                        </div>
                        <div className="pl-9 text-neutral-600">
                            <p>DUALEAP - Connected aircrafts</p>
                            <p className="mt-4">
                                {/*Nearly 2 years of fullstack development experience at DUALEAP resulted in building robust and user-friendly applications.*/}
                                Nearly 2 years at DUALEAP honed my fullstack development skills while collaborating effectively within a small development team.
                                Together, we built robust and scalable applications in which my contributions spanned the entire development lifecycle.
                                My backend expertise includes
                                        building scalable services (Node.js, Express.js, Redis),
                                        that interact seamlessly with databases (PostgreSQL, Sqlite3)
                                        and implementing CI/CD pipelines (Jenkins, Docker, Terraform, GCP) for efficient reproducible and tested deployments.
                                Alongside that, I crafted intuitive frontend experiences using React.js, Typescript, Tailwind CSS, and Next.js.
                            </p>
                        </div>
                    </li>
                </ul>
            </section>
            <section className="mt-16 selection:bg-purple-600 selection:text-purple-100">
                <h2 className="text-xl text-neutral-900 font-medium mb-4 underline decoration-2 decoration-purple-500">Projects</h2>
                <div className="flex flex-col gap-16">
                    <Project
                        title="Drive Cloud Storage"
                        src="/img/drive_index.png"
                        alt="Homepage of the drive project I made."
                        githubHref="https://github.com/mDeram/drive-frontend"
                        demoHref="https://drive.mderam.com"
                        content={
                            <>
                                <p>
                                    {/*Drive Cloud Storage offers file upload, access, and download capabilities from any device.*/}
                                    Developed using GraphQL, TypeScript, and PostgreSQL, this drive allows users to upload, access, and download files from any device.
                                </p>
                                <p className="mt-4">
                                    {/*It supports easy navigation, folder creation, and advanced search, including PDF content search.*/}
                                    Features include easy file and folder uploads, seamless downloads, folder creation, navigation with breadcrumbs, and advanced search capabilities, including searching the contents of PDFs and other formats.
                                </p>
                            </>
                        }
                    />
                    <Project
                        title="Multiplayer Sudoku"
                        src="/img/sudoku.png"
                        alt="Sudoku game in the multiplayer sudoku website I made."
                        githubHref="https://github.com/mDeram/sudoku-frontend"
                        demoHref="https://sudoku.mderam.com"
                        content={
                            <>
                                <p>
                                    Web-based game built with ReactJS, Redis and WebSockets, offering a multiplayer experience where users can solve Sudoku puzzles together in real-time.
                                </p>
                                <p className="mt-4">
                                    The project includes features like game settings customization, error and success animations.
                                </p>
                            </>
                        }
                    />
                    <Project
                        title="2D Map Editor"
                        src="/img/2d_map_editor.png"
                        alt="Map building example with the 2D Map Editor I made. "
                        githubHref="https://github.com/mDeram/2DMapEditor"
                        demoHref="https://mathurin.itch.io/2d-map-editor"
                        content={
                            <>
                                <p>
                                    This tool is designed to create single-layer 2D maps using a .png tileset.
                                    It features map resizing, drawing, erasing, filling.
                                </p>
                                <p className="mt-4">
                                    Txt, json, and lua formats are supported. <br />
                                    Built with lua and Love2D, it runs on Windows, macOS, and Linux.
                                </p>
                            </>
                        }
                    />
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
