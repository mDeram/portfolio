import classNames from "classnames";
import { useState } from "react";
import { FaCircle, FaRegCircle } from "react-icons/fa";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { useTest } from "../utils/useTest";

function Arrow({ children, handleClick, pos }) {
    return (
        <button className={classNames("absolute h-full transition-all hover:bg-neutral-50/50 px-2", {
            "right-0": pos === "right"
        })} onClick={handleClick}
        >{children}</button>
    );
}

function ImageCarousel({ images }) {
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
                    if (pos === i) return <FaCircle key={i} className="m-1"/>
                    return <FaRegCircle key={i} className="m-1 hover:cursor-pointer" onClick={() => setPos(i)}/>
                })}
            </div>
        );
    }

    return (
        <div className={useTest(
            "h-full w-full relative shadow-xl overflow-hidden rounded-lg border-4 border-black/20",
           "h-full w-full relative shadow-lg overflow-hidden rounded-lg border-2 border-neutral-50"
        )}>
            {images.map((image, i) => (
                <img key={image}
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

export default ImageCarousel;
