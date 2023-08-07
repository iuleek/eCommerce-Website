import Link from 'next/link'
import styles from './PaymentOption.module.css'
import Image from 'next/image'

export default function PaymentOption({ iconSrc, text, iconW, iconH }) {
    return (
        <Link className={styles.paymentOption__link} href="/checkout/success">
        <div className={styles.paymentOption}>
            <div className={styles.paymentOption__left}>
            <div className={styles.paymentOption__imgWrapper}>
                <Image className={styles.paymentOption__img} src={iconSrc} width={iconW} height={iconH} alt="icon" />
                </div>
                <p className={styles.paymentOption__text}>{text}</p>
            </div>
            <div>
                <input className={styles.paymentOption__radioBtn} type="radio" name="radioBtn" />
            </div>
        </div>
        </Link>
    )
}