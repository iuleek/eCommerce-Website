import Styles from "./Stepper.module.css";
import Step from "./Step";

export default function Stepper({ activeStep }) {
  return (
    <div className={Styles.stepper}>
      <Step stepNumber={1} label="Personal Details" href="/checkout/personal-details" active={activeStep} />
      <Step stepNumber={2} label="Delivery Details" href="/checkout/delivery-method" active={activeStep} />
      <Step stepNumber={3} label="Payment" href="/checkout/payment-method" active={activeStep} />
    </div>
  );
}
