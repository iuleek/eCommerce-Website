import CheckoutLayout from "../CheckoutLayout"
import CartSmall from "../CartSmall"
import ThanksSection from "./ThanksSection"

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