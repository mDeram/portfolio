import { SiGithub, SiMaildotru } from "react-icons/si";

function Contact() {
    return (
        <div className="contact">
            <a className="email" href="mailto:contact@mderam.com"><SiMaildotru title="Send Email"/></a>
            <a href="https://github.com/mDeram" target="_blank" rel="noreferrer"><SiGithub className="github" title="Open Github"/></a>
        </div>
    );
}

export default Contact;
