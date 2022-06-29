function Presentation() {
    return (
        <div className="project">
            <div className="background bg-left-top bg-fixed bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/presentation.png)` }}></div>
            {/* text-center ? */}
            <div className="centered-absolute">
                <h1 className="font-semibold text-2xl md:text-6xl text-neutral-50">
                    Hello, I'm Mathurin.<br />
                    I develop applications.
                </h1>
            </div>
            <p className="centered-absolute text-white">Je suis la description, la présentation quoi
            </p>
        </div>
    );
}

export default Presentation;
