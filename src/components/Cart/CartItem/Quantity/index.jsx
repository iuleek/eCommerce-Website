import Styles from "./Quantity.module.css";
import Image from "next/image";
import { iconDimensions } from "@/components/Config";

export default function Quantity({ setCount, count }) {
  function handleDecrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  function handleIncrease() {
    setCount(count + 1);
  };

  return (
    <div className={Styles.quantity}>
      <button className={Styles.btn} type="button" onClick={handleDecrease}>
        <Image src="/minus-icon-white.svg"  width={iconDimensions.small} height={iconDimensions.small} alt="icon" />
      </button>
      
      <p><span>{count} </span>x</p>

      <button className={Styles.btn} type="button" onClick={handleIncrease}>
        <Image src="/plus-icon-white.svg" width={iconDimensions.small}  height={iconDimensions.small} alt="icon" />
      </button>
    </div>
  );
}
