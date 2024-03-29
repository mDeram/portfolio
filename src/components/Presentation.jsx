function Presentation() {
    return (
        <div className="project bg-black">
            <div className="background bg-left-top bg-fixed bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/presentation.png)` }}></div>
            <div className="centered-absolute flex flex-col">
                <h1 className="font-semibold text-3xl md:text-6xl text-neutral-50">
                    Hello, I'm Mathurin.<br />
                    I develop applications.
                </h1>
            </div>
            <div className="half-centered-absolute">
                <p className="w-2/3 md:w-1/2 xl:w-1/3 text-white text-xl md:text-xl text-center">
                    I've always been someone who likes <span className="text-purple-400">logic</span> and
                    <span className="text-green-400"> automation</span>.
                    Computers always had this fascinating feeling and
                    at the age of 15 I couldn't resist my curiosity to discover how to build
                    websites and how to use computers automation capabilities.
                </p>
            </div>
        </div>
    );
}

export default Presentation;
