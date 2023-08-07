import Title from "@/components/Title";
import styles from './ProductSlider.module.css'
import TabsComponent from "./TabsComponent";

export default function ProductSlider() {
    return (
        <div className={styles.productSection}>
            <div className="container">
                <Title level={3}>Explore the items you'll love</Title>
                <TabsComponent />
            </div>
        </div>

    );

}

 // const type1 = <ProductItem imgSrc="/image-slider.svg" text="Berberana Red Dragon Tempranillo" prevPrice="12.90" currPrice="8.99" discount="30%" />
    // const type2 = <ProductItem imgSrc="/image-slider.svg" text="Berberana Red Dragon Tempranillo" prevPrice="12.90" currPrice="8.99" />
    // const obj = [type1, type2, type1, type2, type1, type2, type1, type2, type1, type2, type1]

    // const type3 = <ProductItem imgSrc="/image-slider.svg" text="THISTHIS and this" prevPrice="12.90" currPrice="8.99" discount="50%" />
    // const obj2 = [type3, type3, type3, type3, type3, type3, type3]

    // Number 1: Create state to mark active TAB
    // Number 2: Create TABbutton for each of tab content
    // Number 3: Figure out names for each TAB 
    // Number 4: Update Top state with the active state label

// #1 Copy json in component directory
// #2 Import inside a variable (hold value of json)
// #3 Create inside components dir TabsComponent
// #4 Copy the functionality inside Tabs Component
// #5 Pass as props the product json
// #6 Map the products to render 