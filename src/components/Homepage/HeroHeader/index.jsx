import GridComponent from '@/components/GridComponent';
import Title from "../../Title"
import Button from '../../Button'
import HeroImage from './HeroImage';
import styles from './HeroHeader.module.css'
import Link from 'next/link';

export default function HeroHeader() {
    return (
        <section className={styles.heroHeader}>
            <div className="container">
                <GridComponent>
                    <div className={styles.leftSide}>
                        <Title level={1}>Your <strong className={styles.strongText}>dutch store,</strong> always closed.</Title>
                        <p className={styles.paragraph}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <Link className={styles.leftSide__btn} href="/product-listing">
                            <Button
                                style="btnDark btnLarge"
                                text="Check out the deals"
                                iconSrc="/percent.svg"
                                imgPosition="left"
                            />
                        </Link>
                    </div>
                    <div className={styles.rightSide}>
                        <HeroImage source="/products.svg" sizeH={285} sizeW={530} />
                    </div>
                </GridComponent>
            </div>
        </section>
    );
}
