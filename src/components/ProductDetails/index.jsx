import AlsoBought from "./AlsoBought";
import Characteristics from "./Characteristics";
import Description from "./Description";
import PurchaseInfo from "./PurchaseInfo";
import ProductSwiper from './ProductSwiper'
import images from './photos.json'
import styles from './ProductDetails.module.css'
import BreadCrumbs from "../BreadCrumbs";

export default function ProductDetails() {

    const item = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    const item2 = "Lorem ipsum dolor sit amet."
    const obj = [item, item, item];
    const obj2 = [item2, item2, item2];

    return (
        <>
        <BreadCrumbs />
        <div className="container">
      
            <div className={styles.container__iner}>
                <div className={styles.container__left}>
                    <ProductSwiper />
                    <Description
                        title="Description"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sit pretium lectus dignissim id nulla nisl at pellentesque:"
                        object={obj} />
                    <Characteristics
                        title="Characteristics"
                        description=""
                        object={obj2}
                    />
                </div>
                <div className={styles.container__right}>
                    <PurchaseInfo title="Product Title" info="250 g  •  Regular price per kilogram $39.90" price="$18.90" />
                    <AlsoBought />
                </div>
            </div>
        </div>
        </>
    )
}