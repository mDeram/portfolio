import {
    SiTypescript,
    SiReact,
    SiNodedotjs,
    SiNextdotjs,
    SiJavascript,
    SiSocketdotio,
    SiGraphql,
    SiLua,
    SiRedis,
    SiPostgresql
} from "react-icons/si";

const iconMap = {
    "typescript": <SiTypescript title="typescript" />,
    "javascript": <SiJavascript title="javascript" />,
    "react": <SiReact title="react" />,
    "nodejs": <SiNodedotjs title="nodejs" />,
    "nextjs": <SiNextdotjs title="nextjs" />,
    "socketio": <SiSocketdotio title="socket.io" />,
    "graphql": <SiGraphql title="graphql" />,
    "lua": <SiLua title="lua" />,
    "redis": <SiRedis title="redis" />,
    "postgres": <SiPostgresql title="postgresql" />,
}

function getIcon(name) {
    return iconMap[name];
}

export default getIcon;
