//import styles from './Tag.module.css'
import React from "react"
export default function Tag({text, style}) {
    return (
        <span className={style}>{text}</span>
    )
}