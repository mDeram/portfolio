import ProjectList from "./ProjectList.jsx";
import Presentation from "./Presentation.jsx";
import SmallContact from "./SmallContact.jsx";
import Contact from "./Contact.jsx";
import "../css/app.css";

const TEST = "b"; //"a" | "b"
export function useTest(a, b) {
    return TEST === "a" ? a : b;
}

function App() {
    return (
        <div>
            <SmallContact />
            <Presentation />
            <ProjectList />
            <Contact />
        </div>
    );
}

export default App;
