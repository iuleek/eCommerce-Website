import styles from './ContactBtn.module.css'

export default function ContactBtn({ text, type = "email" }) {
    return (
        <>
            {type === "email" && <button className={styles.contactBtn} type="button"><a className={styles.link} href={`mailto:${text}`}>{text}</a></button>}
            {type === "tel" && <button className={styles.contactBtn} type="button"><a className={styles.link} href={`tel:${text}`}>{text}</a></button>}
        </>
    )
}