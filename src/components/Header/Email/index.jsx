import styles from './Email.module.css'
import React from "react"
export default function Email({address}) {
    return (
        <a className={styles.emailLink} href="mailto:info@dutchie.nt">{address}</a>
    );
}