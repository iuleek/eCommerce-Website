import Button from '@/components/Button';
import styles from './CategoryItem.module.css'

export default function CategoryItem({ text, btnDark, btnText, btnLight }) {
    return (
        <div className={styles.categoryItem}>
            <p className={styles.categoryItem__text}>{text}</p>
            {btnDark &&
                <Button
                    style="btnDark btnRegular"
                    text={btnText}
                    iconSrc="/arrow-right.svg"
                    imgPosition="right" />}
            {btnLight &&
                <Button
                    style="btnLight__black btnRegular"
                    text={btnText}
                    iconSrc="/arrow-right-black.svg"
                    imgPosition="right" />}
        </div>
    );
}