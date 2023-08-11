import styles from './FilterOption.module.css'
import { useContext, useState } from 'react';
import { FiltersContext } from '@/components/Context/FiltersContext';

export default function FilterOption({ text, items, id }) {

    const { filters, addFilter, removeFilter } = useContext(FiltersContext);
    const item = filters.find((filter) => {
        return filter.id === id;
    });
    function handleFilterClick() {
        if (item === undefined) {
            addFilter({ text, items, id });
        }
        else {
            removeFilter({ text, items, id });
        }
    }

    return (
        <button id={id} type="button" className={`${styles.filterBtn} ${item !== undefined ? styles.isActive : ""}`}
            onClick={handleFilterClick}>🥖 {text} {items} </button>
    );
}