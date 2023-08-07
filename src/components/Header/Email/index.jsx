import styles from './Email.module.css'

export default function Email({address}) {
    return (
        <a className={styles.emailLink} href="mailto:info@dutchie.nt">{address}</a>
    );
}