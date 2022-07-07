import { SiGithub, SiMaildotru } from "react-icons/si";

function SmallContact() {
    return (
        <div className="contact">
            <a className="email" href="mailto:contact@mderam.com"><SiMaildotru title="Send Email"/></a>
            <a className="github" href="https://github.com/mDeram" target="_blank" rel="noreferrer"><SiGithub title="Open Github"/></a>
        </div>
    );
}

export default SmallContact;
