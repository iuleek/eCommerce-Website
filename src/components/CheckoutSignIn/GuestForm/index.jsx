import InputBar from '@/components/Header/InputBar'
import styles from './GuestForm.module.css'

export default function GuestForm({ show }) {
    return (
<div className={`${styles.guestForm} ${show ? styles.show : ''}`}>            <h6 className={styles.guestForm__title}>Personal details</h6>
            <form className={styles.guestForm__form}>
                <input className={styles.guestForm__input} type="email" placeholder="E-mail" name="email" />
                <hr className={styles.guestForm__line}></hr>
                <div className={styles.formSection}>
                    <input className={styles.guestForm__input} type="text" placeholder="First Name" name="first-name" />
                    <input className={styles.guestForm__input} type="text" placeholder="Last Name" name="last-name" />
                    <input className={styles.guestForm__input} type="tel" placeholder="Phone (optional)" name="phone" />
                </div>
                <hr className={styles.guestForm__line}></hr>
                <InputBar text="Enter the first line of your adress" inputType="text" className={styles.search} />
            </form>
            <div className={styles.guestForm__footer}>
                <div className={styles.guestForm__footer__left}>
                    <p className={styles.text}>Country</p>
                    <p className={styles.country}>🇳🇱 Netherlands</p>
                </div>
                
                <div className={styles.guestForm__footer__right}>
                    <p className={styles.text}>Change Country</p>
                </div>
            </div>
        </div>

    )
}