import styles from './AppliedOption.module.css'
import { useState, useContext } from 'react';
import { FiltersContext } from '@/components/Context/FiltersContext';

export default function FilterApplied({ text, items, id }) {
    const [isCancelled, setIsCancelled] = useState(false);

    const { removeFilter } = useContext(FiltersContext);
    const handleClick = event => {
        removeFilter({ text, items, id });
        setIsCancelled(current => !current);
    }
    return (
        <button
            id={id}
            type="button"
            className={`${styles.appliedFilter} 
            ${isCancelled === true ? styles.isCancelled : ""}`}
            onClick={handleClick}
        >
            🥖 {text}
        </button>
    );
}