import { SiTypescript, SiReact, SiNodedotjs, SiNextdotjs, SiJavascript, SiSocketdotio, SiGraphql, SiLua} from "react-icons/si";

const iconMap = {
    "typescript": <SiTypescript title="typescript" />,
    "javascript": <SiJavascript title="javascript" />,
    "react": <SiReact title="react" />,
    "nodejs": <SiNodedotjs title="nodejs" />,
    "nextjs": <SiNextdotjs title="nextjs" />,
    "socketio": <SiSocketdotio title="socket.io" />,
    "graphql": <SiGraphql title="graphql" />,
    "lua": <SiLua title="lua" />,
}

function getIcon(name) {
    return iconMap[name];
}

export default getIcon;
