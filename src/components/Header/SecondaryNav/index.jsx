import Link from 'next/link'
import styles from './SecondaryNav.module.css'

export default function SecondaryNavItem({text}) {
    return (
        <Link className={styles.preHeaderLink } href="/">{text}</Link>
    )
}