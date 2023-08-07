import SortProducts from '@/components/ProductListingComp/SortProducts';
import FilterOption from '../FilterOption';
import styles from './FiltersApplied.module.css'
import Products from '@/components/ProductListingComp/Products';

export default function FiltersApplied() {
    // function cancelled() {
    //     let isCancelled = true;
    //     return isCancelled;
    // }

    return (
        <div className={styles.filtersApplied}>
            <div className={styles.filtersApplied__top}>
            <div>
                <p>Applied filters:</p>
                <div>
                    <FilterOption text="Option 1" isApplied={true} />
                    <FilterOption text="Option 2" isApplied={true} />
                    <FilterOption text="Option 3" isApplied={true} />
                </div>
                </div>
                <SortProducts />
            </div>     
            <Products />
        </div>
    );
}