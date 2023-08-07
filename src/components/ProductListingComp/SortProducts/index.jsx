import styles from './SortProducts.module.css'

export default function SortProducts() {
    return (
        <details className={styles.customDetails}>
            <summary className={styles.customDetails__title}>Sort by</summary>
            <div className={styles.sortElements}>
            <p className={styles.sortElements__text}>Ascendent</p>
            <p className={styles.sortElements__text}>Descendant</p>
            <p className={styles.sortElements__text}>Alphabetically</p>
            </div>
        </details>
    )
}