// import styles from './ProductItem.module.css'
// import QuantityButton from '../QuantityButton'

// export default function ProductItem(props) {
//     var { id, imgSrc, discount, text, prevPrice = "", currPrice = "" } = props;

//     currPrice = (currPrice.split("$")[1]);
//     let disc;
//     if (discount) {disc = (discount.split("%")[0]);}
//     prevPrice = ((Number(disc) * Number(currPrice)/100) + Number(currPrice))
 
//         return (
//         <div className={styles.sliderItem}>
//             <div className={`${styles.card__top}`} >
//                 <img className={styles.sliderImage} src={imgSrc} alt="productImage" />
//                 {discount && <span className={styles.discount}>{discount}</span>}
//             </div>
//             <div className={styles.sliderInfo}>
//                 <p className={styles.sliderInfo__text}>{text}</p>
//                 <div className={styles.card__bottom}>
//                     <div className={styles.pricing}>
//                        {discount && <p className={styles.prevPrice}><del>{~~prevPrice}.</del><sup>{prevPrice.toString().split(".")[1]}</sup></p>}
//                         <p className={styles.currPrice}>${~~currPrice}.<sup>{currPrice.split(".")[1]}</sup></p>
//                     </div>
//                     <QuantityButton imgsrc="/plus-icon-white.svg" {...props}/>
//                 </div>
//             </div>
//         </div>
//     );
// }

import Styles from "./ProductItem.module.css";
import Link from "next/link";
import QuantityButton from '../QuantityButton'

export default function ProductCard(props) {
  const { id, img, discount, title, originalPrice, currPrice } = props;

  return (
    <div className={Styles.product_card}>
      <div className={Styles.card_top}>
        <img src={img} alt="img" />
        {discount ? <span className={Styles.discount}>{discount}</span> : ""}
      </div>

      <div className={Styles.card_body}>
        <Link className={Styles.card_title} href="/product-details">
          {title}
        </Link>
        <div className={Styles.card_bottom}>
          <p className={Styles.current_price}>
            <span className={Styles.original_price}>
              <s>{originalPrice}</s>
            </span>
            <span className={Styles.dollar}>$</span>
            <span>{currPrice}</span>
          </p>
          <QuantityButton imgsrc="/plus-icon-white.svg" {...props}/>
        </div>
      </div>
    </div>
  );
}
