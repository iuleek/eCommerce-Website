import ProductItem from '@/components/ProductItem'
import styles from './Products.module.css'
import data from './product-listing.json'
import { FiltersContext } from '@/components/Context/FiltersContext';
import { useContext } from 'react';

export default function Products() {
    const { filters } = useContext(FiltersContext);
    let labels = [];
    filters && filters.map((filter) => {
        labels.push(filter.text.toLowerCase());
    })
    return (
        <div className={styles.products}>
            {labels.length !== 0 ? (
                labels.map(label => (                   
                        data.productListing.map((card, index) =>
                            card.category === label && (
                                <ProductItem
                                    key={index}
                                    id={card.id}
                                    img={card.img}
                                    title={card.name}
                                    originalPrice={card.price}
                                    currPrice={card.price}
                                    discount={card.discount}
                                />
                            )
                        )
                ))
            ) : (
                data.productListing.map((card, index) => (
                    <ProductItem
                        key={index}
                        id={card.id}
                        img={card.img}
                        title={card.name}
                        originalPrice={card.price}
                        currPrice={card.price}
                        discount={card.discount}
                    />
                ))
            )}
        </div>
    );
}
