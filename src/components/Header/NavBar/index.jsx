import MegaMenu from "../MegaMenu";
import NavLink from "../NavLink";
import styles from './NavBar.module.css'
import { useState } from "react";
import data from './megamenu-data.json';

export default function NavBar() {
    const [activeDropdown, setActiveDropdown] = useState("");

    function toggleDropdown(openDropdown) {
        let option = activeDropdown === openDropdown ? setActiveDropdown("") : setActiveDropdown(openDropdown);
        return option;
    }
    return (
        <div>
            <div className={styles.navigation}>
                <NavLink style={`${styles.navLink} ${styles.hasChildren}`} text="Foods" handleClick={toggleDropdown} />
                <NavLink style={`${styles.navLink} ${styles.hasChildren}`} text="Products" handleClick={toggleDropdown} />
                <NavLink style={styles.navLink} text="Deals" isLink={true} redirect="/product-listing" />
            </div>
            {data.megaMenuData.map(menuItem => (
                <MegaMenu
                    key={menuItem.menuId}
                    dropDownObject={menuItem.menuItems}
                    show={activeDropdown === menuItem.menuType}
                />
            ))}
        </div>
    );
}