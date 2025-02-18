import styles from './Button.module.css';
import Image from 'next/image';
import React from "react"
export default function Button({ style = "", text, iconSrc, imgPosition = "right" }) {

  return (
    <button className={style}>
      {imgPosition === "left" && <Image src={iconSrc} className={styles.imgLeft} width={16} height={16} alt="icon" />}
      {text}
      {imgPosition === "right" && <Image src={iconSrc} className={styles.imgRight} width={16} height={16} alt="icon" />}
    </button>
  );
}
