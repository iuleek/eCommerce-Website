import styles from './Tag.module.css'

export default function Tag({text, style}) {
    return (
        <span className={style}>{text}</span>
    )
}