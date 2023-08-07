import styles from './PromoSection.module.css'
import GridComponent from '@/components/GridComponent';
import Title from '@/components/Title';
import Button from '@/components/Button';
import OfferButton from './OfferButton';
import OfferItem from './OfferItem';

export default function PromoSection() {
    return (
        <section className={styles.promoSection}>
            <div className="container">
            <div className={styles.container__inner}>
                <GridComponent>
                    <div className={styles.leftSide}>
                        <Title level={2}>YAY! KING'S DAY!</Title>
                        <OfferButton btnText="⏰ This offer valid only untill 1st of May" />
                        <Title level={4}>Grab a <strong>treat basket</strong> for a special occasion</Title>
                        <p className={styles.leftSide__paragraph}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Purus, vitae ante risus quis cursus aliquam consectetur.
                        </p>
                        <Button
                            style="btnDark btnLarge"
                            text="More for less — check it out"
                            imgPosition=""
                        />
                    </div>
                    <div className={styles.rightSide}>
                        <OfferItem style="dark" text="Party Must-Haves" price="8.99" imgSource="/product-image-white.svg"/>
                        <OfferItem style="light" text="For king and his queen" price="8.99" imgSource="/product-image-black.svg"/>
                        <OfferItem style="light" text="King's decorations" price="8.99" imgSource="/product-image-black.svg"/>
                        <OfferItem style="dark" text="  King's day with Family" price="8.99" imgSource="/product-image-white.svg"/>          
                    </div>
                </GridComponent>
                </div>
            </div>
        </section>
    );
}