import MegaMenu from "../MegaMenu";
import NavLink from "../NavLink";
import styles from './NavBar.module.css'
import { useState } from "react";

export default function NavBar() {

    const [activeDropdown, setActiveDropdown] = useState("");

    function toggleDropdown(openDropdown) {
        let option = activeDropdown === openDropdown ? setActiveDropdown("") : setActiveDropdown(openDropdown);
        return option;
    }

    const obj1 = {
        "title": "Shop",
        "content": ["Placeholder", "Placeholder", "Placeholder"]
    };
    const dropDownObjectEx = [obj1, obj1, obj1, obj1];

    const obj2 = {
        "title": "Something",
        "content": ["Candy", "Candy", "Candy"]
    };
    const dropDownObjectEx2 = [obj2, obj2, obj2, obj2];

    return (
        <div>
            <div className={styles.navigation}>
                <NavLink style={`${styles.navLink} ${styles.hasChildren}`} text="Foods" handleClick={toggleDropdown} />
                <NavLink style={`${styles.navLink} ${styles.hasChildren}`} text="Products" handleClick={toggleDropdown} />
                <NavLink style={styles.navLink} text="Deals" isLink={true} />
            </div>
            <MegaMenu dropDownObject={dropDownObjectEx} show={activeDropdown === "Foods"} />
            <MegaMenu dropDownObject={dropDownObjectEx2} show={activeDropdown === "Products"} />
        </div>
    );
}