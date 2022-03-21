export default function Project(props) {
    const {
        name,
        nameLower = name.toLowerCase(),
        description,
        stack,
        demo,
        github,
        background
    } = props;

    function drawGithub(name, url) {
        return <a key={name} href={url} target="_blank">{name}</a>;
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
            <div className="background" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/${background})` }}></div>
            <div className="content">
                <div className="text-container">
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <p>{stack.join(" | ")}</p>
                    {demo && <a href={demo} target="_blank">demo</a>}
                    {renderGithub()}
                </div>
            </div>
        </div>
    );
}
