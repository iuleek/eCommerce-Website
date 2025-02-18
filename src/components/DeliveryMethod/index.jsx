import DeliverySection from './DeliverySection'
import CartSmall from '../CartSmall'
import CheckoutLayout from '../CheckoutLayout'
import React from "react"
export default function DeliveryMethod() {
    return (
        <>   
        <CheckoutLayout>
            <DeliverySection />
            <CartSmall />
        </CheckoutLayout> 
        </>
    )
}