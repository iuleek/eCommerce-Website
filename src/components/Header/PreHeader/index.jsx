import Email from '../Email'
import Discount from '../Discount'
import SecondaryNavItem from '../SecondaryNav';
import styles from './PreHeader.module.css'
import React from "react"
export default function PreHeader() {
    return (
        <div className={styles.preHeader}>
        <div className="container">
        <div className={styles.container__inner}>
            <Email address="info@dutchie.nt" />
            <Discount offer="40% off dutch sweets" time=" only today!" />
            <div className={styles.secondaryNav}>
                <SecondaryNavItem text="Contact" location="/#contact" />
                <SecondaryNavItem text="FAQ" location="/#contact"/>
            </div>
            </div>
            </div>
        </div>
    );
}