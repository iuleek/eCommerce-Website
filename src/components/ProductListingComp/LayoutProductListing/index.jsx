import styles from './LayoutProductListing.module.css'
import React from "react"
export default function LayoutProductListing({children}) {
    return (
        <div className='container'>
        <div className={styles.layoutProducts}>
        {children}
        </div>
        </div>
    )
}