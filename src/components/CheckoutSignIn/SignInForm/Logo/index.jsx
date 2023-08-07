import styles from './Logo.module.css'
import Image from 'next/image';

export default function Logo() {
    return (
        <div className={styles.logoSection}>
            <div className={styles.logo}>
                <Image src="/logoForm.svg" alt="Logo" width={145} height={30} />
                <p className={styles.logo__text}>| <span><em>members</em></span></p>
            </div>
            <p className={styles.logo__subtext}>Not a member? Don't hesitate to <span className={styles.signup}>sign up</span></p>
        </div>

    );
}