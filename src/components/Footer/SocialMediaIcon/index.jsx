import Image from "next/image"
import Link from "next/link"
import styles from './SocialMediaIcon.module.css'

export default function SocialMediaIcon({ source }) {
    return (
        <Link className={styles.imageWrapper} href="#">
            <Image
                className={styles.icon}
                src={source}
                width={21}
                height={21}
                alt="Social Media"
            />
        </Link>
    )
}