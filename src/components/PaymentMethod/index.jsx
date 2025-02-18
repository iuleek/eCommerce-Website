import CheckoutLayout from "../CheckoutLayout"
import CartSmall from "../CartSmall"
import PaymentSection from "./PaymentSection"
import React from "react"
export default function Paymentmethod() {
    return (
        <>   
        <CheckoutLayout>
            <PaymentSection />
            <CartSmall />
        </CheckoutLayout> 
        </>
    )
}