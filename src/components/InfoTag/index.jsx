import styles from './InfoTag.module.css'
import React from "react"
export default function InfoTag({children}) {
    return (
        <p className={styles.infoTag}>{children}</p>
    )
}