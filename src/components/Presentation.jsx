function Presentation() {
    return (
        <div className="project">
            <div className="background" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/presentation.png)` }}></div>
            <div className="presentation">
                <h1>Hello, I'm Mathurin.<br />
                I develop applications.</h1>
            </div>
        </div>
    );
}

export default Presentation;
