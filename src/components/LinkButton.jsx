import classNames from "classnames";
import { useTest } from "../utils/useTest";

function LinkButton({ name, url }) {
    return (
        <a href={url} target="_blank" rel="noreferrer"
            className={classNames(
                "px-6 py-3 rounded-md no-underline font-semibold",
                useTest(
                    "bg-black/20 hover:bg-black/30 shadow-lg",
                    "bg-neutral-50 text-black mix-blend-screen hover:bg-neutral-200"
                )
            )}
        >{name}</a>
    );
}

export default LinkButton;
