import { cardActionType } from "@/components/context/cartContext";

export function calcPrice(cards, dispatch) {
  const finalPrice = cards.reduce((acc, curr) => {
    return acc + parseFloat(curr.totalPrice);
  }, 0);
  dispatch({ type: cardActionType.SET_TOTAL_PRICE, payload: finalPrice });
};

export function calculateTotal(quantity, price) {
  return parseFloat((quantity * parseFloat(price)).toFixed(2));
};

export function updateCartItems(dispatch, cards, id, totalPrice) {
  const updatedCards = cards.map((card) => ({
    ...card,
    totalPrice: id === card.id ? totalPrice : card.totalPrice,
  }));

  dispatch({ type: cardActionType.UPDATE_CARDS, payload: updatedCards });
}