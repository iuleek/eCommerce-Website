import styles from "./CartHeader.module.css";
import Image from "next/image";
import Title from "@/components/title";
import Button from "@/components/Button";
import Link from "next/link";
import React from "react"
export default function CartHeader({title, btnText}) {
  return (
    <div className={styles.cart_header}>
      <div className={styles.title}>
        <Image src="/shopping-cart-gray.svg" width={24} height={24} alt="img" />
        <Title level={5}>{title}</Title>
      </div>
      <Link className={styles.linkBtn} href="/checkout/personal-details">
        <Button
          style="btnLarge btnDark"
          text={btnText}
          imgPosition="none"
        />
      </Link>
    </div>
  );
}
