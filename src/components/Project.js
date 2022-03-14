export default function Project(props) {
    const {
        name,
        nameLower = name.toLowerCase(),
        description,
        stack,
        demo,
        github
    } = props;

    function drawGithub(name, url) {
        return <a key={name} href={url}>{name}</a>;
    }

    function renderGithub() {
        const result = [];
        for (const [name, url] of Object.entries(github)) {
            result.push(drawGithub(name, url));
        }
        return result;
    }

    return (
        <div className="project">
            <div className={`background ${nameLower}`}>
            </div>
            <div className="content">
                <div className="text-container">
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <p>{stack.join(" | ")}</p>
                    {demo && <a href={demo}>demo</a>}
                    {renderGithub()}
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
