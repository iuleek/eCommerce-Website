import styles from './Banner.module.css'
import Title from '@/components/Title'

export default function Banner() {
    return (
        <div className={styles.banner}>
        <p className={styles.banner__category}>Party items</p>
        <Title level={5}>A party without these items is simply not a party.</Title>
        </div>
    )
}