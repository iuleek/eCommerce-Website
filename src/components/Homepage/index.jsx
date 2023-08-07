import CategoryGrid from "./CategoryGrid";
import HeroHeader from "./HeroHeader";
import ProductSlider from "./ProductSlider";
import PromoSection from "./PromoSection";
import Contact from "./Contact";


export default function Homepage() {
    return (
        <>
            <HeroHeader />
            <CategoryGrid />
            <ProductSlider />
            <PromoSection />
            <Contact />
        </>
    );
}