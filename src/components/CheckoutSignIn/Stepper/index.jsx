import Link from "next/link";
import Styles from "./Stepper.module.css";
import React from "react"
export default function Stepper({ active }) {
  return (
    <div className={Styles.stepper}>
      <Link className={Styles.stepper_link} href="/checkout/personal-details">
        <div className={active === 1 ? `${Styles.stepper_item} ${Styles.stepper_active}` : `${Styles.stepper_item}`}>
          <span>1</span>
          <p>Personal Details</p>
        </div>
      </Link>
      <span className={Styles.divider}></span>
      <Link className={Styles.stepper_link} href="/checkout/delivery-method">
        <div className={active === 2 ? `${Styles.stepper_item} ${Styles.stepper_active}` : `${Styles.stepper_item}`}>
          <span>2</span>
          <p>Delivery Details</p>
        </div>
      </Link>
      <span className={Styles.divider}></span>
      <Link className={Styles.stepper_link} href="/checkout/payment-method">
        <div className={active === 3 ? `${Styles.stepper_item} ${Styles.stepper_active}` : `${Styles.stepper_item}`}>
          <span>3</span>
          <p>Payment</p>
        </div>
      </Link>
    </div>
  );
}
