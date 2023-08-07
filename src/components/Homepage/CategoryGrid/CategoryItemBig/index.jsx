import Button from "@/components/Button"
import styles from './CategoryItemBig.module.css'

export default function CategoryItemBig({text, btnText}) {
    return (
        <div className={styles.categoryItemBig}>
            <p className={styles.categoryItemBig__text}>{text}</p>
            <Button
                style="btnLight__white btnRegular"
                text={btnText} 
                iconSrc="/arrow-right.svg"
                iconPosition="right" />
        </div>
    )
}