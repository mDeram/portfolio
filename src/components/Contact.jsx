import axios from "axios";
import classNames from "classnames";
import { useEffect } from "react";
import { useState } from "react";
import { TbPizza } from "react-icons/tb";

const MESSAGE_SENT = "Message sent! Have a nice day";
const MESSAGE_ERROR = "Sorry, an error occured, please send me an email directly!";

function getInitValues() {
    return { email: "", subject: "", message: "" };
}

function Contact() {
    const [submitMessage, setSubmitMessage] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    const [values, setValues] = useState(getInitValues());

    useEffect(() => {
        if (submitMessage === MESSAGE_SENT) setValues(getInitValues());
    }, [submitMessage]);

    function handleChange(e) {
        const { name, value } = e.target;
        setValues(prev => ({ ...prev, [name]: value }));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        setSubmitting(true);

        try {
            await axios.post("https://mderam.com/send-email", {
                subject: values.subject,
                content: `From: ${values.email}\nContent: \n\n${values.message}`
            }, {
                headers: {
                    "Email-Server-Name": "portfolio-contact"
                }
            });

            setSubmitMessage(MESSAGE_SENT);
        } catch(e) {
            setSubmitMessage(MESSAGE_ERROR);
        }

        setSubmitting(false);
    }

    function renderInput({ type, forName, name }) {
        return (
            <div className="flex flex-col items-start w-full mb-2">
                <label htmlFor={forName} className="text-neutral-50">{name}</label>
                {type === "textarea"
                    ? <textarea required value={values[forName]} onChange={handleChange} className="w-full text-neutral-800 p-2" name={forName}/>
                    : <input required value={values[forName]} onChange={handleChange} className="w-full text-neutral-800 p-2" type={type} name={forName}/>
                }
            </div>
        );
    }

    return (
        <div className="contact-root project bg-black">
            <div className="h-screen background bg-left-top bg-fixed bg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/presentation.png)` }}></div>
            <div className="centered-absolute">
                <form className="w-full max-w-screen-sm" onSubmit={handleSubmit}>
                    <div className="flex justify-between">
                        {renderInput({type: "email", name: "Email", forName: "email"})}
                        <span className="w-8"/>
                        {renderInput({type: "text", name: "Subject", forName: "subject"})}
                    </div>
                    {renderInput({type: "textarea", name: "Message", forName: "message"})}

                    <div className="flex items-center justify-between">
                        <button className={classNames(`flex justify-center
                            items-center w-20 h-10 text-base px-4 py-2
                            bg-neutral-50 text-neutral-800 mt-2
                            hover:bg-neutral-200`, {
                            "disabled:bg-neutral-200": submitting
                        })} type="submit">
                            {false ? <TbPizza className="animate-spin text-lg"/> : "Send"}
                        </button>
                        {submitMessage && <p className="text-neutral-50">{submitMessage}</p>}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
