import FooterContact from '../FooterContact'
import InputBar from '@/components/Header/InputBar';
import styles from './Subscribe.module.css'
import React from "react"
export default function Subscribe() {
    return (
        <div>
            <FooterContact text="Subscribe" subtext="Don't miss out on any Dutchie news!" />
            <InputBar className={styles.emailBar} text="Enter your e-mail address" inputType="email" />
        </div>
    );
}