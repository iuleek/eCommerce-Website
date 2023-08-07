import styles from './Rights.module.css'

export default function Rights({text}) {
    return (
        <p className={styles.rights}>{text}</p>
    )
}