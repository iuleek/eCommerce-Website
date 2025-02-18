import styles from './Title.module.css'
import React from "react"
export default function Title({ level = 2, children }) {
    return (
        <>
            {level === 1 &&
                <h1 className={styles.level1}>{children}</h1>}
            {level === 2 &&
                <h1 className={styles.level2}>{children}</h1>}
            {level === 3 &&
                <h2 className={styles.level3}>{children}</h2>}
            {level === 4 &&
                <h2 className={styles.level4}>{children}</h2>}
            {level === 5 &&
                <h2 className={styles.level5}>{children}</h2>}
            {level === 6 &&
                <h1 className={styles.level6}>{children}</h1>}
            {level === 7 &&
                <h6 className={styles.level7}>{children}</h6>}
            {level === 8 &&
                <h6 className={styles.level8}>{children}</h6>}
        </>
    );
}