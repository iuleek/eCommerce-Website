import styles from './FilterList.module.css'
import FilterOption from '../FilterOption'

export default function FilterList({data}) {
    return (
        <details className={styles.customDetails}>
            <summary className={styles.customDetails__title}>{data.title}</summary>
            {data.items.map((option) => (
                <div key={option.id} className={styles.filterSection__options}>
                    <FilterOption text={option.name} items={option.number} id={option.id}/>
                </div>
            ))}
        </details>
    )
}