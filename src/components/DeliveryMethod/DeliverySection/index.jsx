import styles from './DeliverySection.module.css'
import DeliveryHeader from '../DeliveryHeader'
import DeliveryOption from '../DeliveryOption'
import Button from '@/components/Button'
import Stepper from '@/components/CheckoutSignIn/Stepper'
import Title from '@/components/Title'
import Link from 'next/link'

export default function DeliverySection() {
    return (
        <div className={styles.deliverySection}>
        <Title level={5}>Fill it in and you're good to go!</Title>
        <div className={styles.deliverySection__options}>
            <Stepper activeStep={2}/>
            <div className={styles.deliverySection__methods}>
                <DeliveryHeader btnText="Back to personal details" titleText="Delivery method" titleIcon="/truck-icon.svg" btnHref="/checkout/personal-details"/>
                <DeliveryOption price="4.00€" title="Standard delivery" time="Delivered before Saturday 27th" />
                <DeliveryOption price="4.00€" title="Standard delivery" time="Delivered before Saturday 27th" />
                <DeliveryOption price="4.00€" title="Standard delivery" time="Delivered before Saturday 27th" />
                <DeliveryOption price="4.00€" title="Standard delivery" time="Delivered before Saturday 27th" />
                <Link className={styles.deliverySection__link} href="/checkout/payment-method"><Button style="btnLarge btnDark" text="Proceed" imgPosition="" /></Link>          
            </div>
        </div>
        </div>
    )
}