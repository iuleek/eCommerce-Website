import styles from './Checkout.module.css'
import CheckoutLayout from '../CheckoutLayout'
import CartSmall from '../CartSmall'
import FormSection from './FormSection'

export default function CheckoutSection() {
    return (
        <>
        <CheckoutLayout>
            <FormSection />
            <CartSmall />
        </CheckoutLayout>
        </>
    )
}