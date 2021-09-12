export default function Project(props) {
    const {
        name,
        nameLower = name.toLowerCase(),
        description,
        stack
    } = props;

    return (
        <div className="project">
            <div className={`background ${nameLower}`}>
            </div>
            <div className="content">
                <div className="text-container">
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <p>{stack.join(" | ")}</p>
                </div>
                <div className="demo-container">
                    <img
                        alt={`${name} demo`}
                        src={`${process.env.PUBLIC_URL}/img/${nameLower}_demo.gif`}
                    />
                </div>
            </div>
        </div>
    );
}
