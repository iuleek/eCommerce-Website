import styles from './Characteristics.module.css'
import Title from '@/components/Title'
import React from "react"
export default function Characteristics({ title, object }) {
    return (
        <div className={styles.characteristics}>
            <Title level={5}>{title}</Title>
            <div className={styles.characteristics__inputs}>
            {object && object.map((item, index) => (
                <div key={index} className={styles.characteristics__listItem} >
                    <input className={styles.characteristics__checkbox} type="checkbox" name="index" />
                    <label htmlFor="index">{item}</label>
                </div>
            ))}
            </div>
        </div>
    )
}