import styles from './ProductItemSmall.module.css'
import QuantityButton from '../QuantityButton'
import React from "react"
export default function ProductItemSmall(props) {
    const { id, imgSrc, currPrice } = props;

    return (
        <div id={id} className={styles.card}>
            <img className={styles.sliderImage} src={imgSrc} alt="productImage" />
            <div className={styles.card__bottom}>
                <p className={styles.price}>
                    <span className={styles.dollar}>$</span>
                    <span>{currPrice}</span>
                </p>
                <QuantityButton imgsrc="/plus-icon-white.svg" style="dark" size="small"  {...props} />
            </div>
        </div>
    );
}