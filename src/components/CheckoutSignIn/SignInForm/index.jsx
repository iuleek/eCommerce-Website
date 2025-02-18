import Logo from './Logo'
import styles from './SignInForm.module.css'
import React from "react"
export default function SignInForm({show}) {
    return (
        <div className={show ? `${styles.signInSection} ${styles.show}` : `${styles.signInSection}`}>
            <Logo />
            <form className={styles.signInForm}>
                <input className={styles.signInForm__input} type="email" placeholder="E-mail" name="email" />
                <input className={styles.signInForm__input} type="password" placeholder="Password" name="password" />
                <div className={styles.signInForm__radioBtn}>
                    <input className={styles.radioBtn} type="radio" name="radio-button" id="remember" />
                    <label htmlFor="remember">Remember me for next session</label>
                </div>
                <input className={styles.signInForm__btn} type="submit" value="Sign In" />
                <hr className={styles.signInForm__line}></hr>
                <input className={`${styles.signInForm__btnSocial} ${styles.facebook}`} type="submit" value="Sign In with Facebook" />
                <input className={`${styles.signInForm__btnSocial} ${styles.google}`} type="submit" value="Sign In with Google" />
            </form>
        </div>
    )
}