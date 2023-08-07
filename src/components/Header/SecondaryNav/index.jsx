import Link from 'next/link'
import styles from './SecondaryNav.module.css'

export default function SecondaryNavItem({text, location}) {
    return (
        <Link className={styles.preHeaderLink }  href={location} > {text} </Link>
    )
}