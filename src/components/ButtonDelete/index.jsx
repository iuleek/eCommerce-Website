import Styles from "./ButtonDelete.module.css";
import Image from "next/image";
import {
  useCartContext,
  cardActionType,
} from "@/components/context/cartContext";
import { useEffect } from "react";

export default function ButtonDelete({ id }) {
  const { state, dispatch } = useCartContext();

  useEffect(() => {
    const finalPrice = state.cards.reduce((acc, curr) => {
      return acc + parseFloat(curr.totalPrice);
    }, 0);

    dispatch({ type: cardActionType.SET_TOTAL_PRICE, payload: finalPrice });
  }, [state.cards]);

  const handleDelete = (id) => {
    return () => {
      const items = state.cards.filter((card) => {
        return card.id !== id;
      });
      dispatch({ type: cardActionType.UPDATE_CARDS, payload: items });
    };
  };

  return (
    <button
      type="button"
      className={Styles.btn_delete}
      onClick={handleDelete(id)}
    >
      <Image src="/delete-product.svg" width={24} height={24} alt="icon" />
    </button>
  );
}
