import classNames from "classnames";
import { useState } from "react";
import getIcon from "../utils/nameToIcon.jsx";
import LinkButton from "./LinkButton";
import { FaCircle, FaRegCircle } from "react-icons/fa";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

function Arrow({ children, handleClick, pos }) {
    return (
        <button className={classNames("absolute h-full transition-all hover:bg-neutral-50/50 px-2", {
            "right-0": pos === "right"
        })} onClick={handleClick}
        >{children}</button>
    );
}

function ImageSlider({ images }) {
    const [pos, setPos] = useState(0);

    function slide(toAdd) {
        setPos(prev => {
            const next = (prev + toAdd) % images.length;
            if (next < 0) return images.length - 1;
            return next;
        })
    }

    function renderArrows() {
        if (images.length === 1) return;

        return (<>
            <Arrow handleClick={() => slide(-1)}>
                <AiFillCaretLeft/>
            </Arrow>
            <Arrow handleClick={() => slide(1)} pos="right">
                <AiFillCaretRight/>
            </Arrow>
        </>);
    }

    function renderSelected() {
        if (images.length === 1) return;

        return (
            <div className="absolute flex justify-center w-full bottom-1 text-neutral-50 text-[0.5rem]">
                {images.map((_, i) => {
                    if (pos === i) return <FaCircle className="m-1"/>
                    return <FaRegCircle className="m-1 hover:cursor-pointer" onClick={() => setPos(i)}/>
                })}
            </div>
        );
    }

    return (
        <div className="h-full w-full relative shadow-xl overflow-hidden rounded-lg border-4 border-black/20">
        {/*<div className="h-full w-full relative shadow-lg overflow-hidden rounded-lg border-2 border-neutral-50">*/}
            {images.map((image, i) => (
                <img
                    className={classNames("absolute w-full h-full object-cover transition-opacity", {
                        "opacity-0": pos !== i
                    })}
                    src={`${process.env.PUBLIC_URL}/img/${image}`} alt="preview"
                />
            ))}
            {renderArrows()}
            {renderSelected()}
        </div>
    );
}

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
        <div className="box-content h-80 flex items-center w-full max-w-screen-lg py-20 px-10 text-neutral-50 even:flex-row-reverse border-b last:border-none">
            <div className="h-56 w-full px-8 flex flex-col items-start justify-between">
                <h2 className="text-3xl font-semibold">{name}</h2>
                <p>{description}</p>
                <ul className="p-0 flex flex-wrap gap-4 justify-center items-center list-none">{renderStack()}</ul>
                <div className="links gap-2 flex">
                    {renderLinks()}
                </div>
            </div>
            <div className="w-full h-full flex items-center justify-center px-8">
                <ImageSlider images={images}/>
            </div>
        </div>
    );
}

export default Project
