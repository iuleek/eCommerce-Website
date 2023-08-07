import styles from './AlsoBought.module.css'
import ProductItemSmall from '@/components/ProductItemSmall'

export default function AlsoBought() {
    return (
    <div className={styles.bought}>
        <p className={styles.bought__text}><strong>Other's also bought</strong></p>
        <div className={styles.bought__items}>
        <ProductItemSmall price="$8.90" imgSrc="/small-image.svg" />
        <ProductItemSmall price="$8.90" imgSrc="/small-image.svg" />
        <ProductItemSmall price="$8.90" imgSrc="/small-image.svg" />
        </div>
    </div>
    );
}