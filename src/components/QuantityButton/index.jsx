import styles from './QuantityButton.module.css'
import Image from 'next/image';
import { useEffect } from "react";
import Link from 'next/link';
import React from "react"
import { useCartContext, cardActionType } from "../context/cartContext";

export default function Quantity(props) {
    const context = useCartContext();
    const { id, imgsrc, light } = props;
    const { state, dispatch } = context;

    useEffect(() => {
        const finalPrice = state.cards.reduce((acc, curr) => {
            return acc + parseFloat(curr.totalPrice);
        }, 0);

        dispatch({ type: cardActionType.SET_TOTAL_PRICE, payload: finalPrice });
    }, [state.cards]);

    const handleClick = (e) => {
        e.preventDefault();
        const item = state.cards.find((card) => {
            return card.id === id;
        });
        if (item === undefined) {
            dispatch({
                type: cardActionType.ADD_TO_CART,
                payload: { ...props, totalPrice: props.currPrice },
            });

            const finalPrice = state.cards.reduce((acc, curr) => {
                return acc + parseFloat(curr.totalPrice);
            }, 0);
            dispatch({ type: cardActionType.SET_TOTAL_PRICE, payload: finalPrice });

            alert("ADDED TO CART");
        }
    };

    return (
        <>
            <Link className={ light === true ? `${styles.button_add_light }` : `${styles.button_add}`} href="#" onClick={handleClick} >
                <Image src={imgsrc} width={16} height={16} alt="plus" />
            </Link>
        </>
    );
}