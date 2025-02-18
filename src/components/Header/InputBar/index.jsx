import styles from "./InputBar.module.css"
import React from "react"
export default function InputBar({text, inputType, className}) {

    return (
        <input
            className={`${className} ${styles.barStyle}`}
            type={inputType} 
            maxLength={20}
            placeholder={text}
        />
    );

}