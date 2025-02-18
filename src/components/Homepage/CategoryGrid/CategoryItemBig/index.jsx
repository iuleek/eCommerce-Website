import Button from "@/components/Button"
import styles from './CategoryItemBig.module.css'
import Link from "next/link"
import React from "react"
export default function CategoryItemBig({ text, btnText }) {
    return (
        <div className={styles.categoryItemBig}>
            <p className={styles.categoryItemBig__text}>{text}</p>
            <Link href="/product-listing" className={styles.categoryItemBig__link}>
                <Button
                    style="btnLight__white btnRegular"
                    text={btnText}
                    iconSrc="/arrow-right.svg"
                    iconPosition="right" />
            </Link>
        </div>
    )
}