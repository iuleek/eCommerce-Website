import Styles from "./CartSubtotal.module.css";
import React from "react"
export default function CartSubtotal({ subtotal }) {
  return (
    <div className={Styles.cart_subtotal}>
      <p className={Styles.subtotalTitle}>Cart Subtotal</p>
      <p className={Styles.price}>
        <span className={Styles.currency}>$ </span>
        {subtotal}
        <sup></sup>
      </p>
    </div>
  );
}
