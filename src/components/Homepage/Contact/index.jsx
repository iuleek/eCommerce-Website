import Title from '@/components/Title';
import styles from './Contact.module.css'
import ContactForm from './ContactForm';
import Questions from './Questions';

export default function Contact() {
    return (
        <div className={styles.contact}>
            <div className='container'>
                <Title level={2}>Any questions? Just ask.</Title>
                <Title level={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Title>
                <div className={styles.contactBottom}>
                    <ContactForm />
                    <Questions imgSrc="/image-icon.svg" />
                </div>
            </div>
        </div>
    );
}