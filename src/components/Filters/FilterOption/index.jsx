import styles from './FilterOption.module.css'

export default function FilterOption({text, items, handleClick,isApplied, isActive, isCancelled}) {
    return (
        <button type="button"
         className={`${styles.filterBtn} 
        ${isActive === true ? styles.isActive : ""} 
        ${isApplied === true ? styles.isApplied : ""}
        ${isCancelled === true ? styles.isCancelled : ""}`} 
        onClick={() => handleClick()}>🥖 {text} {items}</button>
    );
}