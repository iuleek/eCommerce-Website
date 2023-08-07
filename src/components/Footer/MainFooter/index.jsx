import List from '../../List'
import Subscribe from '../Subscribe';
import SocialMedia from '../SocialMedia';
import styles from './MainFooter.module.css'

export default function MainFooter() {
    const obj1 = {
        "title": "Shop",
        "content": ["Placeholder", "Placeholder", "Placeholder"]
    };

    const obj = [obj1, obj1, obj1, obj1];
    return (
        <div className={styles.mainFooter}>
            <div className="container">
                <div className={styles.container__inner}>
                    <div className={styles.footerLists}>
                        <List
                            object={obj1}
                            option="By Category"
                            classTitle={styles.title}
                            classList={styles.list}
                            classListItem={styles.listItem}
                            classListLink={styles.listLink}
                        />
                        {obj.map((item, index) =>
                        (<List
                            key={index}
                            object={item}
                            classTitle={styles.title}
                            classList={styles.list}
                            classListItem={styles.listItem}
                            classListLink={styles.listLink}
                        />
                        ))}
                    </div>
                    <div className={styles.footerContact}>
                        <Subscribe />
                        <SocialMedia />
                    </div>
                </div>
            </div>
        </div>
    )
}