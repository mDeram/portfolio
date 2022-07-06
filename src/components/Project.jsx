import getIcon from "../utils/nameToIcon.jsx";
import LinkButton from "./LinkButton";
import ImageCarousel from "./ImageCarousel";

function Project({
    name,
    description,
    stack,
    links,
    images
}) {
    function renderStack() {
        return stack.map(name => (
            <li className="text-3xl" key={name}>{getIcon(name) || name}</li>
        ));
    }
    function renderLinks() {
        return Object.entries(links).map(([name, url]) => (
            <LinkButton key={name} name={name} url={url} />
        ));
    }

    return (
        <div className={`md:h-[28rem] flex items-center w-full
            max-w-screen-lg py-10 md:py-20 px-10 md:px-20 text-neutral-50 md:odd:flex-row-reverse
            border-b last:border-none flex-col md:flex-row gap-16
        `}>
            <div className="w-full md:h-3/4 md:w-1/2 flex flex-col items-start justify-center gap-8 md:gap-4">
                <h2 className="text-3xl font-semibold">{name}</h2>
                <p>{description}</p>
                <ul className="p-0 flex flex-wrap gap-2 lg:gap-4 items-center list-none">{renderStack()}</ul>
                <div className="links gap-2 flex flex-wrap">
                    {renderLinks()}
                </div>
            </div>
            <div className="w-full aspect-[10/7] md:w-1/2">
                <ImageCarousel images={images}/>
            </div>
        </div>
    );
}

export default Project
