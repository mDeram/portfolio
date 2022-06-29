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
    "typescript": <SiTypescript title="Typescript" />,
    "javascript": <SiJavascript title="Javascript" />,
    "react": <SiReact title="React" />,
    "nodejs": <SiNodedotjs title="NodeJs" />,
    "nextjs": <SiNextdotjs title="NextJs" />,
    "socketio": <SiSocketdotio title="Socket.io" />,
    "graphql": <SiGraphql title="Graphql" />,
    "lua": <SiLua title="Lua" />,
    "redis": <SiRedis title="Redis" />,
    "postgres": <SiPostgresql title="PostgreSQL" />,
}

function getIcon(name) {
    return iconMap[name];
}

export default getIcon;
