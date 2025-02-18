import styles from './FilterOption.module.css'
import { useContext} from 'react';
import { FiltersContext } from '@/components/Context/FiltersContext';
import React from "react"
export default function FilterOption({ text, items, id }) {

    const { filters, addFilter, removeFilter } = useContext(FiltersContext);
    const item = filters.find((filter) => {
        return filter.id === id;
    });
    // eslint-disable-next-line no-unused-vars
    const handleFilterClick = event => {
        if (item === undefined) {
            addFilter({ text, items, id });
        }
        if (item !== undefined) {
            removeFilter({ text, items, id });
        }
    }

    return (
        <button id={id} type="button" className={`${styles.filterBtn} ${item !== undefined ? styles.isActive : ""}`}
            onClick={handleFilterClick}>🥖 {text} {items} </button>
    );
}