import styles from './FormSection.module.css'
import Stepper from '../Stepper'
import Tabs from '../Tabs'
import Title from '@/components/Title'

export default function FromSection() {
    return (
        <div className={styles.wrapper}>
            <Title level={5}>Fill it in and you're good to go!</Title>
            <div className={styles.formSection}>
                <Stepper activeStep={1}/>
                <Tabs />
            </div>
        </div>
    )
}