import styles from './Shop.module.css'
import Link from 'next/link';
import React from "react"
export default function Shop({price}) {
    return (
            <Link href="/cart" className={styles.shopButton} type="button"><span>${price}</span></Link>
    );
}