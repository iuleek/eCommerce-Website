import styles from './FilterOption.module.css'
import { useContext, useState } from 'react';
import { FiltersContext } from '@/components/Context/FiltersContext';

export default function FilterOption({ text, items, id }) {
    const [isActive, setIsActive] = useState(false);

    const { filters, addFilter } = useContext(FiltersContext);
    const handleFilterClick = event => {
        const item = filters.find((filter) => {
            return filter.id === id;
        });
        if (item === undefined) {
            addFilter({ text, items, id });
            setIsActive(current => !current);
        }
    }

    return (
        <button id={id} type="button" className={`${styles.filterBtn} ${isActive === true ? styles.isActive : ""}`}
            onClick={handleFilterClick}>🥖 {text} {items} </button>
    );
}