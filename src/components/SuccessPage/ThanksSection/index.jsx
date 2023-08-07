import Title from '@/components/Title'
import styles from './ThanksSection.module.css'
import Image from 'next/image'
import Button from '@/components/Button'
import Link from 'next/link'

export default function ThanksSection() {
    return (
        <div className={styles.leftSide}>
            <Title level={5}>Fill it in and you're good to go!</Title>
            <div className={styles.thanksSection}>
                <div className={styles.thanksSection__header}>
                    <div className={styles.header__circle}>
                        <Image src="/check-icon-white.svg" width={18} height={18}></Image>
                    </div>
                    <p className={styles.header__text}>Payment was succesfull</p>
                </div>
                <div className={styles.thanksSection__body}>
                    <Image src="/confetti-icon.svg" width={110} height={110}></Image>
                    <Title level={5}>Thank you for your purchase!</Title>
                    <p className={styles.body_smallText}>All of your lekker items should be with you before 1st of July 2020. 🚚</p>
                    <Button style="btnRegular btnDark" imgPosition='left' iconSrc="/receipt-icon.svg" text="Download or print your bon" />
                </div>
                <Link className={styles.link} href="/"><Button style="btnRegular btnLight__grayDark" imgPosition='' text="Go back to Homepage" /></Link>

            </div>
        </div>
    )
}