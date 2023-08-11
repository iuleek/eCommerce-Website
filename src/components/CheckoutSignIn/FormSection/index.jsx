import styles from './FormSection.module.css'
import Stepper from '../Stepper'
import Tabs from '../Tabs'
import Title from '@/components/Title'
import GuestForm from '../GuestForm'
import SignInForm from '../SignInForm'

const tabsData = [
    {
        id: 1,
        name: 'Checkout as guest',
        content: <GuestForm />
    },
    {
        id: 2,
        name: 'Sign in into your account',
        content: <SignInForm />
    },
];

export default function FromSection() {
    return (
        <div className={styles.wrapper}>
            <Title level={5}>Fill it in and you're good to go!</Title>
            <div className={styles.formSection}>
                <Stepper activeStep={1} />
                <Tabs tabs={tabsData} />
            </div>
        </div>
    )
}