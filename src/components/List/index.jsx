import styles from './List.module.css'
import Link from 'next/link'
import React from "react"
export default function List({object, option, headerList, classTitle, classList, classListItem, classListLink}) {

    return (
        <div>
            <h6 className={classTitle}>{object.title}</h6>
            { headerList ? <hr className={styles.line}></hr> : ""}
            <p className={styles.option}><em>{option}</em></p>
            <ul className={classList}>
                {object.content.map((item, index) => (
                    <li key={index} className={classListItem}><Link className={classListLink} href="#">{item}</Link></li>
                ))}
            </ul>
        </div>
    );
}


// function SwitchType(label, whereTo, item) {
//     switch(label) {
//         case 'link':
//           return <Link className={classListLink} href={whereTo}>{item}</Link>;
//         case 'anchor':
//           return <a className={classAnchorLink} href={whereTo}>{item}</a>
//         default:
//           console.log("No appropiate type");
//       }
// }