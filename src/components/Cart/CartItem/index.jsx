import Styles from "./CartItem.module.css";
import Title from "@/components/title";
import Quantity from "./Quantity";
import { useState, useEffect } from "react";
import { useCartContext, cardActionType } from "@/components/context/cartContext";
import ButtonDelete from "@/components/ButtonDelete";
import { calcPrice, calculateTotal, updateCartItems } from "@/components/CartUtils";

export default function CartItem({ id, img, title, currPrice }) {
  const props = { id, img, title, currPrice };
  const initialCount = 1;
  const [count, setCount] = useState(initialCount);
  const [total, setTotal] = useState(currPrice);
  const { state, dispatch } = useCartContext();

  useEffect(() => {
    const finalTotal = calculateTotal(count, currPrice);
    setTotal(finalTotal);
    updateCartItems(dispatch, state.cards, id, finalTotal);
    calcPrice(state.cards, dispatch);
  }, [count]);

  return (
    <div className={Styles.cart_item}>
      <div className={Styles.left}>
        <div className={Styles.image}>
          <img src={img} width={30} height={30} alt="icon" />
        </div>
        <div className={Styles.wrapper_title_quantity}>
          <Title level={7}>{title}</Title>
          <Quantity setCount={setCount} count={count} />
        </div>
      </div>
      <div className={Styles.wrapper_delete_price}>
        <ButtonDelete {...props} />
        <p className={Styles.price}>
          <span className={Styles.currency}>$ </span>
          {total}
        </p>
      </div>
    </div>
  );
}
