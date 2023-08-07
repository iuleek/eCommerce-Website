import styles from './Shop.module.css'
import Link from 'next/link';

export default function Shop({price}) {
    return (
            <Link href="/cart" className={styles.shopButton} type="button"><span>${price}</span></Link>
    );
}