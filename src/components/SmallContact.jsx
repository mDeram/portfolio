import { SiGithub, SiMaildotru } from "react-icons/si";
import { IoDocumentText } from "react-icons/io5";

function SmallContact() {
    function getResumeUrl() {
        let suffix = "en";

        let language = navigator.language || navigator.userLanguage;
        if (typeof language === "string" && language.toLowerCase().split("-")[0] === "fr")
            suffix = "fr";

        return `${process.env.PUBLIC_URL}/pdf/cv_deramecourt_mathurin_${suffix}.pdf`;
    }

    return (
        <div className="contact">
            <a className="email" href="mailto:contact@mderam.com"><SiMaildotru title="Send Email"/></a>
            <a className="github" href="https://github.com/mDeram" target="_blank" rel="noreferrer"><SiGithub title="Open Github"/></a>
            <a className="resume" href={getResumeUrl()} target="_blank" rel="noreferrer"><IoDocumentText title="Download Resume"/></a>
        </div>
    );
}

export default SmallContact;
