import styles from './FormSection.module.css'
import Stepper from '../Stepper'
import Tabs from '../Tabs'
import Title from '@/components/Title'
import React from "react"
export default function FromSection() {
    return (
        <div className={styles.wrapper}>
            <Title level={5}>Fill it in and you&aposre good to go!</Title>
            <div className={styles.formSection}>
                <Stepper active={1}/>
                <Tabs />
            </div>
        </div>
    )
}