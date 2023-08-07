import styles from "./InputBar.module.css"

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