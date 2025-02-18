import styles from './ReplyLabel.module.css'
import Image from 'next/image'
import React from "react"
export default function ReplyLabel({text, imgSrc}) {
    return (
        <div className={styles.label}>
            <p className={styles.text}><Image className={styles.icon} src={imgSrc} width={32} height={32} alt="icon"/>{text}</p>
        </div>
    )
}