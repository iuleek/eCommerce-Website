import CheckoutLayout from "../CheckoutLayout"
import CartSmall from "../CartSmall"
import ThanksSection from "./ThanksSection"
import React from "react"
export default function Paymentmethod() {
    return (
        <>   
        <CheckoutLayout>
            <ThanksSection />
            <CartSmall />
        </CheckoutLayout> 
        </>
    )
}