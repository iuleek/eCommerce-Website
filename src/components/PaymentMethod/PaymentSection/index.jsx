import styles from './PaymentSection.module.css'
import DeliveryHeader from '@/components/DeliveryMethod/DeliveryHeader'
import PaymentOption from '../PaymentOption'
import Title from '@/components/Title'
import Stepper from '@/components/CheckoutSignIn/Stepper'
import Image from 'next/image'
import React from "react"
export default function PaymentSection() {
    return (
        <div className={styles.paymentSection}>
            <Title level={5}>Fill it in and you&aposre good to go!</Title>
            <div className={styles.paymentSection__options}>
                <Stepper active={3} />
                <div className={styles.paymentSection__methods}>
                    <DeliveryHeader btnText="Back to delivery method" btnHref="/checkout/delivery-method" titleText="Payment method" titleIcon="/credit-card-icon.svg" />
                    <PaymentOption iconSrc="/card-icon-btn.svg" text="Card" iconW={24} iconH={24} />
                    <PaymentOption iconSrc="/paypal-icon.svg" text="Paypal" iconW={32} iconH={32} />
                    <PaymentOption iconSrc="/apple-icon.svg" text="Apple Pay" iconW={30} iconH={30} />
                    <PaymentOption iconSrc="/google-icon.svg" text="Google Pay" iconW={18} iconH={18} />
                    <div className={styles.paymentSection__cards}>
                        <p className={styles.paymentSection__text}>We accept these cards: </p>
                        <div className={styles.paymentSection__cardsImg}>
                            <Image src="/mastercard.png" width={30} height={20} />
                            <Image src="/visa.png" width={30} height={20} />
                            <Image src="/american-express.png" width={30} height={20} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}