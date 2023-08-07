import styles from './HeorHeader.module.css'
import Banner from './Banner'

export default function HeroHeaderProduct() {
    return (
        <div className={styles.heroHeader}>
            <div className='container'>
                <div className={styles.container__inner}>
                    <Banner />
                </div>
            </div>
        </div>
    )
}