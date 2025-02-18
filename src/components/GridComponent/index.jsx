import styles from './GridComponent.module.css'
import React from "react"
export default function GridComponent({children}) {
    return (
        <div className={styles.gridComponent}>
            {children}
        </div>
    );
}