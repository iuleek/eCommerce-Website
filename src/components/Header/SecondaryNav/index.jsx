import Link from 'next/link'
import styles from './SecondaryNav.module.css'
import React from "react"
export default function SecondaryNavItem({text, location}) {
    return (
        <Link className={styles.preHeaderLink }  href={location} > {text} </Link>
    )
}