import classes from "./contact-form.module.css";
import { useRef } from "react";

export default function ContactForm() {

    const emailInputRef = useRef<HTMLInputElement>(null);
    const nameInputRef = useRef<HTMLInputElement>(null);
    const messageInputRef = useRef<HTMLTextAreaElement>(null);

    function sendMessageHandler(event: React.FormEvent) {
        event.preventDefault();

        const enteredEmail = emailInputRef.current?.value;
        const enteredName = nameInputRef.current?.value;
        const enteredMessage = messageInputRef.current?.value;

        fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify({ email: enteredEmail, name: enteredName, message: enteredMessage }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => response.json()).then(data => {
            console.log(data);
        }).catch(error => {
            console.error('Error:', error);
        });
    }

  return (
    <section className={classes.contact}>
      <h1>Contact Me</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
            <div className={classes.control}>
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" required ref={emailInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" required ref={nameInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="message">Your Message</label>
                <textarea id="message" rows={5} required ref={messageInputRef} />
            </div>
        </div>
        <div className={classes.actions}>
            <button>Send Message</button>
        </div>
      </form>
    </section>
  );
}