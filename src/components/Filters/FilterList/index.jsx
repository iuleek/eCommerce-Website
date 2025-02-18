import styles from './FilterList.module.css'
import FilterOption from '../FilterOption'
import React from "react"
export default function FilterList({data}) {
    return (
        <details className={styles.customDetails}>
            <summary className={styles.customDetails__title}>{data.title}</summary>
            {data.items.map((option, index) => (
                <div key={index} className={styles.filterSection__options}>
                    <FilterOption text={option.name} items={option.number} id={option.id}/>
                </div>
            ))}
        </details>
    )
}