import Header from '../Header'
import Footer from '../Footer'
import SEO from '../SEO'
import React from "react"
export default function Layout({ children }) {
    return (
        <>
            <SEO />
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}
