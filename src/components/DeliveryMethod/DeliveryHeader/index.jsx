import Title from '@/components/Title'
import styles from './DeliveryHeader.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function DeliveryHeader({ btnText, titleText, titleIcon, btnHref }) {
    return (
        <div className={styles.deliveryHeader}>
            <Link className={styles.deliveryHeader__link} href={btnHref}>
                <button className={styles.deliveryHeader__btn} type="button">{btnText}</button>
            </Link>
            <hr className={styles.deliveryHeader__line}></hr>
            <div className={styles.deliveryHeader__title}>
                <Image src={titleIcon} alt="truck" width={22} height={22} />
                <Title level={8}>{titleText}</Title>
            </div>
        </div>
    )
}