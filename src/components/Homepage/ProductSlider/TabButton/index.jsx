import styles from './TabButton.module.css'

export default function TabButton({text, handleClick, isActive}) {
    return (
        <button className={`${styles.tabButton} ${isActive === true ? styles.isActive : ""}`} onClick={() => handleClick(text)}>{text}</button>
    );
}