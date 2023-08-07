import styles from "./ProductItem.module.css";
import Link from "next/link";
import QuantityButton from '../QuantityButton'

export default function ProductCard(props) {
  const { id, img, discount, title, originalPrice, currPrice } = props;

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
              <s>{originalPrice}</s>
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
