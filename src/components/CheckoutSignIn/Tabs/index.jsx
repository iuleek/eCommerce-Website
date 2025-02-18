import GuestForm from '../GuestForm'
import SignInForm from '../SignInForm'
import styles from './Tabs.module.css'
import { useState } from 'react'
import React from "react"
export default function Tabs() {

    const [activeForm, setActiveForm] = useState(2);

    function toggleForm(activeBtn) {

       setActiveForm(activeBtn);
       console.log("Current activeBTN:", activeBtn);
       console.log("Current activeForm:", activeForm);
    }
    return (
        <div>
            <div className={styles.tabs}>
                <button className={`${styles.tabBtn} ${activeForm === 1 ? styles.active : ''}`} onClick={() => toggleForm(1)}>Checkout as guest</button>
                <button className={`${styles.tabBtn} ${activeForm === 2 ? styles.active : ''}`} onClick={() => toggleForm(2)}>Sign in into your account</button>
            </div> 
            <GuestForm show={activeForm === 1}/>
            <SignInForm show={activeForm === 2}/>
        </div>

    )
}
