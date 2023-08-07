import styles from './CheckoutLayout.module.css'

export default function CheckoutLayout({children}) {
    return (
        <div className={styles.layout}>
            {children}
        </div>
    )
}