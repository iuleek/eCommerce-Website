import List from '../../List'
import styles from './MegaMenu.module.css'

export default function MegaMenu({ dropDownObject, classMenu, show }) {
    return (
        <div className={show ? `${styles.megaMenu} ${styles.show}` : `${styles.megaMenu}`}>
            <div className="container">
                <div className={`${classMenu} ${styles.container__inner}`}>
                    {dropDownObject && dropDownObject.map((listItem, index) =>
                        <List key={index}
                            object={listItem}
                            headerList={true}
                            classTitle={styles.title}
                            classList={styles.list}
                            classListItem={styles.listItem}
                            classListLink={styles.listLink}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}