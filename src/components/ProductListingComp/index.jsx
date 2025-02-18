import BreadCrumbs from "../BreadCrumbs";
import FilterSection from "../Filters/FilterSection";
import FiltersApplied from "../Filters/FiltersApplied";
import HeroHeaderProduct from "./HeroHeaderProduct";
import LayoutProductListing from "./LayoutProductListing";
import data from './filter-section.json'
import React from "react"
export default function ProductListingComp() {
    return (
        <>
            <HeroHeaderProduct />
            <BreadCrumbs />
            <LayoutProductListing>
                <FilterSection obj={data} />
                <FiltersApplied />
            </LayoutProductListing>
        </>
    )
}