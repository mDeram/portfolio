import getIcon from "../utils/nameToIcon.jsx";

export default function Project(props) {
    const {
        name,
        description,
        stack,
        demo,
        repo,
        background
    } = props;

    function renderStack() {
        return stack.map(name => {
            let icon = getIcon(name);
            if (!icon)
                return name;
            return icon;
        }).map(element => <li>{element}</li>);
    }

    function renderRepoLink(name, url) {
        return <a key={name} href={url} target="_blank">{name}</a>;
    }

    function renderRepo() {
        const result = [];
        for (const [name, url] of Object.entries(repo)) {
            result.push(renderRepoLink(name, url));
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
                    <ul className="stack">{renderStack()}</ul>
                    <div className="links">
                        {demo && <a href={demo} target="_blank">Demo</a>}
                        {renderRepo()}
                    </div>
                </div>
            </div>
        </div>
    );
}
