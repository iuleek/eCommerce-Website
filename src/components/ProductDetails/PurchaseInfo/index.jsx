import Title from '@/components/Title';
import styles from './PurchaseInfo.module.css'
import Button from '@/components/Button';
import InfoTag from '@/components/InfoTag';
import Tag from '@/components/Tag';
import React from "react"
export default function PurchaseInfo({title, info, price}) {
    price = (price.split("$")[1]);
    return (
        <div className={styles.purchaseInfo}>
            <Tag style="light" text="NEW" />
            <Title level={6}>{title}</Title>
            <p className={styles.purchaseInfo__details}>{info}</p>
            <InfoTag>Free delivery on orders more than <strong>$39.90</strong></InfoTag>
            <InfoTag>Arrives Wednesday, 1st of July</InfoTag>
            <p className={styles.price}>${~~price}.<sup>{price.split(".")[1]}</sup></p>
            <Button style="btnRegular btnDark" imgPosition='left' text="Add to cart" iconSrc="/plus-icon-white.svg" />
        </div>
    );
}