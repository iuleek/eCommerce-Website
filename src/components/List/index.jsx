import styles from './List.module.css'
import Link from 'next/link'

export default function List({ object, option, headerList, classTitle, classList, classListItem, classListLink }) {
    return (
        <div>
            <h6 className={classTitle}>{object.title}</h6>
            {headerList && <hr className={styles.line}></hr>}
            <p className={styles.option}><em>{option}</em></p>
            <ul className={classList}>
                {object.content.map((item, index) => (
                    <li key={index} className={classListItem}><Link className={classListLink} href="#">{item}</Link></li>
                ))}
            </ul>
        </div>
    );
}