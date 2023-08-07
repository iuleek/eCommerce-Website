import styles from './OfferItem.module.css'
import QuantityButton from '@/components/QuantityButton';
import Image from 'next/image';

export default function OfferItem({ imgSource, style = "dark", text, price }) {
    return (
        <div>
            {style === "dark" &&
                <div >
                    <div className={`${styles.offerComponent} ${styles.dark}`}>
                        <Image src={imgSource} alt="product" width={170} height={90} />
                        <div className={styles.addBtn}>
                            <QuantityButton imgsrc="/plus-icon-black.svg" light={true} />
                        </div>
                    </div>
                    <div className={styles.offerInfo}>
                        <p className={styles.text}>{text}</p>
                        <p className={styles.separator}>|</p>
                        <p className={styles.price}>{~~price}.<sup>{price.split(".")[1]}</sup></p>
                    </div>
                </div>
            }
            {style === "light" &&
                <div >
                    <div className={`${styles.offerComponent} ${styles.light}`}>
                        <Image src={imgSource} width={170} height={90}  alt="product"/>
                        <div className={styles.addBtn}>
                            <QuantityButton imgsrc="/plus-icon-black.svg" light={true} />
                        </div>
                    </div>
                    <div className={styles.offerInfo}>
                        <p className={styles.text}>{text}</p>
                        <p className={styles.separator}>|</p>
                        <p className={styles.price}>{~~price}.<sup>{price.split(".")[1]}</sup></p>
                    </div>
                </div>
            }
        </div>
    );
}