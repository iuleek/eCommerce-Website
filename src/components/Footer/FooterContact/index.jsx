import styles from './FooterContact.module.css'
import React from "react"
export default function Subscribe({ text, subtext }) {
    return (
        <div className={styles.subscribe}>
            <h5 className={styles.subscribe__title}>{text}</h5>
            <p className={styles.subscribe__subtitle}>{subtext}</p>
        </div>
    );

}