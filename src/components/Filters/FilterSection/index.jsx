import FilterOption from '../FilterOption'
import styles from './FilterSection.module.css'
import FilterList from '../FilterList'

export default function FilterSection({ obj }) {

    return (
        <div className={styles.filterSection}>
            {obj.filterSections.map((filter, index) => (
                <FilterList key={index} data={filter}/>
            ))
            }
        </div>

    )
}