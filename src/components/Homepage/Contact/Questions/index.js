import styles from './Questions.module.css'
import Image from 'next/image';
import Title from '@/components/Title';
import InputBar from '@/components/Header/InputBar';
import ContactBtn from './ContactBtn';

export default function Questions({ imgSrc }) {
    return (
        <div className={styles.questionsSection}>
            <div className={styles.topHalf}>
                <Image className={styles.topHalf__image} src={imgSrc} width={54} height={54} alt="" />
                <Title level={5}>Get all the answers right away.</Title>
                <p className={styles.topHalf__subTitle}>Ask a question and get all of your answers right away.</p>
                <InputBar text="e.g. When will my order arrive?" inputType="text" className={styles.searchQuestion} />
            </div>
            <div className={styles.bottomHalf}>
                <p className={styles.bottomHalf__text}>Didn't find your answer? Give it a call or message.</p>
                <div className={styles.buttons}>
                    <ContactBtn type="tel" text="+1 202-555-0173" />
                    <ContactBtn type="email" text="lekker@dutchie.com" />
                </div>
            </div>
        </div>
    );
}