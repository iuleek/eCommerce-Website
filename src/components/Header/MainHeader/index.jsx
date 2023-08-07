import Logo from "../../Logo";
import InputBar from "../InputBar";
import Shop from "../Shop";
import User from "../User"
import styles from "./MainHeader.module.css"
import NavBar from "../NavBar";
import { useCartContext } from "@/components/context/cartContext";

export default function MainHeader() {
    const { state } = useCartContext();
    const obj1 = {
        "title": "Shop",
        "content": ["Placeholder", "Placeholder", "Placeholder"]
    };

    const dropDownObjectEx = [obj1, obj1, obj1, obj1];
    return (
        <div className={styles.mainHeader}>
            <div className="container">
                <div className={styles.container__inner}>
                    <Logo source="/logo.svg" />
                    <NavBar />
                    <InputBar text="Search for foods, products or other" inputType="text" />
                    <div className={styles.options}>
                        <User />
                        <Shop price={state.totalPrice.toFixed(2)} />
                    </div>
                </div>
            </div>
        </div>
    );
}