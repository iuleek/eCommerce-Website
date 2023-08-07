import styles from './OfferButton.module.css'

export default function OfferButton({btnText}) {
    return (
        <button className={styles.offerBtn}>{btnText}</button>
    );
}