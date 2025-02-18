import styles from "./ProductItem.module.css";
import Link from "next/link";
import QuantityButton from '../QuantityButton'
import React from "react"
export default function ProductCard({ id, img, discount, title, currPrice }) {
  const props = { id, img, discount, title, currPrice } ;
  
  let disc = parseFloat(discount) / 100;
  let originalPrice = (parseFloat(currPrice)/(1-disc)).toFixed(2);
  
  return (
    <div className={styles.product_card}>
        <div className={styles.card_top}>
          <img src={img} alt="img" />
          {discount ? <span className={styles.discount}>{discount}</span> : ""}
        </div>

      <div className={styles.card_body}>
        <Link className={styles.card_title} href="/product-details">
          {title}
        </Link>
        <div className={styles.card_bottom}>
          <p className={styles.current_price}>
            <span className={styles.original_price}>
              {discount &&<s>{originalPrice}</s>}
            </span>
            <span className={styles.dollar}>$</span>
            <span>{currPrice}</span>
          </p>
          <QuantityButton imgsrc="/plus-icon-white.svg" {...props} />
        </div>
      </div>
    </div>
  );
}
