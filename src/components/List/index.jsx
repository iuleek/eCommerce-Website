import styles from './List.module.css'
import Link from 'next/link'

export default function List({ object, headerList, classTitle, classList, classListItem, classListLink }) {
    return (
        <div>
            <h6 className={classTitle}>{object.title}</h6>
            {headerList && <hr className={styles.line}></hr>}
            <ul className={classList}>
                {object.content.map((item) => (
                    <li key={item.id} className={classListItem}><Link className={classListLink} href="#">{item.label}</Link></li>
                ))}
            </ul>
        </div>
    );
}