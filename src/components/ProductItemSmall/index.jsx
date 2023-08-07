import styles from './ProductItemSmall.module.css'
import QuantityButton from '../QuantityButton'

export default function ProductItemSmall({ imgSrc, price = ""}) {
    price = (price.split("$")[1]);

        return (
        <div className={styles.card}>
                <img className={styles.sliderImage} src={imgSrc} alt="productImage" />       
            <div className={styles.card__bottom}>
                    <p className={styles.price}>${~~price}.<sup>{price.split(".")[1]}</sup></p>
                    <QuantityButton style="dark" size="small" />
            </div>
        </div>
    );
}