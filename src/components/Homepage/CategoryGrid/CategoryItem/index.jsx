import Button from '@/components/Button';
import styles from './CategoryItem.module.css'
import Link from 'next/link';
import React from "react"
export default function CategoryItem({ text, btnDark, btnText, btnLight }) {
    return (
        <div className={styles.categoryItem}>
            <p className={styles.categoryItem__text}>{text}</p>
            {btnDark &&
                <Link href="/product-listing" className={styles.categoryItem__link}>
                    <Button
                        style="btnDark btnRegular"
                        text={btnText}
                        iconSrc="/arrow-right.svg"
                        imgPosition="right" />
                </Link>}
            {btnLight &&
                <Link href="/product-listing" className={styles.categoryItem__link}>
                    <Button
                        style="btnLight__black btnRegular"
                        text={btnText}
                        iconSrc="/arrow-right-black.svg"
                        imgPosition="right" />
                </Link>}
        </div>
    );
}