import styles from './AppliedOption.module.css'
import { useState, useContext } from 'react';
import { FiltersContext } from '@/components/Context/FiltersContext';

export default function FilterApplied({ text, items, id }) {

    const { removeFilter } = useContext(FiltersContext);
    const handleClick = event => {
        removeFilter({ text, items, id });
    }
    return (
        <button
            id={id}
            type="button"
            className={`${styles.appliedFilter}`}
            onClick={handleClick}
        >
            🥖 {text}
        </button>
    );
}