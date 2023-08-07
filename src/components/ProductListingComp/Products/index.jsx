import ProductItem from '@/components/ProductItem'
import styles from './Products.module.css'
import data from './product-listing.json'

export default function Products(props) {
    const { id, img, discount, title, originalPrice, currPrice } = props;

    return (
        <div className={styles.products}>
            {data.productListing.map((card, index) => (
                <ProductItem key={index}
                    id={card.id}
                    img={card.img}
                    title={card.name}
                    originalPrice={card.price}
                    currPrice={card.price}
                    discount={card.discount} />
            ))}
        </div>
    )
}