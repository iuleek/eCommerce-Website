import Image from 'next/image'
import styles from './User.module.css'
import React from "react"
export default function User() {
    return (
            <a href="#" className={styles.imageWrapper}>
                <Image
                    src="/user.svg"
                    width={16}
                    height={16}
                    alt="User"
                    className={styles.user}
                />
            </a>
    );

}