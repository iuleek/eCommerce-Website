import styles from './Rights.module.css'
import React from "react"
export default function Rights({text}) {
    return (
        <p className={styles.rights}>{text}</p>
    )
}