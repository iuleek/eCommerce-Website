import styles from './Description.module.css'
import Title from '@/components/Title'

export default function Description({ title, description, object }) {
    return (
        <div className={styles.description}>
            <Title level={5}>{title}</Title>
            <p className={styles.description__text}>{description}</p>
            <ul className={styles.description__list}>
                {object && object.map((item, index) => (
                    <li key={index} className={styles.description__listItem}>{item}</li>
                ))}
            </ul>
        </div>
    )
}