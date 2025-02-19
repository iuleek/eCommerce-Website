import styles from './AlsoBought.module.css'
import ProductItemSmall from '@/components/ProductItemSmall'
import React from "react"
export default function AlsoBought() {
    return (
    <div className={styles.bought}>
        <p className={styles.bought__text}><strong>Others also bought</strong></p>
        <div className={styles.bought__items}>
        <ProductItemSmall id={51} currPrice="8.90" imgSrc="/small-image.svg" />
        <ProductItemSmall id={52} currPrice="8.90" imgSrc="/small-image.svg" />
        <ProductItemSmall id={53} currPrice="8.90" imgSrc="/small-image.svg" />
        </div>
    </div>
    );
}