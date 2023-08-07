import Logo from "@/components/Logo"
import Rights from '../Rights'
import styles from './PreFooter.module.css'

export default function PreFooter() {
    return (
        <div className={styles.preFooter}>
            <div className="container">
                <div className={styles.container__inner}>
                    <Logo source="/logoWhite.svg" />
                    <Rights text="Bionic Wireframe Kit 2020 ® All rights reserved" />
                </div>
            </div>
        </div>

    )
}