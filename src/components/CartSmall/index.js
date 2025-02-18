import Styles from "./CartSmall.module.css";
import Title from "@/components/title";
import Image from "next/image";
import ItemSmall from "./item-small";
import { useCartContext, cardActionType } from "@/components/context/cartContext";
import { useEffect } from "react";
import React from "react"
export default function CartSmall() {
  const { state, dispatch } = useCartContext();
  const { cards } = state;
  
  useEffect(() => {
    const finalPrice = state.cards.reduce((acc, curr) => {
      return acc + parseFloat(curr.totalPrice);
    }, 0);

    dispatch({ type: cardActionType.SET_TOTAL_PRICE, payload: finalPrice });

    // const feePrice = (Number(finalPrice) + 4.9).toFixed(2);
    // console.log((Number(finalPrice) + 4.9).toFixed(2));
  }, cards);

  return (
    <div className={Styles.cart_small}>
      <div className={Styles.cart_small_header}>
        <Image src="/shopping-cart.svg" width={24} height={24} alt="icon" />
        <Title level={5}>Your cart ({state.cards.length} items)</Title>
      </div>
      <div className={Styles.wrapper_cart_small}>
        <div className={Styles.wrapper_cart_items}>
          {cards.map((card) => {
            return <ItemSmall key={card.id} {...card} />;
          })}
        </div>
        <div className={Styles.modal_footer}>
          <div className={Styles.top}>
            <div className={Styles.subtotal}>
              <p className={Styles.subtotal_text}>Subtotal</p>
              <p className={Styles.subtotal_price}>
                <span>$</span> {state.totalPrice.toFixed(2)}
              </p>
            </div>
            <div className={Styles.shipping}>
              <p className={Styles.shipping_text}>shipping</p>
              <p className={Styles.shipping_price}>
                <span>$</span> 4.90
              </p>
            </div>
          </div>
          <div className={Styles.bottom}>
            <p className={Styles.total_text}>Total</p>
            <p className={Styles.total_price}>
              <span>$</span> {(Number(state.totalPrice) + 4.9).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
