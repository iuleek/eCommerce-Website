import FooterContact from '../FooterContact'
import SocialMediaIcon from '../SocialMediaIcon'
import styles from './SocialMedia.module.css'
import React from "react"
export default function SocialMedia() {
    return (
        <div>
            <FooterContact text="Follow Dutchie" subtext="Eget at ac dapibus felis dolor amet." />
            <div className={styles.icon}>
                <SocialMediaIcon source="/instagram-icon.svg" />
                <SocialMediaIcon source="/mail-icon.svg" />
                <SocialMediaIcon source="/mail-icon.svg" />
                <SocialMediaIcon source="/mail-icon.svg" />
                <SocialMediaIcon source="/mail-icon.svg" />
            </div>
        </div>
    )
}