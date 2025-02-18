import styles from './OfferButton.module.css'
import React from "react"
export default function OfferButton({btnText}) {
    return (
        <button className={styles.offerBtn}>{btnText}</button>
    );
}