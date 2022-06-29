const kek = "bg-neutral-50 text-black mix-blend-screen hover:bg-neutral-200";

function LinkButton({ name, url }) {
    return (
        <a href={url} target="_blank" rel="noreferrer"
            className={`px-8 py-4 rounded-md no-underline font-semibold
                bg-black/20 hover:bg-black/30
            `}
        >{name}</a>
    );
}

export default LinkButton;
