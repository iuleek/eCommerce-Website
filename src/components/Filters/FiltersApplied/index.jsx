import SortProducts from '@/components/ProductListingComp/SortProducts';
import styles from './FiltersApplied.module.css'
import Products from '@/components/ProductListingComp/Products';
import { useContext } from 'react';
import { FiltersContext } from '@/components/Context/FiltersContext';
import AppliedOption from './AppliedOption';

export default function FiltersApplied() {
    const { filters } = useContext(FiltersContext);

    return (
        <div className={styles.filtersApplied}>
            <div className={styles.filtersApplied__top}>
                <div>
                    <p>Applied filters:</p>
                    <div>
                        {filters.map((filter) => (
                            <AppliedOption
                                key={filter.id}
                                text={filter.text}
                                id={filter.id} />
                        ))}
                    </div>
                </div>
                <SortProducts />
            </div>
            <Products />
        </div>
    );
}