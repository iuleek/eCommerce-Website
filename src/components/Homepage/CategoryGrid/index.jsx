import CategoryItemBig from "./CategoryItemBig";
import CategoryWrapper from "./CategoryWrapper";
import styles from './CategoryGrid.module.css'
import CategoryItem from "./CategoryItem";

export default function CategoryGrid() {
    return (
        <div className={styles.categoryGrid}>
            <div className="container">
                <div className={styles.categoryWrapper}>
                    <div className={styles.bigItem}>
                        <CategoryItemBig text="Lorem ipsum dolor sit amet, consectetur" btnText="from 8.90€" />
                    </div>
                    <div className={styles.smallItem}>
                        <CategoryItem text="Lorem ipsum dolor sit amet, consectetur" btnText="Check it out" btnDark={true}/>
                        </div>
                        <div className={styles.smallItem}>
                        <CategoryItem text="Lorem ipsum dolor sit amet, consectetur" btnText="from 8.90€" btnLight={true}/>
                        </div>
                        <div className={styles.smallItem}>
                        <CategoryItem text="Lorem ipsum dolor sit amet, consectetur" btnText="Check it out" btnDark={true}/>
                        </div>
                        <div className={styles.smallItem}>
                        <CategoryItem text="Lorem ipsum dolor sit amet, consectetur" btnText="from 8.90€" btnLight={true}/>
                        </div>
                </div>
            </div>
        </div>
    );
}