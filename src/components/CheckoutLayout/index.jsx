import styles from './CheckoutLayout.module.css'
import React from "react"
export default function CheckoutLayout({children}) {
    return (
        <div className={styles.layout}>
            {children}
        </div>
    )
}