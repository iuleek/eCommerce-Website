import Styles from "./ButtonDelete.module.css";
import Image from "next/image";
import { useCartContext, cardActionType } from "@/components/context/cartContext";
import { useEffect } from "react";
import { calcPrice } from "../CartUtils";

export default function ButtonDelete({ id }) {
  const { state, dispatch } = useCartContext();

  useEffect(() => {
    calcPrice(state.cards, dispatch);
  }, [state.cards]);

  const handleDelete = (id) => () => {
    const items = state.cards.filter((card) => {
      return card.id !== id;
    });
    dispatch({ type: cardActionType.UPDATE_CARDS, payload: items });
  };

  return (
    <button className={Styles.btn_delete} type="button" onClick={handleDelete(id)}>
      <Image src="/delete-product.svg" width={24} height={24} alt="icon" />
    </button>
  );
}
