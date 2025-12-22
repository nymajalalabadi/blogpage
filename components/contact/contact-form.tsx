"use client";

import classes from "./contact-form.module.css";
import { useRef, useState, useEffect } from "react";
import Notification from "../ui/notification";

async function sendContactData(contactData: { email: string, name: string, message: string }) {

    const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(contactData),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Something went wrong!');
    }
}

export default function ContactForm() {

    const [requestStatus, setRequestStatus] = useState(''); 
    const [requestError, setRequestError] = useState('');

    const emailInputRef = useRef<HTMLInputElement>(null);
    const nameInputRef = useRef<HTMLInputElement>(null);
    const messageInputRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (requestStatus === 'success' || requestStatus === 'error') {
            const timer = setTimeout(() => {
                setRequestStatus('');
                setRequestError('');
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [requestStatus]);

    async function sendMessageHandler(event: React.FormEvent) {
        event.preventDefault();

        const enteredEmail = emailInputRef.current?.value;
        const enteredName = nameInputRef.current?.value;
        const enteredMessage = messageInputRef.current?.value;

        if (!enteredEmail || !enteredName || !enteredMessage) {
            setRequestError('Please fill in all fields');
            setRequestStatus('error');
            return;
        }

        setRequestStatus('pending');

        try {
       await sendContactData({
        email: enteredEmail,
            name: enteredName,
            message: enteredMessage,
            });
            setRequestStatus('success');
        } catch (error) {
            setRequestError((error as Error).message || 'Failed to send message');
            setRequestStatus('error');
        }

    }

    let notification;

    if (requestStatus === 'pending') {
        notification = {
            title: 'Sending message...',
            message: 'Your message is on its way!',
            status: 'pending',
        };
    }
    
    
    if (requestStatus === 'success') {
        notification = {
            title: 'Message sent!',
            message: 'Your message has been sent successfully!',
            status: 'success',
        };
    }
    
    
    if (requestStatus === 'error') {
        notification = {
            title: 'Error!',
            message: requestError || 'Something went wrong!',
            status: 'error',
        };
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
      {notification && <Notification title={notification.title} message={notification.message} status={notification.status} />}
    </section>
  );
}