import styles from './CategoryWrapper.module.css'
import React from "react"
export default function CategoryWrapper({big, small}) {
    return (
        <div className={styles.categoryWrapper}>
            <div className={styles.category__big}>
                {big}
            </div>
            <div className={styles.category__small}>
                {small.map((component) => component)}
            </div>
        </div>
    );
}