import TabButton from '../TabButton';
import data from '../products.json';
import { useState } from "react";
import SwiperComponent from '../SwiperComponent';
import styles from './TabsComponent.module.css'
import React from "react"
export default function TabsComponent() {
    var dataObject = data;

    const [activeTab, setActiveTab] = useState(dataObject.productTabs[0].name);

    function displaySwiper(showSwiper) {
        setActiveTab(showSwiper);
    }

    return (
        <div className={styles.tabsComponent}>
            <div className={styles.tab}>
                {dataObject.productTabs.map((item, index) => (
                    <TabButton key={index} isActive={activeTab === item.name} text={item.name} handleClick={displaySwiper} />
                ))}
            </div>
            {dataObject.productTabs.map((item, index) => (
                activeTab === item.name && <SwiperComponent key={index} cards={item.items} />
            ))}
        </div>
    );
}

{/* <TabButton isActive={activeTab === "Explore"} text="Explore" handleClick={displaySwiper} />
     <TabButton isActive={activeTab === "Party Items"} text="Party Items" handleClick={displaySwiper} />
     <TabButton isActive={activeTab === "For Kids"} text="For Kids" handleClick={displaySwiper} /> */}
{/* {activeTab === "Explore" && <SwiperComponent cards={obj} /> }
    {activeTab === "Party Items" && <SwiperComponent cards={obj2} /> }
    {activeTab === "For Kids" && <SwiperComponent cards={obj} /> }       */}