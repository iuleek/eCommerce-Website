import styles from './GridComponent.module.css'

export default function GridComponent({children}) {
    return (
        <div className={styles.gridComponent}>
            {children}
        </div>
    );
}