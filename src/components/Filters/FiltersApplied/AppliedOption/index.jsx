import styles from './AppliedOption.module.css'
import { useContext } from 'react';
import { FiltersContext } from '@/components/Context/FiltersContext';
import React from "react"
export default function FilterApplied({ text, items, id }) {

    const { removeFilter } = useContext(FiltersContext);
    // eslint-disable-next-line no-unused-vars
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