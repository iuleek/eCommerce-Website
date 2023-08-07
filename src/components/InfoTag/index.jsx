import styles from './InfoTag.module.css'

export default function InfoTag({children}) {
    return (
        <p className={styles.infoTag}>{children}</p>
    )
}