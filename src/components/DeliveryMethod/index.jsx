import DeliverySection from './DeliverySection'
import CartSmall from '../CartSmall'
import CheckoutLayout from '../CheckoutLayout'

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