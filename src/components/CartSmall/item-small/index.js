import Styles from "./ItemSmall.module.css";
import Title from "@/components/title";
import Quantity from "@/components/Cart/CartItem/Quantity";
import ButtonDelete from "@/components/ButtonDelete";
import { useState, useEffect } from "react";
import {
  useCartContext,
  cardActionType,
} from "@/components/context/cartContext";

export default function ItemSmall(props) {
  const { id, img, title, currPrice } = props;
  const initialCount = 1;
  const [count, setCount] = useState(initialCount);
  const [total, setTotal] = useState(currPrice);
  const { state, dispatch } = useCartContext();

  useEffect(() => {
    const finalTotal = parseFloat((count * parseFloat(currPrice)).toFixed(2));
    setTotal(finalTotal);

    const items = state.cards.map((card) => {
      return {
        ...card,
        totalPrice: id === card.id ? finalTotal : card.totalPrice,
      };
    });

    dispatch({ type: cardActionType.UPDATE_CARDS, payload: items });

    const finalPrice = state.cards.reduce((acc, curr) => {
      return acc + parseFloat(curr.totalPrice);
    }, 0);

    dispatch({ type: cardActionType.SET_TOTAL_PRICE, payload: finalPrice });
  }, [count]);

  return (
    <div className={Styles.item_small}>
      <div className={Styles.wrapper_title_quantity}>
        <Title level={8}>
          {title}
          {id}
        </Title>
        <Quantity setCount={setCount} count={count} imgsrc={img} />
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
