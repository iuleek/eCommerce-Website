import Styles from "./Cart.module.css";
import CartHeader from "./CartHeader";
import CartSubtotal from "./CartSubtotal";
import CartItem from "./CartItem";
import { useCartContext } from "@/components/context/cartContext";
import { useEffect } from "react";
import { calcPrice } from "../CartUtils";

export default function CartWrapper() {
  const { state, dispatch } = useCartContext();
  const { cards } = state;

  useEffect(() => {
    calcPrice(state.cards, dispatch);
  }, [state.cards]);

  return (
    <section className={Styles.cart_wrapper}>
      <div className="container_small">
        <CartHeader btnText="Proceed to checkout" title="Items in your cart" />
        <div className={Styles.cart_box}>
          <CartSubtotal subtotal={state.totalPrice.toFixed(2)} />
          <div className={Styles.cart_items}>
            {cards.map((card) => {
              return <CartItem key={card.id} {...card} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
