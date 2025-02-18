import styles from './ContactForm.module.css'
import ReplyLabel from '../../../ReplyLabel'
import React from "react"
export default function ContactForm() {
    return (
        <div className={styles.contactSection}>
            <ReplyLabel text="We usually respond within 1 working day 😉" imgSrc="/quick-reply-icon.svg"/>
            <form className={styles.contactForm}>
                <input className={styles.inputStyle} type="text" placeholder="Full-name" name="full-name"/>
                <input className={styles.inputStyle} type="email" placeholder="E-mail" name="email"/>
                <textarea className={`${styles.inputStyle} ${styles.message}`}  rows="10" cols="30" placeholder="Message" name="message"></textarea>
                <input className={`${styles.submitButton}`} type="submit" value="Send Message" />
            </form>
        </div>
    );
}