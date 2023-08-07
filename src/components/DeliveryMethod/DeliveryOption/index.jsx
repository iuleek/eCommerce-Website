import styles from './DeliveryOption.module.css'

export default function DeliveryOption({ price, title, time }) {
    return (
        <div className={styles.deliveryOption}>
            <div className={styles.deliveryOption__text}>
                <p className={styles.deliveryOption__bigText}>{price} - {title}</p>
                <p className={styles.deliveryOption__smallText}>{time}</p>
            </div>
            <input className={styles.radioBtn} type="radio" name="radio-button"/>
        </div>
    )
}