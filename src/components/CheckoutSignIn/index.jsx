import CheckoutLayout from '../CheckoutLayout'
import CartSmall from '../CartSmall'
import FormSection from './FormSection'
import React from "react"
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